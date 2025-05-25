"use client";
import { useState } from "react";
import {
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";
import { BASE_URL } from "@/config/api.config";

function BlogFull({ FullBlog }) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = FullBlog.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
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
            src={`${BASE_URL}${FullBlog.blog_thumbnail}`}
            alt={FullBlog.blog_title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {FullBlog.blog_title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-200">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted on {new Date(FullBlog.posted_on).toLocaleDateString()}</span>
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
                dangerouslySetInnerHTML={{ __html: FullBlog.blog_details }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Share Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share this article
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Share on Facebook
                </button>

                <button
                  onClick={() => handleShare("twitter")}
                  className="w-full flex items-center justify-center px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Share on Twitter
                </button>

                <button
                  onClick={() => handleShare("linkedin")}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Share on LinkedIn
                </button>

                <button
                  onClick={() => handleShare("copy")}
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
                onClick={() => handleShare("facebook")}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                Facebook
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Twitter className="w-4 h-4 mr-3 text-sky-500" />
                Twitter
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                LinkedIn
              </button>
              <button
                onClick={() => handleShare("copy")}
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
}

export default BlogFull;
