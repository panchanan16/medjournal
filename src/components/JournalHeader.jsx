'use client'

import Link from 'next/link';
import { FileText, Menu, X } from 'lucide-react';

const JournalHeader = ({isMenuOpen, setIsMenuOpen}) => {

  return (
     <header className="bg-gradient-to-r from-red-800 to-red-600 text-white shadow-md">
     <div className="container mx-auto px-4 py-3 flex justify-between items-center">
       <div className="flex items-center space-x-2">
         <Link href="/" className="text-xl md:text-2xl font-bold hover:text-red-100 transition">
           Medical Letter
         </Link>
       </div>
       <div className="hidden md:flex items-center space-x-4">
         <a href="mailto:submission@ejmp.org.uk" className="text-sm hover:text-red-100 transition flex items-center gap-1">
           <FileText size={16} /> submission@ejmp.org.uk
         </a>
         <Link href="/faqs" className="text-sm hover:text-red-100 transition">FAQs</Link>
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
