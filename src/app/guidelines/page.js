'use client'

// JournalGuidelinesPage.jsx
import React, { useEffect, useState, useRef } from 'react';

const Guidelinespage = ({ guideline }) => {
  // State for active section
  const [activeSection, setActiveSection] = useState('');
  
  // Create refs for each section
  const sectionRefs = {
    about: useRef(null),
    manuscriptCategories: useRef(null),
    manuscriptSubmission: useRef(null),
    style: useRef(null),
    copyright: useRef(null),
    peerReview: useRef(null),
    charges: useRef(null),
    proofs: useRef(null),
    offprints: useRef(null),
    submitting: useRef(null)
  };
  
  // Example database content structure
  // In a real application, this would come from your database
  const dbContent = {
    title: "Guidelines for Authors",
    sections: [
      {
        id: "about",
        title: "1. ABOUT THE JOURNAL",
        content: `<p>JGO is indexed in PubMed, PubMed Central (PMC), Scopus, Science Citation Index Expanded (SCIE) and received its impact factor of 3.2 for the year 2023.</p><p>For more about our journal, please see: <a href="https://jgo.amegroups.org/about">https://jgo.amegroups.org/about</a></p>`
      },
      {
        id: "manuscriptCategories",
        title: "2. MANUSCRIPT CATEGORIES",
        content: `<div class="category-table">
          <table>
            <thead>
              <tr>
                <th>Manuscript categories</th>
                <th>Word limit</th>
                <th>Abstract</th>
                <th>Key words</th>
                <th>Main text</th>
                <th>References</th>
                <th>Tables and Figures</th>
                <th>Structure template</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Original Article</td>
                <td>No limit</td>
                <td>Structured with Background, Methods, Results, and Conclusions, 200-450 words</td>
                <td>3-5</td>
                <td>Structured as Introduction, Methods, Results, Discussion, and Conclusions. Require a highlight box</td>
                <td>No limit</td>
                <td>No limit</td>
                <td>Download</td>
              </tr>
              <tr>
                <td>Review Article</td>
                <td>6,000 max</td>
                <td>Unstructured, except for certain article types, 200-350 words</td>
                <td>3-5</td>
                <td>Include Introduction, main body (require discussion of future perspectives and limitations of the review), and Conclusions</td>
                <td>No limit</td>
                <td>No limit</td>
                <td>Download</td>
              </tr>
              <!-- More rows would be included here -->
            </tbody>
          </table>
        </div>
        <div class="subcategories">
          <h3>2.1 Original Article</h3>
          <p>2.1.1 Reporting Checklist</p>
          <p>2.1.2 Selection and Description of Participants</p>
          <p>2.1.3 Research Resource Identifiers (RRID)</p>
          
          <h3>2.2 Review Article</h3>
          <p>2.2.1 Systematic Reviews without Meta-analysis</p>
          <p>2.2.2 Scoping Review</p>
          <p>2.2.3 Narrative Review (Also Called Literature Review)</p>
          <p>2.2.4 Clinical Practice Review</p>
        </div>`
      },
      {
        id: "manuscriptSubmission",
        title: "3. MANUSCRIPT SUBMISSION REQUIREMENTS",
        content: `<p>All manuscripts must be submitted through the online submission system. Authors should follow the guidelines carefully to ensure the review process proceeds smoothly.</p>`
      },
      // Other sections would follow the same pattern
    ]
  };
  
  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  // Effect to handle intersection observer for detecting active section during scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section refs
    Object.keys(sectionRefs).forEach(key => {
      if (sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <style jsx global>{`
        /* Global styles */
        html-content a {
          color: #2563eb;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }        

        /* Main content styles */
        /* Sidebar styles */
 
        
        .sidebar h2 {
          font-size: 18px;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .sidebar-nav {
          list-style: none;
        }
        
        /* Content area styles */
        .content-area {
          flex: 1;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 30px;
        }
        
        .content-area h1 {
          font-size: 24px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
        }
        
        .content-section {
          margin-bottom: 40px;
          scroll-margin-top: 120px;
        }
        
        .content-section h2 {
          font-size: 20px;
          margin-bottom: 16px;
          color: #333;
        }
        
        .content-section h3 {
          font-size: 16px;
          margin: 16px 0 8px;
          color: #444;
        }
        
        .content-section p {
          margin-bottom: 12px;
          font-size: 14px;
        }
        
        /* Table styles */
        .category-table {
          overflow-x: auto;
          margin: 20px 0;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        
        th, td {
          border: 1px solid #ddd;
          padding: 8px 12px;
          text-align: left;
        }
        
        th {
          background-color: #f9f9f9;
          font-weight: 500;
        }
        
        tr:nth-child(even) {
          background-color: #f5f5f5;
        }

        
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            position: static;
            margin-bottom: 20px;
            max-height: none;
          }
          
          .journal-metrics {
            display: none;
          }
        }
      `}</style>

      
      {/* Main Content */}
      <main className="w-full flex gap-10 mt-5">
      {/* .sidebar {
          width: 25%;
          min-width: 250px;
          position: sticky;
          top: 120px;
          align-self: flex-start;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 20px;
          max-height: calc(100vh - 140px);
          overflow-y: auto;
        } */}
        {/* Sidebar */}
        <aside className="w-1/5 top-5 bg-white sticky items-start rounded-xl">
          <h2 className='text-lg font-bold mb-6 text-gray-800 border-b border-red-200 pb-2'>Guidelines for Authors</h2>
          <ul className="sidebar-nav">
            {dbContent.sections.map(section => (
              <li key={section.id}>
                <button 
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        
        {/* Content Area */}
        <div className="content-area">
          <h1>{dbContent.title}</h1>
          
          {dbContent.sections.map(section => (
            <section 
              key={section.id} 
              id={section.id} 
              ref={sectionRefs[section.id]} 
              className="content-section"
            >
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

// For Next.js pages, you would typically export the component and fetch data
export default Guidelinespage;

