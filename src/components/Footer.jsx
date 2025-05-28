import Link from "next/link";

const Footer = ({ FooterData }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="border-l-4 border-red-700 pl-4 mb-4">
              <h3 className="text-xl font-bold mb-1">
                {FooterData ? FooterData?.journal?.journal_name : ""}
              </h3>
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="hover:text-red-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-red-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-red-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links - First column */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/contact_us"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news_announcement"
                  className="text-gray-300 hover:text-white transition"
                >
                  Announcements
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Second column */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/online_payments"
                  className="text-gray-300 hover:text-white transition"
                >
                  Online Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/author-instruction"
                  className="text-gray-300 hover:text-white transition"
                >
                  For Authors
                </Link>
              </li>
              <li>
                <Link
                  href="/editor-board"
                  className="text-gray-300 hover:text-white transition"
                >
                  For Editors
                </Link>
              </li>
              <li>
                <Link
                  href="/reviewer_guidelines"
                  className="text-gray-300 hover:text-white transition"
                >
                  For Reviewers
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Third column */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/privacy_policy"
                  className="text-gray-300 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about/terms_condition"
                  className="text-gray-300 hover:text-white transition"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/about/copyright"
                  className="text-gray-300 hover:text-white transition"
                >
                  Copyright
                </Link>
              </li>
              <li>
                <Link
                  href="/about/cookie-preferense"
                  className="text-gray-300 hover:text-white transition"
                >
                  Cookie Preference
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>{FooterData ? FooterData?.setings?.FooterCopyright : ""}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
