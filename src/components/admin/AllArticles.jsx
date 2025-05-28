"use client";

import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { _DELETE } from "@/request/request";

function AllArticles({ articles }) {
  const [selectedArticles, setSelectedArticles] = useState([1]);
  const [articleList, setArticleList] = useState(articles || []);

  async function deleteItem(e, ID, setItems, items, key) {
    e.stopPropagation();
    e.preventDefault();
    const response = await _DELETE(`article/remove?ariticle_id=${ID}`);
    if (response) {
      setItems(items.filter((el) => el[key] !== ID));
    }
  }

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
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articleList.map((article, id) => (
              <tr
                key={id}
                className={`hover:bg-red-50 transition-colors ${
                  selectedArticles.includes(article.id) ? "bg-red-50" : ""
                }`}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  {id + 1}
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
                    <button onClick={(e)=> deleteItem(e, article.ariticle_id, setArticleList, articleList, 'ariticle_id') } className="inline-flex items-center cursor-pointer px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 hover:bg-red-200">
                      <Trash2Icon size={14} className="mr-1" />
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex space-x-2">
          <Link href={`articles/addArticle`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Add A Article
            </button>
          </Link>
        </div>     
      </div>
    </>
  );
}

export default AllArticles;
