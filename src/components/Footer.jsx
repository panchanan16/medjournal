import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="border-l-4 border-red-700 pl-4 mb-4">
              <h3 className="text-xl font-bold mb-1">Medical Letter</h3>
              <p className="text-gray-400 text-sm">Open Access</p>
            </div>
          </div>
          
          {/* Navigation Links - First column */}
          <div>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition">Frequently Asked Questions</Link></li>
              <li><Link href="/announcements" className="text-gray-300 hover:text-white transition">Announcements</Link></li>
            </ul>
          </div>
          
          {/* Navigation Links - Second column */}
          <div>
            <ul className="space-y-2">
              <li><Link href="/payments" className="text-gray-300 hover:text-white transition">Online Payments</Link></li>
              <li><Link href="/journal-insight" className="text-gray-300 hover:text-white transition">Journal Insight</Link></li>
              <li><Link href="/for-authors" className="text-gray-300 hover:text-white transition">For Authors</Link></li>
              <li><Link href="/for-editors" className="text-gray-300 hover:text-white transition">For Editors</Link></li>
              <li><Link href="/for-reviewers" className="text-gray-300 hover:text-white transition">For Reviewers</Link></li>
            </ul>
          </div>
          
          {/* Navigation Links - Third column */}
          <div>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition">Terms and Conditions</Link></li>
              <li><Link href="/copyright" className="text-gray-300 hover:text-white transition">Copyright</Link></li>
              <li><Link href="/cookies" className="text-gray-300 hover:text-white transition">Cookie Preference</Link></li>
              <li><Link href="/sitemap" className="text-gray-300 hover:text-white transition">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© Copyright 2025 Kuwait Scientific Society</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;