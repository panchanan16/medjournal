"use client";

import { useState } from "react";
import ArticleMainTab from "./tabs/ArticleMainTab";
import ArticleSection from "./tabs/ArticleSection";
import ArticleAuthorsTab from "./tabs/ArticleAuthorsTab";

export default function ArticleForm() {
  const [activeTab, setActiveTab] = useState("article");
  const [articleId, setarticleId] = useState(null);
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
    // citations: "pending",
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
    const tabOrder = ["article", "sections", "authors"]; // "citations",
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
          {/* <button
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
          </button> */}
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
      <ArticleMainTab
        activeTab={activeTab}
        handleNextSection={handleNextSection}
        setArticleId={setarticleId}
      />

      {/* ARTICLE SECTIONS TAB */}
      <ArticleSection
        activeTab={activeTab}
        handleNextSection={handleNextSection}
        articleId={articleId}
      />

      {/* AUTHORS TAB */}
      <ArticleAuthorsTab
        activeTab={activeTab}
        handleNextSection={handleNextSection}
        articleId={articleId}
      />
    </div>
  );
}
