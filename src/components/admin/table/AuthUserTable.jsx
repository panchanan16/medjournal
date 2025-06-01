"use client";

import { _DELETE } from "@/request/request";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AuthUserTable({ Users }) {
  const [selectedArticles, setSelectedArticles] = useState([1]);
  const [authusers, setAuthusers] = useState(Users || []);

  async function deleteItem(e, ID, setItems, items, key) {
    e.stopPropagation();
    e.preventDefault();
    const response = await _DELETE(`auth/remove?auth_id=${ID}`, 'core');
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
                Users List
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {authusers.map((index, id) => (
              <tr
                key={id}
                className={`hover:bg-red-50 transition-colors ${
                  selectedArticles.includes(index.auth_id) ? "bg-red-50" : ""
                }`}
              >
                <td className="px-4 py-4 whitespace-nowrap">{id + 1}</td>
                <td className="px-4 py-4 flex justify-between">
                  <Link href={`authentication/create/${index.auth_id}`}>
                    <div className="text-sm font-medium text-gray-800 hover:text-red-700 cursor-pointer">
                      {index.first_name} {index.last_name} {`(${index.user_role})`}
                    </div>
                  </Link>
                  <span
                    onClick={(e) =>
                      deleteItem(
                        e,
                        index.auth_id,
                        setAuthusers,
                        authusers,
                        "auth_id"
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
          <Link href={`authentication/create`}>
            <button className="min-w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Create New User
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthUserTable;
