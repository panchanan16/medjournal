"use client";

import { useAuth } from "@/context/AuthContext";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Adminheader() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <label htmlFor="search_field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Search className="h-5 w-5" />
              </div>
              <input
                id="search_field"
                className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center mr-5">
          <Link href={`/auth/user`}>
            <button className="px-3 cursor-pointer py-2 rounded-md text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100">
              User Dashboard
            </button>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href={`/`}>
            <button className="px-3 cursor-pointer py-2 rounded-md text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100">
              Visit Website
            </button>
          </Link>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-1">{user && user.email}</span>
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <div
                  className="block px-4 py-2 text-red-700 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => logout()}
                >
                  Sign out
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div>
              <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/erin.jpeg"
                  alt="User profile"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminheader;
