"use client";

import { useState } from "react";
import StandardIssueTab from "../tabs/issueTab/StandardIssueTab";
import SpecialIssueTab from "../tabs/issueTab/SpecialIssueTab";
import SpeciaEditors from "../tabs/issueTab/SpeciaEditors";

export default function IssueForm({ SelectVolumes, StandardIssueData, SpecialIssueData }) {
  const [activeTab, setActiveTab] = useState("Issues");
  const [issueId, setIssueId] = useState(null);

  const [tabStatus, setTabStatus] = useState({
    Issues: "current",
    // citations: "pending",
    Special_Issues: "pending",
    Special_Authors: "pending",
  });

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
    const tabOrder = ["Issues", "Special_Issues", "Special_Authors"]; // "citations",
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
            onClick={() => handleTabClick("Issues")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "Issues"
                ? "text-red-600 border-red-700"
                : tabStatus.Issues === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            STANDARD ISSUES
          </button>

          <button
            onClick={() => handleTabClick("Special_Issues")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "Special_Issues"
                ? "text-red-600 border-red-700"
                : tabStatus.Special_Issues === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            disabled={tabStatus.Special_Issues === "disabled"}
          >
            SPECIAL ISSUES
          </button>
          <button
            onClick={() => handleTabClick("Special_Authors")}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "Special_Authors"
                ? "text-red-600 border-red-700"
                : tabStatus.Special_Authors === "completed"
                ? "text-green-600 border-green-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            disabled={tabStatus.Special_Authors === "disabled"}
          >
            SPECIAL ISSUES EDITORS
          </button>
        </nav>
      </div>
      {/* ARTICLE TAB */}
      <StandardIssueTab VolumeList={SelectVolumes} activeTab={activeTab} initialValues={StandardIssueData} setIssueId={setIssueId} />

      {/* ARTICLE SECTIONS TAB */}
      <SpecialIssueTab activeTab={activeTab} IssueId={issueId} initialValues={SpecialIssueData} />

      {/* AUTHORS TAB */}
      <SpeciaEditors activeTab={activeTab} IssueId={issueId} />
    </div>
  );
}
