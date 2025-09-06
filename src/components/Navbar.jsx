"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import JournalHeader from "./JournalHeader";
import { _GET } from "@/request/request";

export default function Navbar({ policy, JournalHeaderData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    archives: false,
    author: false,
    special: false,
    ethics: false,
  });

  const toggleDropdown = (menu) => {
    const newState = { ...dropdownOpen };
    newState[menu] = !newState[menu];
    setDropdownOpen(newState);
  };

  return (
    <>
      <JournalHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        Data={JournalHeaderData}
      />
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
                <span>Journal Info</span>
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
                    About Us
                  </Link>
                  <Link
                    href="/indexing"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Indexing
                  </Link>
                  <Link
                    href="/editor-in-chief"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Editor in chief
                  </Link>
                  <Link
                    href="/editor-board"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Editor Board
                  </Link>
                  <Link
                    href="/former_board"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Former Editorial board
                  </Link>
                  <Link
                    href="/peer_review_process"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Peer Review Process
                  </Link>
                  <Link
                    href="/supplement_series"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Supplement & Series
                  </Link>
                  <Link
                    href="/testimonials"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Testimonials
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
                <span>For Authors</span>
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
                    href="/author-instruction"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Authors Instruction
                  </Link>
                  <Link
                    href="/submit_article"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Online Submission
                  </Link>
                  <Link
                    href="/multimedia_process"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Submit Multimedia Files
                  </Link>
                  <Link
                    href="/referstyle"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Refference Style
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("author")}
              >
                <span>For Reviewers</span>
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
                    href="/reviewer_guidelines"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Guidelines For Reviewers
                  </Link>
                  <Link
                    href="/review"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Reviewers
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-red-800 font-medium hover:text-red-600 transition"
                onClick={() => toggleDropdown("ethics")}
              >
                <span>Ethics & Policies</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen.ethics ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen.ethics && (
                <div className="pl-4 pt-2 flex flex-col space-y-2">
                  {policy &&
                    policy.length &&
                    policy.map((pol, ind) => (
                      <Link
                        key={ind}
                        href={
                          pol.pageUrl
                            ? `/policy/${pol.pageUrl}`
                            : pol.redirectLink
                        }
                        className="text-gray-700 hover:text-red-600 transition"
                      >
                        {pol.name}
                      </Link>
                    ))}
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
                    href="/published-special-issue"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Current Special Issue
                  </Link>
                  <Link
                    href="/upcoming_special_issue"
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    Upcoming Special Issues
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/archives"
              className="text-red-800 font-medium hover:text-red-600 transition"
            >
              Archieves
            </Link>

            <Link
              href="/article-charges"
              className="text-red-800 font-medium hover:text-red-600 transition"
            >
              Article Processing Charges
            </Link>

            <Link
              href="/submit_article"
              className="text-red-800 font-medium hover:text-red-600 transition"
            >
              Submit Article
            </Link>
            {/* <div className="pt-2">
              <a
                href="mailto:submission@ejmp.org.uk"
                className="text-sm text-gray-700 hover:text-red-600 transition flex items-center gap-1"
              >
                <FileText size={16} /> submission@ejmp.org.uk
              </a>
            </div> */}
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
                  href="/former_board"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Former Editorial Board
                </Link>
                <Link
                  href="/peer_review_process"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Peer Review Process
                </Link>
                <Link
                  href="/supplement_series"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Supplement & Series
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Testimonials
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
                  href="/submit_article"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Online Submission
                </Link>
                <Link
                  href="/multimedia_process"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Submit Mutimedia Files
                </Link>
                <Link
                  href="/referstyle"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Refference Style
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
                        pol.pageUrl
                          ? `/policy/${pol.pageUrl}`
                          : pol.redirectLink
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
                  href="/upcoming_special_issue"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-100 transition"
                >
                  Upcoming Special Issues
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
                href="/article-charges"
                className="px-4 py-3 text-sm inline-block font-medium hover:bg-red-800 transition"
              >
                Article Processing Charges
              </Link>
            </li>
            <li className="group relative min-w-fit">
              <Link
                href="/submit_article"
                className="bg-red-700 hover:bg-orange-700 px-4 py-3 inline-block font-medium text-sm transition"
              >
                Submit Article
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
