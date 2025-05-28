"use client";

import { BASE_URL } from "@/config/api.config";
import { _POST } from "@/request/post_request";
import { useState } from "react";
import slugify from "slugify";

function ArticleMainTab({
  IssueForSelect,
  activeTab,
  handleNextSection,
  setArticleId,
  initialValues,
  editId,
}) {
  const [formData, setFormData] = useState({
    isInHome: initialValues ? initialValues?.isInHome : 0,
    isOpenaccess: initialValues ? initialValues?.isOpenaccess : 0,
    isInPress:
      initialValues && initialValues.isInPress !== null
        ? initialValues?.isInPress
        : 0,
    isMostRead:
      initialValues && initialValues.isMostRead !== null
        ? initialValues?.isMostRead
        : 0,
    isNihFunded:
      initialValues && initialValues.isNihFunded !== null
        ? initialValues?.isNihFunded
        : 0,
    issueNo: initialValues ? initialValues?.issueNo : "",
    url: initialValues ? initialValues?.url : "",
    articleType: initialValues ? initialValues?.articleType : "",
    title: initialValues ? initialValues?.title : "",
    DOI: initialValues ? initialValues?.DOI : "",
    DOIlink: initialValues ? initialValues?.DOIlink : "",
    PMID: initialValues ? initialValues?.PMID : "",
    PMID_Link: initialValues ? initialValues?.PMID_Link : "",
    abstract: initialValues ? initialValues?.abstract : "",
    page_from: initialValues ? initialValues?.page_from : "",
    page_to: initialValues ? initialValues?.page_to : "",
    keywords: initialValues ? initialValues?.keywords : "",
    how_to_cite: initialValues ? initialValues?.how_to_cite : "",
    recieve_date: initialValues ? initialValues?.recieve_date : "",
    Revised_date: initialValues ? initialValues?.Revised_date : "",
    Accepted_date: initialValues ? initialValues?.Accepted_date : "",
    published_date: initialValues ? initialValues?.published_date : "",
    available_date: initialValues ? initialValues?.available_date : "",
    Downloads: initialValues ? initialValues?.Downloads : "",
    Views: initialValues ? initialValues?.Views : "",
    citation_apa: initialValues ? initialValues?.citation_apa : "",
    citation_mla: initialValues ? initialValues?.citation_mla : "",
    citation_chicago: initialValues ? initialValues?.citation_chicago : "",
    citation_harvard: initialValues ? initialValues?.citation_harvard : "",
    citation_vancouver: initialValues ? initialValues?.citation_vancouver : "",
    pdflink: initialValues ? initialValues?.pdflink : "",
    xmllink: initialValues ? initialValues?.xmllink : "",
    COIformlink: initialValues ? initialValues?.COIformlink : "",
    pdfFile: "",
    xmlFile: "",
    coiFile: "",
    isPDF: 0,
    isXml: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked ? 1 : 0 });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  async function handleSaveSection(e) {
    e.preventDefault();
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "coverImage" && formData[key]) {
          submitData.append(key, formData[key]);
        } else if (key === "tags") {
          submitData.append(key, JSON.stringify(formData[key]));
        } else {
          submitData.append(key, formData[key]);
        }
      });

      const response = await _POST(
        `articleMain/${editId ? `update?article_id=${editId}` : "create"}`,
        submitData,
        `${editId ? "PUT" : "POST"}`,
        true,
        "core"
      );
      // console.log(response.article_id);
      setArticleId && setArticleId(response.article_id);
      console.log("Form data submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  function handleSubmitAndContinue(params) {
    handleNextSection();
    console.log(formData);
    // setArticleId && setArticleId;
  }

  function generateUrl(e) {
    e.preventDefault();
    if (formData.title) {
      const slug = slugify(formData.title, { lower: true, strict: true });
      setFormData({ ...formData, ["url"]: slug });
    } else {
      alert("Title Must be Add First");
    }
  }

  if (activeTab === "article") {
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
                id="isOpenaccess"
                name="isOpenaccess"
                type="checkbox"
                checked={formData.isOpenaccess}
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

            <div className="flex items-center space-x-3">
              <input
                id="isMostRead"
                name="isMostRead"
                type="checkbox"
                checked={formData.isMostRead}
                onChange={handleChange}
                className="h-4 w-4 text-gray-300 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isMostRead" className="text-gray-700">
                Is Most Read
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="isNihFunded"
                name="isNihFunded"
                type="checkbox"
                checked={formData.isNihFunded}
                onChange={handleChange}
                className="h-4 w-4 text-gray-300 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isNihFunded" className="text-gray-700">
                Is NIH Funded
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
                  {IssueForSelect?.length &&
                    IssueForSelect?.map((isu, key) => (
                      <option key={key} value={isu.is_id}>
                        Issue {isu.issue_name} Vol {`(${isu.volume_name})`}
                      </option>
                    ))}
                </select>
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
                <option value="Original Research">Original Research</option>
                <option value="Review Article">Review Article</option>
                <option value="Case Study">Case Study</option>
              </select>
            </div>
          </div>

          {/* Title section */}

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

          {/* URL generate */}
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
            <button
              onClick={(e) => generateUrl(e)}
              type="button"
              className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Generate URL
            </button>
          </div>

          <div>
            <label
              htmlFor="DOI"
              className="block text-sm font-medium text-gray-700"
            >
              DOI:
            </label>
            <input
              id="DOI"
              name="DOI"
              rows="3"
              value={formData.DOI}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="DOIlink"
              className="block text-sm font-medium text-gray-700"
            >
              DOI Link:
            </label>
            <textarea
              id="DOIlink"
              name="DOIlink"
              rows="3"
              value={formData.DOIlink}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* PMID Field */}

          <div>
            <label
              htmlFor="PMID"
              className="block text-sm font-medium text-gray-700"
            >
              PMID:
            </label>
            <input
              id="PMID"
              name="PMID"
              rows="3"
              value={formData.PMID}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="PMID_Link"
              className="block text-sm font-medium text-gray-700"
            >
              PMID Link:
            </label>
            <textarea
              id="PMID_Link"
              name="PMID_Link"
              rows="3"
              value={formData.PMID_Link}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

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
              rows="3"
              value={formData.abstract}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Page section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="page_from"
                className="block text-sm font-medium text-gray-700"
              >
                Page from:*
              </label>
              <input
                id="page_from"
                name="page_from"
                rows="3"
                value={formData.page_from}
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
                id="page_to"
                name="page_to"
                rows="3"
                value={formData.page_to}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
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
              rows="3"
              value={formData.keywords}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="how_to_cite"
              className="block text-sm font-medium text-gray-700"
            >
              How to Cite:
            </label>
            <textarea
              id="how_to_cite"
              name="how_to_cite"
              rows="3"
              value={formData.how_to_cite}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Date area  */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="recieve_date"
                className="block text-sm font-medium text-gray-700"
              >
                Recieved On:*
              </label>
              <input
                type="date"
                id="recieve_date"
                name="recieve_date"
                rows="3"
                value={formData.recieve_date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="Revised_date"
                className="block text-sm font-medium text-gray-700"
              >
                Revised On:*
              </label>
              <input
                type="date"
                id="Revised_date"
                name="Revised_date"
                rows="3"
                value={formData.Revised_date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="Accepted_date"
                className="block text-sm font-medium text-gray-700"
              >
                Accepted On:*
              </label>
              <input
                type="date"
                id="Accepted_date"
                name="Accepted_date"
                rows="3"
                value={formData.Accepted_date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="published_date"
                className="block text-sm font-medium text-gray-700"
              >
                Published On:*
              </label>
              <input
                type="date"
                id="published_date"
                name="published_date"
                rows="3"
                value={formData.published_date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="available_date"
                className="block text-sm font-medium text-gray-700"
              >
                Available On:*
              </label>
              <input
                type="date"
                id="available_date"
                name="available_date"
                rows="3"
                value={formData.available_date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Downloads Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="Downloads"
                className="block text-sm font-medium text-gray-700"
              >
                Downloads:*
              </label>
              <input
                id="Downloads"
                name="Downloads"
                rows="3"
                value={formData.Downloads}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="Views"
                className="block text-sm font-medium text-gray-700"
              >
                Views:*
              </label>
              <input
                id="Views"
                name="Views"
                rows="3"
                value={formData.Views}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* file section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="w-full">
              <label
                htmlFor="pdfFile"
                className="block text-sm font-medium text-gray-700"
              >
                PDF:*
              </label>
              <input
                type="file"
                id="pdfFile"
                name="pdfFile"
                rows="3"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />

              {/* Old file */}
              <div className="flex items-center mt-3">
                <span className="ml-2 text-xs text-gray-600">Old PDF:</span>
                <a
                  className="text-xs"
                  href={`http://localhost:3100${formData.pdflink}`}
                >
                  {formData.pdflink && formData.pdflink}
                </a>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="xmlFile"
                className="block text-sm font-medium text-gray-700"
              >
                XML:*
              </label>
              <input
                type="file"
                id="xmlFile"
                name="xmlFile"
                rows="3"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
              {/* Old file */}
              <div className="flex items-center mt-3">
                <span className="ml-2 text-xs text-gray-600">Old XML:</span>
                <a
                  className="text-xs"
                  href={`http://localhost:3100${formData.xmllink}`}
                >
                  {formData.xmllink && formData.xmllink}
                </a>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="coiFile"
                className="block text-sm font-medium text-gray-700"
              >
                COI form:*
              </label>
              <input
                type="file"
                id="coiFile"
                name="coiFile"
                rows="3"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
              {/* Old file */}
              <div className="flex items-center mt-3">
                <span className="ml-2 text-xs text-gray-600">Old COI:</span>
                <a
                  className="text-xs"
                  href={`${BASE_URL}${formData.COIformlink}`}
                >
                  {formData.COIformlink && formData.COIformlink}
                </a>
              </div>
            </div>
          </div>

          {/* Generate Area  */}
          <div className="flex items-center gap-10">
            <div className="flex items-center space-x-3">
              <input
                id="isXml"
                name="isXml"
                type="checkbox"
                checked={formData.isXml}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isXml" className="text-gray-700">
                Generate XML
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="isPDF"
                name="isPDF"
                type="checkbox"
                checked={formData.isPDF}
                onChange={handleChange}
                className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="isPDF" className="text-gray-700">
                Generate PDF
              </label>
            </div>
          </div>

          {/* Citation Section */}

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
              rows="3"
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
              MLA Citaion:
            </label>
            <textarea
              id="citation_mla"
              name="citation_mla"
              rows="3"
              value={formData.citation_mla}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="citation_harvard"
              className="block text-sm font-medium text-gray-700"
            >
              Harvard:
            </label>
            <textarea
              id="citation_harvard"
              name="citation_harvard"
              rows="3"
              value={formData.citation_harvard}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="citation_chicago"
              className="block text-sm font-medium text-gray-700"
            >
              Chicago:
            </label>
            <textarea
              id="citation_chicago"
              name="citation_chicago"
              rows="3"
              value={formData.citation_chicago}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="citation_vancouver"
              className="block text-sm font-medium text-gray-700"
            >
              Vancouver:
            </label>
            <textarea
              id="citation_vancouver"
              name="citation_vancouver"
              rows="3"
              value={formData.citation_vancouver}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            ></textarea>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={(e) => handleSaveSection(e)}
            type="button"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Submit
          </button>
          <button
            onClick={handleSubmitAndContinue}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Save And Continue
          </button>
        </div>
      </form>
    );
  }
}

export default ArticleMainTab;
