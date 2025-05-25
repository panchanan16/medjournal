"use client"

import { useState } from 'react';
import { Calendar, Share2, Facebook, Twitter, Linkedin, Link2, ArrowLeft, Clock, User } from 'lucide-react';

const BlogDetailPage = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  // Sample blog data - replace with actual data from your API
  const blogData = {
    id: 1,
    title: "Latest Advances in Medical Research: Breaking New Ground in Cancer Treatment",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
    posted_on: "May 20, 2025",
    author: "Dr. Sarah Johnson",
    reading_time: "8 min read",
    content: `
      <p>The landscape of medical research has undergone tremendous transformation in recent years, particularly in the field of cancer treatment. As we advance into 2025, groundbreaking discoveries are reshaping how we approach, understand, and treat various forms of cancer.</p>
      
      <h2>Revolutionary Treatment Approaches</h2>
      <p>One of the most significant developments has been the advancement of personalized medicine. By analyzing individual genetic profiles, researchers can now tailor treatments to specific patients, dramatically improving success rates and reducing side effects.</p>
      
      <p>Immunotherapy has emerged as a game-changing approach, harnessing the body's immune system to fight cancer cells more effectively. Recent clinical trials have shown remarkable results, with some patients experiencing complete remission in previously untreatable cases.</p>
      
      <h2>Technological Integration</h2>
      <p>The integration of artificial intelligence and machine learning in diagnostic processes has accelerated early detection capabilities. AI algorithms can now identify potential cancer markers in medical imaging with unprecedented accuracy, often detecting abnormalities that might be missed by traditional methods.</p>
      
      <p>Nanotechnology has also played a crucial role, enabling targeted drug delivery systems that can reach cancer cells while minimizing damage to healthy tissue. These microscopic delivery systems represent a significant leap forward in precision medicine.</p>
      
      <h2>Global Collaboration and Research</h2>
      <p>The medical research community has demonstrated unprecedented collaboration, with institutions worldwide sharing data and resources. This global approach has accelerated the pace of discovery and brought new treatments to patients faster than ever before.</p>
      
      <p>Clinical trials are now more accessible and diverse, ensuring that treatments are effective across different populations and demographics. This inclusive approach has led to more comprehensive understanding of how various treatments work across different groups.</p>
      
      <h2>Looking Forward</h2>
      <p>As we continue to push the boundaries of medical research, the future holds even more promise. Gene editing technologies, advanced imaging techniques, and novel therapeutic approaches are all on the horizon, offering hope to millions of patients worldwide.</p>
      
      <p>The commitment to scientific excellence and patient care remains at the forefront of these advances, ensuring that breakthrough discoveries translate into real-world benefits for those who need them most.</p>
    `
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogData.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <img 
            src={blogData.thumbnail} 
            alt={blogData.title}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {blogData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-200">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted on {blogData.posted_on}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <div 
                className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4"
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Share Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Share on Facebook
                </button>
                
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Share on Twitter
                </button>
                
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Share on LinkedIn
                </button>
                
                <button 
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Link2 className="w-5 h-5 mr-2" />
                  Copy Link
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Share Button (Mobile) */}
      <div className="lg:hidden fixed bottom-6 right-6">
        <div className="relative">
          <button 
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            <Share2 className="w-6 h-6" />
          </button>
          
          {showShareMenu && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 min-w-48 border">
              <button 
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                Facebook
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Twitter className="w-4 h-4 mr-3 text-sky-500" />
                Twitter
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                LinkedIn
              </button>
              <button 
                onClick={() => handleShare('copy')}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Link2 className="w-4 h-4 mr-3 text-gray-600" />
                Copy Link
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;