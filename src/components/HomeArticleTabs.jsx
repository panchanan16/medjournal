"use client";

import Link from "next/link";
import { useState } from "react";

function HomeArticleTabs({ ArticleLatest }) {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="lg:col-span-2">
      {/* Enhanced Tabs */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8 overflow-hidden">
        <nav className="flex">
          {[
            { id: "current", label: "latest Articles", icon: "📰" },
            { id: "popular", label: "Most Read", icon: "🔥" },
            { id: "funded", label: "NIH Funded", icon: "💰" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-6 font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Featured Article */}
      <article className="bg-white rounded-lg shadow-lg border border-gray-100 p-5 mb-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
          {ArticleLatest.length &&
            ArticleLatest.map((article, key) => (
              <div className="flex-1 border-b-2 border-gray-200 mb-3" key={key}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-green-100 text-green-700 font-semibold text-xs px-3 py-1.5 rounded-full">
                    {article.articleType}
                  </span>
                </div>
                <Link href={`/article-read/${article.ariticle_id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-red-600 cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Wan-Run Peng, Fei Zhang, Wen-Wen Ma, Jie Da, Han-Qing Yu
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200">
                    PDF Pages
                  </span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1.5 rounded-full border border-purple-200">
                    Full Text
                  </span>                  
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1.5 rounded-full border border-orange-200">
                    Get Permission
                  </span>
                </div>
                {/* <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 text-xs transition-all duration-300">
                      Read Full Article →
                    </button> */}
              </div>
            ))}
        </div>
      </article>
    </div>
  );
}

export default HomeArticleTabs;
