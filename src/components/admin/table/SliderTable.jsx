"use client"

import Link from "next/link";
import { useState } from "react";

function SliderTable({ SliderList }) {
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
                Slider List
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {SliderList.map((index, id) => (
              <tr
                key={id}
                className={`hover:bg-red-50 transition-colors ${
                  selectedArticles.includes(index.slide_title)
                    ? "bg-red-50"
                    : ""
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
                  <Link href={`slider/create/${index.slider_id}`}>
                    <div className="text-sm font-medium text-gray-800 hover:text-red-700 cursor-pointer">
                      {index.slide_title}
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

          <Link href={`slider/create`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Create New Slider
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-700">1 article selected</div>
      </div>
    </>
  );
}

export default SliderTable;
