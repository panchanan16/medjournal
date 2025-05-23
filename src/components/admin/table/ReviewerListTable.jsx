"use client";

import Link from "next/link";
import { useState } from "react";

function ReviewerListTable({ reviewList, nextpageId }) {
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
                Review List
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reviewList.map((pep, id) => (
              <tr
                key={id}
                className={`transition-colors ${
                  selectedArticles.includes(pep.is_id) ? "bg-red-50" : ""
                }`}
              >               
                <td className="px-4 py-4 w-[30rem]">       
                    <div className="text-sm font-medium text-gray-800 cursor-pointer">
                      <span className="font-semibold">{pep.month}</span>
                      <ul>
                         {
                          pep.names?.map((item, key) => (
                            <li key={key} className="hover:text-red-700"><Link href={`${nextpageId}/edit/${item.r_id}`}>{item.name}</Link></li>
                          ))
                         }
                      </ul>
                    </div>                 
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

          <Link href={`${nextpageId}/create`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Create New People
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-700">1 article selected</div>
      </div>
    </>
  );
}

export default ReviewerListTable;
