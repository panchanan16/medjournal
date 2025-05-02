"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

function AllArticles({ articles }) {
  const [selectedArticles, setSelectedArticles] = useState([1]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-red-700 to-red-800">
            <tr>
              <th scope="col" className="w-12 px-4 py-3 text-left">
                <span className="sr-only">Select</span>
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Article Type
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Volume
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Issue
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article, id) => (
              <tr
                key={id}
                className={`hover:bg-red-50 transition-colors ${
                  selectedArticles.includes(article.id) ? "bg-red-50" : ""
                }`}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    // checked={selectedArticles.includes(article.id)}
                  />
                </td>
                <td className="px-4 py-4">
                  <Link href={`articles/addArticle/${article.ariticle_id}`}>
                    <div className="text-sm font-medium text-gray-800 hover:text-red-700 cursor-pointer">
                      {article.title}
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                    {article.articleType}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  Volume: {article.volume}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  Issue: {article.issueNo}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {article.inPress ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                      In Press
                    </span>
                  ) : (
                    <button className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 hover:bg-red-200">
                      <X size={14} className="mr-1" />
                      Dismiss
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex items-center justify-between">
          {/* <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">4</span> of{" "}
              <span className="font-medium">12</span> results
            </p>
          </div> */}
          <div>
            <div className="relative z-0 inline-flex shadow-sm rounded-md">
              <button className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-red-50">
                <ChevronLeft size={18} />
              </button>

              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-red-600 text-white hover:bg-red-700 z-10 text-sm font-medium">
                1
              </button>

              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-red-50 text-sm font-medium">
                2
              </button>

              <button className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-red-50 text-sm font-medium">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex space-x-2">
          <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
            <option>Action...</option>
            <option>Download Selected</option>
            <option>Mark as Read</option>
          </select>
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Go
          </button>

          <Link href={`articles/addArticle`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Add A Article
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-700">1 article selected</div>
      </div>
    </>
  );
}

export default AllArticles;
