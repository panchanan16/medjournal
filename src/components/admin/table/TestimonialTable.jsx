"use client";

import { _DELETE } from "@/request/request";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function TestimonialTable({ TestimonialList }) {
  const [selectedArticles, setSelectedArticles] = useState([1]);
  const [testimonials, setTestimonials] = useState(TestimonialList || []);

  async function deleteItem(e, ID, setItems, items, key) {
    e.stopPropagation();
    e.preventDefault();
    const response = await _DELETE(`testimonial/remove?test_id=${ID}`, 'core');
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
                Testimonials
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testimonials.map((index, id) => (
              <tr
                key={id}
                className={`hover:bg-red-50 transition-colors ${
                  selectedArticles.includes(id) ? "bg-red-50" : ""
                }`}
              >
                <td className="px-4 py-4 whitespace-nowrap"> 
                   {id + 1}                 
                </td>
                <td className="px-4 py-4 flex justify-between">
                  <Link href={`testimonials/create/${index.test_id}`}>
                    <div className="text-sm font-medium text-gray-800 hover:text-red-700 cursor-pointer">
                      {index.user_name}
                    </div>
                  </Link>
                  <span
                    onClick={(e) =>
                      deleteItem(
                        e,
                        index.test_id,
                        setTestimonials,
                        testimonials,
                        "test_id"
                      )
                    }
                  >
                    <Trash2Icon className="text-red-600 cursor-pointer" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex space-x-2">
          <Link href={`testimonials/create`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Add New testimonials
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TestimonialTable;
