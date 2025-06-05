"use client";

import { BASE_URL } from "@/config/api.config";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogsSection = ({ Blogs }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 px-4 py-3 sm:px-6">
        <h2 className="text-white font-semibold text-lg">Featured Blogs</h2>
      </div>

      {/* Blog Content */}
      <div className="p-4 sm:p-6">
        <div className="space-y-6">
          {Blogs.length &&
            Blogs.map((blog, index) => (
              <article
                key={index}
                className={`group cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-lg p-3 -m-3 ${
                  index !== Blogs.length - 1
                    ? "border-b border-gray-100 pb-6 mb-6"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <div className="w-full sm:w-32 h-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={`${BASE_URL}${blog.blog_thumbnail}`}
                        alt={blog.blog_title}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/featuredblogs/${blog.blog_id}/${blog.blog_url}`}
                      className="font-semibold text-gray-900 text-sm sm:text-base leading-snug mb-2 group-hover:text-red-600 transition-colors duration-200 line-clamp-2"
                    >
                      {/* <h3  */}
                      {blog.blog_title}
                      {/* </h3> */}
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>
                          Posted on{" "}
                          {new Date(blog.posted_on).toLocaleDateString("en-US")}
                        </span>
                      </div>

                      <Link
                        href={`/featuredblogs/${blog.blog_id}/${blog.blog_url}`}
                      >
                        <div className="flex items-center text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="mr-1">Read more</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* View All Button */}
        {pathname !== "/featuredblogs" && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link href="/featuredblogs">
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium">
                View All Blogs
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsSection;
