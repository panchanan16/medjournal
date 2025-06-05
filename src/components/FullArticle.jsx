"use client";

import { BASE_URL } from "@/config/api.config";
import { ExternalLink, Tag, FileText } from "lucide-react";
import { Share2 } from "lucide-react";
import Link from "next/link";
import CitationPopup from "./CitationPopup";
import { useEffect, useState } from "react";
import { _GET } from "@/request/request";

function FullArticle({ articleFull, artId }) {
  const [isCite, setIsCite] = useState(false);
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(articleFull.title);
  const openShareWindow = (shareUrl) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  async function IncreaseDownloads() {
    const incResponse = await _GET(
      `articlefull/increase/?article_id=${artId}&type=downloads`,
      "core"
    );
    return incResponse;
  }

  useEffect(() => {
    async function IncreaseViews() {
      const incResponse = await _GET(
        `articlefull/increase/?article_id=${artId}&type=Views`,
        "core"
      );
      return incResponse;
    }
    IncreaseViews();
  }, []);

  return (
    <main className="container mx-auto px-4 py-6 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
        {/* Article Content - uses semantic HTML for article content */}
        <article className="lg:w-3/4 bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-lg md:text-3xl font-bold text-gray-800 mb-4">
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

          {/* Abstract Section */}
          <div className="bg-white">
            {/* DOI and Citation Information */}
            <div className="mb-8">
              <div className="border-b-2 border-red-600 pb-2 mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Article Information:
                </h3>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                {/* DOI */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide min-w-fit">
                    DOI:
                  </span>
                  <a
                    href={articleFull.DOIlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 hover:underline transition-colors duration-200 flex items-center gap-1 text-sm break-all"
                  >
                    {articleFull.DOIlink}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>

                {/* Publication Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide min-w-fit">
                    Published:
                  </span>
                  <span className="text-gray-600 text-sm">
                    {new Date(articleFull.published).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                </div>

                {/* Article Type */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide min-w-fit">
                    Article Type:
                  </span>
                  <span className="text-gray-600 text-sm">
                    {articleFull.type}
                  </span>
                </div>

                {/* Page no */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide min-w-fit">
                    Pages:
                  </span>
                  <span className="text-gray-600 text-sm">
                    {articleFull.pageFrom} - {articleFull.pageTo}
                  </span>
                </div>

                {/* Received/Accepted Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide">
                      Received:
                    </span>
                    <span className="text-gray-600 text-xs">
                      {articleFull.recieved &&
                        new Date(articleFull.recieved).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="font-semibold text-gray-700 text-xs uppercase tracking-wide">
                      Accepted:
                    </span>
                    <span className="text-gray-600 text-xs">
                      {articleFull.accepted &&
                        new Date(articleFull.accepted).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract Section */}
            <div className="mb-8">
              <div className="border-b-2 border-red-600 pb-2 mb-6">
                <h2 className="text-xl text-gray-800 font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Abstract:
                </h2>
              </div>

              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-justify">{articleFull.abstract}</p>
              </div>
            </div>

            {/* Keywords Section */}
            <div className="mb-8">
              <div className="border-b-2 border-red-600 pb-2 mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Keywords:
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {articleFull.keywords.split(",").map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block bg-red-100 hover:bg-red-200 transition-colors duration-200 px-3 py-1 rounded-full text-sm text-red-700 border border-red-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Citation Box */}
            {/* <div className="mb-8">
              <div className="border-b-2 border-red-600 pb-2 mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  How to Cite:
                </h3>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>APA Style:</strong> Deka, P. K. (2023). Comprehensive
                  Analysis of Cancer Epidemiology and Care at IGMC Shimla: A
                  Five-Year Review of Trends, Treatment Modalities, and
                  Geographic Disparities in Himachal Pradesh (2018-2022).
                  <em>Medletter</em>, <em>15</em>(3), 145-162.
                  https://doi.org/10.1234/medletter.2023.cancer.analysis
                </p>
              </div>
            </div> */}
          </div>

          {/* Article Tabs */}
          <div className="border-b-2 border-red-600 pb-2 mb-4">
            <h3 className="text-lg font-bold text-gray-800">Article :</h3>
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
                  onClick={IncreaseDownloads}
                  href={`${BASE_URL}${articleFull.pdflink}`}
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <DocumentTextIcon className="h-4 w-4" />
                  PDF
                </Link>
                <span className="text-gray-500">
                  {articleFull.metrics.downloads} downloads
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
                  {articleFull.metrics.views} views
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

              <div className="flex justify-between items-center text-sm">
                <Link
                  href={`${BASE_URL}${articleFull.COIformlink}`}
                  className="text-red-700 hover:underline flex items-center gap-2"
                >
                  <ExclamationCircleIcon className="h-4 w-4" />
                  COI Form
                </Link>
              </div>
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
                onClick={() =>
                  openShareWindow(
                    `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
                  )
                }
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
