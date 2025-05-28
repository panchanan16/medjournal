"use client";

import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const JournalHeader = ({ isMenuOpen, setIsMenuOpen, Data }) => {
  const { user } = useAuth();
  return (
    <header className="bg-gradient-to-r from-red-800 to-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold hover:text-red-100 transition"
          >
            {Data ? Data?.journal?.journal_name : ""}
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:submission@ejmp.org.uk"
              className="text-sm hover:text-red-100 transition flex items-center gap-1"
            >
              <FileText size={16} /> {Data ? Data?.setings?.supportEmail : ""}
            </a>
            {/* <Link href="/faqs" className="text-sm hover:text-red-100 transition">FAQs</Link> */}
          </div>
          {!user && (
            <div className="flex items-center space-x-2">
              <Link href={"/login"}>
                <button className="px-3 py-1 text-xs bg-white text-red-600 font-semibold border border-red-600 rounded-lg hover:bg-red-100 transition duration-200">
                  Login
                </button>
              </Link>
              <Link href={"/signup"}>
                <button className="px-4 text-red-700 text-xs font-semibold py-1 rounded-lg hover:bg-red-100 bg-white transition duration-200 shadow-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default JournalHeader;
