'use client'

import { useEffect, useRef, useState } from 'react';
import StyleSheet from '@/components/StyleSheet';
import { guidelineData } from '@/utils/data/guideline';

export default function Guidelines() {
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Generate table of contents from content
  useEffect(() => {
    const generateTOC = () => {
      if (!contentRef.current || !sidebarRef.current) return;

      const headings = contentRef.current.querySelectorAll('h2, h3, h4');
      const toc = [];

      headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;

        const level = parseInt(heading.tagName.substring(1)) - 2;
        toc.push({
          id,
          title: heading.textContent,
          level
        });
      });

      // Render the TOC
      sidebarRef.current.innerHTML = '';
      toc.forEach(item => {
        const link = document.createElement('a');
        link.href = `#${item.id}`;
        link.textContent = item.title;
        link.dataset.id = item.id;

        // Apply styling based on heading level
        if (item.level === 0) {
          link.className = 'block py-2 px-3 mb-1 font-semibold text-gray-800 hover:text-red-700 border-l-4 border-transparent hover:border-red-300 hover:bg-red-50 rounded-r transition duration-200';
        } else if (item.level === 1) {
          link.className = 'block py-1.5 px-3 pl-6 mb-1 text-sm text-gray-700 hover:text-red-600 border-l-4 border-transparent hover:border-red-200 hover:bg-red-50 rounded-r transition duration-200';
        } else {
          link.className = 'block py-1 px-3 pl-9 mb-1 text-xs text-gray-600 hover:text-red-500 border-l-4 border-transparent hover:border-red-100 hover:bg-red-50 rounded-r transition duration-200';
        }

        link.onclick = (e) => {
          e.preventDefault();
          scrollToSection(item.id);

          // Highlight active link
          const allLinks = sidebarRef.current.querySelectorAll('a');
          allLinks.forEach(l => {
            l.classList.remove('active-section');
          });
          link.classList.add('active-section');
        };

        sidebarRef.current.appendChild(link);
      });
    };

    // Run after initial render
    setTimeout(generateTOC, 100);

    // Track scroll position to highlight active section
    const handleScroll = () => {
      if (!contentRef.current) return;

      const headings = contentRef.current.querySelectorAll('h2, h3, h4');
      const scrollPosition = window.scrollY;

      // Find the current section in view
      let currentSection = '';
      headings.forEach(heading => {
        const sectionTop = heading.offsetTop - 100;
        if (scrollPosition >= sectionTop) {
          currentSection = heading.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);

        // Highlight active link
        if (sidebarRef.current) {
          const allLinks = sidebarRef.current.querySelectorAll('a');
          allLinks.forEach(link => {
            if (link.dataset.id === currentSection) {
              link.classList.add('active-section');
            } else {
              link.classList.remove('active-section');
            }
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', generateTOC);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', generateTOC);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Enhanced Sidebar */}
        <aside className="md:w-1/4 lg:w-1/3 md:pr-6 mb-6 md:mb-0">
          <div className="sticky top-4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-lg font-serif font-bold text-red-700 border-b-2 border-red-200 pb-2 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Guidelines for Authors
              </h2>
              <div className="bg-gradient-to-b from-red-50 to-white p-1 rounded-md">
                <nav ref={sidebarRef} className="sidebar-container max-h-[70vh] overflow-y-auto pr-1 space-y-0.5"></nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main ref={contentRef} className="md:w-3/4 lg:w-4/5 bg-white p-6 rounded-lg shadow-md html-content" dangerouslySetInnerHTML={{ __html: guidelineData }}>

        </main>
      </div>
      <StyleSheet />
    </div>
  );
}