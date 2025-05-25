"use client";

import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Latest Advances in Medical Research: Breaking New Ground",
      thumbnail:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      posted_on: "May 20, 2025",
      excerpt:
        "Discover the latest breakthroughs in medical research that are shaping the future of healthcare.",
    },
    {
      id: 2,
      title: "Understanding Cancer Treatment Modalities in 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      posted_on: "May 18, 2025",
      excerpt:
        "A comprehensive overview of modern cancer treatment approaches and their effectiveness.",
    },
    {
      id: 3,
      title: "Global Health Initiatives: Making Healthcare Accessible",
      thumbnail:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=250&fit=crop",
      posted_on: "May 15, 2025",
      excerpt:
        "Exploring worldwide efforts to improve healthcare accessibility and quality for all.",
    },
    {
      id: 4,
      title: "Digital Health Revolution: Technology Meets Medicine",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
      posted_on: "May 12, 2025",
      excerpt:
        "How digital technologies are transforming patient care and medical practices.",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-4 py-3 sm:px-6">
        <h2 className="text-white font-semibold text-lg">Featured Blogs</h2>
      </div>

      {/* Blog Content */}
      <div className="p-4 sm:p-6">
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className={`group cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-lg p-3 -m-3 ${
                index !== blogs.length - 1
                  ? "border-b border-gray-100 pb-6 mb-6"
                  : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-32 h-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug mb-2 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>Posted on {blog.posted_on}</span>
                    </div>

                    <div className="flex items-center text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="mr-1">Read more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">          
          <Link href="/featuredblogs">
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
