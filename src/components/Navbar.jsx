"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, FileText } from "lucide-react";
import JournalHeader from "./JournalHeader";
import { _GET } from "@/request/request";

export default function Navbar({ policy }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    archives: false,
    author: false,
    special: false,
  });

  const toggleDropdown = (menu) => {
    const newState = { ...dropdownOpen };
    newState[menu] = !newState[menu];
    setDropdownOpen(newState);
  };

  return (
    <>
      <JournalHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 z-10">
            <Link
              href="/"
              className="text-red-800 font-medium hover:text-red-600 transition"
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("about")}
              >
                <span>About</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen.about ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen.about && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  <Link
                    href="/about-us"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Journal Information
                  </Link>
                  <Link
                    href="/editorial-policies"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Editorial Board
                  </Link>
                  <Link
                    href="/volume"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Volumes
                  </Link>
                </div>
              )}
            </div>

            {/* Similar dropdown patterns for Archives, Author Information, and Special Issues */}
            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("archives")}
              >
                <span>Archives</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen.archives ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen.archives && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  <Link
                    href="/archives/2024"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    2024 Issues
                  </Link>
                  <Link
                    href="/archives/2023"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    2023 Issues
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("author")}
              >
                <span>Author Information</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen.author ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen.author && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  <Link
                    href="/authors/guidelines"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Submission Guidelines
                  </Link>
                  <Link
                    href="/authors/review"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Review Process
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("special")}
              >
                <span>Special Issues</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen.special ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen.special && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  <Link
                    href="/special/current"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Current Special Issue
                  </Link>
                  <Link
                    href="/special/upcoming"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Upcoming Special Issues
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/submit"
              className="text-red-800 font-medium hover:text-red-600 transition"
            >
              Submit Article
            </Link>
            <div className="pt-2">
              <a
                href="mailto:submission@ejmp.org.uk"
                className="text-sm text-gray-700 hover:text-red-600 transition flex items-center gap-1"
              >
                <FileText size={16} /> submission@ejmp.org.uk
              </a>
              <Link
                href="/faqs"
                className="text-sm text-gray-700 hover:text-red-600 transition mt-2 block"
              >
                FAQs
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gradient-to-r from-red-700 to-red-500 text-white shadow">
        <nav className="container mx-auto px-2">
          <ul className="flex">
            <li className="group relative">
              <Link
                href="/"
                className="px-4 py-3 text-sm inline-block font-medium hover:bg-red-800 transition"
              >
                Home
              </Link>
            </li>
            <li className="group relative min-w-fit">
              <button className="px-4 py-3 font-medium text-sm hover:bg-red-800 transition flex items-center">
                Journal Info
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-48">
                <Link
                  href="/about-us"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  About Us
                </Link>
                <Link
                  href="/indexing"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Indexing
                </Link>
                <Link
                  href="/editor-in-chief"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Editor In Chief
                </Link>
                <Link
                  href="/editor-board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Editorial Board
                </Link>
                <Link
                  href="/editor-board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Former Editorial Board
                </Link>
                <Link
                  href="/editor-board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Peer Review Process
                </Link>
                <Link
                  href="/editor-board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Supplement & Series
                </Link>
                <Link
                  href="/editor-board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Advertising Policies
                </Link>
                <Link
                  href="/editorial-policies"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Testingmonials
                </Link>
              </div>
            </li>
            <li className="group relative min-w-fit">
              <button className="px-4 py-3 font-medium text-sm hover:bg-red-800 transition flex items-center">
                For Authors
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-48">
                <Link
                  href="/author-instruction"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Authors Instruction
                </Link>
                <Link
                  href="/archives/2023"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Online Submission
                </Link>
                <Link
                  href="/archives/2023"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Submit Mutimedia Files
                </Link>
                <Link
                  href="/archives/2023"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Refference Style
                </Link>
                <Link
                  href="/archives/2023"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Interview With Outstanding Authors
                </Link>
              </div>
            </li>
            <li className="group relative min-w-fit">
              <button className="px-4 py-3 font-medium text-sm hover:bg-red-800 transition flex items-center">
                For Reviewers
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-64">
                <Link
                  href="/reviewer_guidelines"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Guidelines For Reviewers
                </Link>
                <Link
                  href="/review"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Reviewers
                </Link>
              </div>
            </li>
            <li className="group relative min-w-fit">
              <button className="px-4 py-3 font-medium text-sm hover:bg-red-800 transition flex items-center">
                Ethics & Policies
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-64">
                {policy &&
                  policy.length &&
                  policy.map((pol, ind) => (
                    <Link
                      key={ind}
                      href={
                        pol.pageUrl ? `/policy/${pol.pageUrl}` : pol.redirectLink
                      }
                      className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                    >
                      {pol.name}
                    </Link>
                  ))}
              </div>
            </li>
            <li className="group relative min-w-fit z-30">
              <button className="px-4 py-3 font-medium text-sm hover:bg-red-800 transition flex items-center">
                Special Issues
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-48">
                <Link
                  href="/published-special-issue"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Current Special Issue
                </Link>
                <Link
                  href="/special/1"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Upcoming Special Issues
                </Link>
                <Link
                  href="/articless"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Article
                </Link>
              </div>
            </li>
            <li className="group relative min-w-fit z-30">
               <Link
                href="/archives"
                className="px-4 py-3 text-sm inline-block font-medium hover:bg-red-800 transition"
              >
                Archives
              </Link>           
            </li>
            <li className="group relative min-w-fit">
              <Link
                href="/online-first"
                className="px-4 py-3 text-sm inline-block font-medium hover:bg-red-800 transition"
              >
                Online First
              </Link>
            </li>
            <li className="group relative min-w-fit">
              <Link
                href="/article-charges"
                className="px-4 py-3 text-sm inline-block font-medium hover:bg-red-800 transition"
              >
                Article Processing Charges
              </Link>
            </li>
            <li className="group relative min-w-fit">
              <Link
                href="/submit"
                className="bg-red-700 hover:bg-orange-700 px-4 py-3 inline-block font-medium text-sm transition"
              >
                Submit Article
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Bar */}
      {/* <div className="bg-gray-100 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
