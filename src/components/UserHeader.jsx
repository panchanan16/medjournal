"use client";

import { useAuth } from "@/context/AuthContext";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function UserHeader() {
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
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* <h2 className="text-2xl font-bold text-red-700">
                European Journal of Clinical Pharmacy
              </h2> */}
              <h2 className="text-2xl font-bold text-red-700">
                International Medicine Journal
              </h2>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href={`/`}>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                Visit Website
              </button>
            </Link>

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
                  <div className="block px-4 py-2 text-blue-700 text-sm hover:bg-gray-100 cursor-pointer" onClick={()=> logout()}>
                    Sign out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserHeader;
