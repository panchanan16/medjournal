"use client";

import { BASE_URL } from "@/config/api.config";
import { Share2 } from "lucide-react";
import Link from "next/link";
import CitationPopup from "./CitationPopup";
import { useState } from "react";

function FullArticle({ articleFull }) {
  const [isCite, setIsCite] = useState(false);
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(articleFull.title);
  const openShareWindow = (shareUrl) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <main className="container mx-auto px-4 py-6 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
        {/* Article Content - uses semantic HTML for article content */}
        <article className="lg:w-3/4 bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {articleFull.title}
          </h1>

          {/* Contributions */}
          <div className="mb-8 text-sm text-gray-600">
            <strong>Authors:</strong>
            <ul className="list-none">
              {articleFull.authors.map((authr, index) => (
                <li key={index}>
                  {authr.name} {`, ${authr.afflication}`}
                </li>
              ))}
            </ul>
          </div>

          {/* Article Tabs */}
          <div className="mb-6 border-b">
            <div className="flex flex-wrap">
              <button
                className={`px-4 py-2 font-medium text-red-700 border-b-2 border-red-700`}
              >
                Article
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            {articleFull.sections.map((section, index) => (
              <section key={index} className="mb-6 html-content">
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  {section.title}:
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: section?.content }}
                ></div>
              </section>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/4 sticky top-5 self-start h-fit">
          {/* Article Options Card */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
              Article Options
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <Link
                  href={`${BASE_URL}${articleFull.pdflink}`}
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                  PDF
                </Link>
                <span className="text-gray-500">
                  {articleFull.metrics.views} views
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <Link
                  href="#"
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                  Full Text
                </Link>
                <span className="text-gray-500">
                  {articleFull.metrics.downloads} views
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <Link
                  href={`${BASE_URL}${articleFull.xmllink}`}
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                  Download XML
                </Link>
                <span className="text-gray-500">
                  {articleFull.metrics.downloads} views
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span
                  onClick={() => setIsCite(true)}
                  className="text-red-700 hover:underline cursor-default flex items-center gap-2"
                >
                  <ClipboardCheckIcon className="h-4 w-4" />
                  Cite this Article
                </span>
              </div>

              {/* <div className="flex justify-between items-center text-sm">
                <Link
                  href="#"
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <ExclamationCircleIcon className="h-4 w-4" />
                  COI Form
                </Link>
              </div> */}
            </div>

            <div className="mt-4 pt-4 border-t">
              <Link
                href="#"
                className="flex items-center text-sm text-red-700 hover:underline"
              >
                <LockOpenIcon className="h-4 w-4 mr-1" />
                Get Permission
              </Link>
            </div>
          </div>

          {/* Share Card */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
              Share
            </h3>
            <div className="space-y-2">
              <span
                onClick={() =>
                  openShareWindow(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
                  )
                }
                className="text-red-700 hover:underline flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share on Facebook
              </span>
              <span
                onClick={() =>
                  openShareWindow(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
                  )
                }
                className="text-red-700 hover:underline flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share on LinkedIn
              </span>
              <span
                onClick={()=> openShareWindow(
                  `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
                )}
                className="text-red-700 hover:underline flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share on twitter
              </span>
            </div>
          </div>
        </aside>
      </div>
      <CitationPopup isOpen={isCite} closetab={setIsCite} />
    </main>
  );
}

const DocumentTextIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ClipboardCheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    />
  </svg>
);

const DocumentSearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
    />
  </svg>
);

const ExclamationCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LockOpenIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
    />
  </svg>
);

export default FullArticle;
