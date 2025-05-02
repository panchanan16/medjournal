import { useState } from "react";
import TabLayout from "./TabLayout";

function ArticleMainTab({ activeTab, handleNextSection }) {
  const initialValues = {
    isInHome: true,
    isOpenAccess: true,
    isInPress: false,
    issueNo: "",
    url: "",
    articleType: "",
    title: "",
    DOI: "",
    DOIlink: "",
    PMID: "",
    PMID_Link: "",
    abstract: "",
    page_from: "",
    page_to: "",
    keywords: "",
    how_to_cite: "",
    receive_date: "",
    revised_date: "",
    accepted_date: "",
    published_date: "",
    available_date: "",
    downloads: 0,
    views: 0,
    pdflink: "",
    xmllink: "",
  };

  function TabArticleMainUi({ handleChange, formData }) {
    return (
      <form>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                id="isInHome"
                name="isInHome"
                type="checkbox"
                checked={formData.isInHome}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isInHome" className="text-gray-700">
                Show in home
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="isOpenAccess"
                name="isOpenAccess"
                type="checkbox"
                checked={formData.isOpenAccess}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isOpenAccess" className="text-gray-700">
                Is open access
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="isInPress"
                name="isInPress"
                type="checkbox"
                checked={formData.isInPress}
                onChange={handleChange}
                className="h-4 w-4 text-gray-300 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isInPress" className="text-gray-700">
                Is in press
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Issue:*
              </label>
              <div className="mt-1 flex">
                <select
                  id="issueNo"
                  name="issueNo"
                  required
                  value={formData.issueNo}
                  onChange={handleChange}
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                >
                  <option value="">---------</option>
                  <option value="issue1">Issue 1</option>
                  <option value="issue2">Issue 2</option>
                  <option value="issue3">Issue 3</option>
                </select>
                {/* <div className="ml-2 flex space-x-1">
                  <button
                    type="button"
                    className="p-1 text-teal-500 hover:bg-teal-100 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-1 text-teal-500 hover:bg-teal-100 rounded"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>

            <div>
              <label
                htmlFor="articleType"
                className="block text-sm font-medium text-gray-700"
              >
                Article Type:*
              </label>
              <select
                id="articleType"
                name="articleType"
                required
                value={formData.articleType}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="">---------</option>
                <option value="original">Original Research</option>
                <option value="review">Review Article</option>
                <option value="case">Case Study</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Url:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <textarea
              id="title"
              name="title"
              rows="3"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              DOI:
            </label>
            <input
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              DOI Link:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* PMID Field */}

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              PMID:
            </label>
            <input
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              PMID Link:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Abstract:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Page section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Page from:*
              </label>
              <input
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="articleType"
                className="block text-sm font-medium text-gray-700"
              >
                Page to:*
              </label>
              <input
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Keywords:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              How to Cite:
            </label>
            <textarea
              id="url"
              name="url"
              rows="3"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Date area  */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Recieved On:*
              </label>
              <input
                type="date"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="articleType"
                className="block text-sm font-medium text-gray-700"
              >
                Revised On:*
              </label>
              <input
                type="date"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Accepted On:*
              </label>
              <input
                type="date"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="articleType"
                className="block text-sm font-medium text-gray-700"
              >
                Published On:*
              </label>
              <input
                type="date"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Available On:*
              </label>
              <input
                type="date"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Downloads Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Downloads:*
              </label>
              <input
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                Views:*
              </label>
              <input
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* file section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                PDF:*
              </label>
              <input
                type="file"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="issueNo"
                className="block text-sm font-medium text-gray-700"
              >
                XML:*
              </label>
              <input
                type="file"
                id="url"
                name="url"
                rows="3"
                value={formData.url}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Generate Area  */}
          <div className="flex items-center gap-10">
            <div className="flex items-center space-x-3">
              <input
                id="isInHome"
                name="isInHome"
                type="checkbox"
                checked={formData.isInHome}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isInHome" className="text-gray-700">
                Generate XML
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="isOpenAccess"
                name="isOpenAccess"
                type="checkbox"
                checked={formData.isOpenAccess}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isOpenAccess" className="text-gray-700">
                Generate PDF
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }

  return (
    <>
      <TabLayout
        TabUI={TabArticleMainUi}
        TabName={"article"}
        InitialValue={initialValues}
        activeTab={activeTab}
        GoToNext={handleNextSection}
      />
    </>
  );
}

export default ArticleMainTab;
