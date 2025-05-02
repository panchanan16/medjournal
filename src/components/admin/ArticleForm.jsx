"use client";

import { useState } from "react";
import ArticleMainTab from "./tabs/ArticleMainTab";

export default function ArticleForm() {
  const [activeTab, setActiveTab] = useState("article");
  const [formData, setFormData] = useState({   
    citation_apa: "",
    citation_mla: "",
    citation_chicago: "",
    citation_harvard: "",
    citation_vancouver: "",
    // Add fields for other tabs as needed
    authors: [],
    sections: [],
    citations: [],
  });

  const [tabStatus, setTabStatus] = useState({
    article: "current",
    citations: "pending",
    sections: "pending",
    authors: "pending",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTabClick = (tab) => {
    // Only allow navigation to tabs that aren't disabled
    if (tabStatus[tab] !== "disabled") {
      setActiveTab(tab);
    }
  };

  const handleNextSection = () => {
    // Update current tab status to 'completed'
    setTabStatus({
      ...tabStatus,
      [activeTab]: "completed",
    });

    // Determine next tab
    const tabOrder = ["article", "citations", "sections", "authors"];
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextTab = tabOrder[currentIndex + 1];

    if (nextTab) {
      // Update next tab status to 'current'
      setTabStatus((prev) => ({
        ...prev,
        [nextTab]: "current",
      }));
      setActiveTab(nextTab);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add API call here to save the data
    // Example: saveArticle(formData);
    alert("Article submitted successfully!");
  };

  return (
    <div className="mx-auto px-4 py-6 max-w-6xl">
      <div className="mb-6">
        <nav className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabClick("article")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "article"
                ? "text-red-600 border-red-700"
                : tabStatus.article === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            ARTICLE
          </button>
          <button
            onClick={() => handleTabClick("citations")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "citations"
                ? "text-red-600 border-red-700"
                : tabStatus.citations === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            disabled={tabStatus.citations === "disabled"}
          >
            CITATIONS
          </button>
          <button
            onClick={() => handleTabClick("sections")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "sections"
                ? "text-red-600 border-red-700"
                : tabStatus.sections === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            disabled={tabStatus.sections === "disabled"}
          >
            ARTICLE SECTIONS
          </button>
          <button
            onClick={() => handleTabClick("authors")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "authors"
                ? "text-red-600 border-red-700"
                : tabStatus.authors === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            disabled={tabStatus.authors === "disabled"}
          >
            ARTICLE AUTHORS
          </button>
        </nav>
      </div>
        {/* ARTICLE TAB */}
        <ArticleMainTab activeTab={activeTab} handleNextSection={handleNextSection} />

        {/* CITATIONS TAB */}
        {activeTab === "citations" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="DOI"
                  className="block text-sm font-medium text-gray-700"
                >
                  DOI:
                </label>
                <input
                  type="text"
                  id="DOI"
                  name="DOI"
                  value={formData.DOI}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="DOIlink"
                  className="block text-sm font-medium text-gray-700"
                >
                  DOI Link:
                </label>
                <input
                  type="text"
                  id="DOIlink"
                  name="DOIlink"
                  value={formData.DOIlink}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="citation_apa"
                  className="block text-sm font-medium text-gray-700"
                >
                  APA Citation:
                </label>
                <textarea
                  id="citation_apa"
                  name="citation_apa"
                  rows="2"
                  value={formData.citation_apa}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="citation_mla"
                  className="block text-sm font-medium text-gray-700"
                >
                  MLA Citation:
                </label>
                <textarea
                  id="citation_mla"
                  name="citation_mla"
                  rows="2"
                  value={formData.citation_mla}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextSection}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* ARTICLE SECTIONS TAB */}
        {activeTab === "sections" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="abstract"
                className="block text-sm font-medium text-gray-700"
              >
                Abstract:
              </label>
              <textarea
                id="abstract"
                name="abstract"
                rows="4"
                value={formData.abstract}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="page_from"
                  className="block text-sm font-medium text-gray-700"
                >
                  Page from:
                </label>
                <input
                  type="text"
                  id="page_from"
                  name="page_from"
                  value={formData.page_from}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="page_to"
                  className="block text-sm font-medium text-gray-700"
                >
                  Page to:
                </label>
                <input
                  type="text"
                  id="page_to"
                  name="page_to"
                  value={formData.page_to}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="keywords"
                className="block text-sm font-medium text-gray-700"
              >
                Keywords:
              </label>
              <textarea
                id="keywords"
                name="keywords"
                rows="2"
                value={formData.keywords}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Separate keywords with commas"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextSection}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* AUTHORS TAB */}
        {activeTab === "authors" && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Authors
              </h3>
              <p className="text-sm text-gray-500">
                Add authors and their affiliations for this article.
              </p>

              {/* This would be replaced with a dynamic list of authors */}
              <div className="mt-4 border border-gray-200 rounded-md p-4">
                <p className="text-sm text-gray-500">
                  No authors added yet. Click "Add Author" to begin.
                </p>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Add Author
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Article
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
