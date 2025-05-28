"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import dynamic from "next/dynamic";
import { BASE_URL } from "@/config/api.config";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

export default function JournalHomeForm({ initialValues }) {
  const about = useRef(null);
  const aim_scope = useRef(null);

  const [formData, setFormData] = useState({
    journal_name: initialValues ? initialValues?.journal_name : "",
    tagline: initialValues ? initialValues?.tagline : "",
    abbreviation_name: initialValues ? initialValues?.abbreviation_name : "",
    subjects: initialValues ? initialValues?.subjects : "",
    issn_print: initialValues ? initialValues?.issn_print : "",
    issn_online: initialValues ? initialValues?.issn_online : "",
    email: initialValues ? initialValues?.email : "",
    thumbnail: initialValues ? initialValues?.thumbnail : "",
    about: initialValues ? initialValues?.about : "",
    aim_scope: initialValues ? initialValues?.aim_scope : "",
    processingCharge: initialValues ? initialValues?.processingCharge : "",
    cite_score: initialValues ? initialValues?.cite_score : "",
    cite_score_link: initialValues ? initialValues?.cite_score_link : "",
    impact_factor: initialValues ? initialValues?.impact_factor : "",
    impact_factor_link: initialValues ? initialValues?.impact_factor_link : "",
    accepted_rate: initialValues ? initialValues?.accepted_rate : "",
    time_first_decision: initialValues
      ? initialValues?.time_first_decision
      : "",
    acceptance_to_publication: initialValues
      ? initialValues?.acceptance_to_publication
      : "",
    review_time: initialValues ? initialValues?.review_time : "",
    logo_journal: initialValues ? initialValues?.logo_journal : "",
    thumbnail_img: "",
    logo_img: "",
  });

  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (about.current) {
        formData.about = about.current.getContent();
      }

      if (aim_scope.current) {
        formData.aim_scope = aim_scope.current.getContent();
      }

      const submitData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          submitData.append(key, formData[key]);
        }
      }

      await _POST(
        `journal/${
          initialValues ? `update?mj_id=${initialValues.mj_id}` : "create"
        }`,
        submitData,
        `${initialValues ? "PUT" : "POST"}`,
        true,
        "core"
      );
      console.log("Form data submitted:", formData);
    
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700 mb-6">
        Add a New Journal
      </h1>

      {/* NEW */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="journal_name"
            className="block text-sm font-medium text-gray-700"
          >
            Journal Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="journal_name"
            name="journal_name"
            required
            value={formData.journal_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Journal Name..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="tagline"
            className="block text-sm font-medium text-gray-700"
          >
            Tageline <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            required
            value={formData.tagline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the tagline..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="abbreviation_name"
            className="block text-sm font-medium text-gray-700"
          >
            Abbreviation Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="abbreviation_name"
            name="abbreviation_name"
            required
            value={formData.abbreviation_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Abbreviation Name..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subjects"
            className="block text-sm font-medium text-gray-700"
          >
            Subjects <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            required
            value={formData.subjects}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Subjects..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="issn_print"
            className="block text-sm font-medium text-gray-700"
          >
            ISSN Print <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="issn_print"
            name="issn_print"
            required
            value={formData.issn_print}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the ISSN Print..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="issn_online"
            className="block text-sm font-medium text-gray-700"
          >
            ISSN Online <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="issn_online"
            name="issn_online"
            required
            value={formData.issn_online}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the ISSN Online..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="thumbnail_img"
            className="block text-sm font-medium text-gray-700"
          >
            Thumbnail <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="thumbnail_img"
            name="thumbnail_img"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />

          <div className="flex items-center mt-3">
            <span className="ml-2 text-xs text-gray-600">Old Thubnail: </span>
            <a
              className="text-xs text-red-400"
              href={`${BASE_URL}${formData.thumbnail}`}
            >
              {formData.thumbnail && formData.thumbnail}
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="logo_img"
            className="block text-sm font-medium text-gray-700"
          >
            Logo <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="logo_img"
            name="logo_img"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="processingCharge"
            className="block text-sm font-medium text-gray-700"
          >
            Processing Charge <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="processingCharge"
            name="processingCharge"
            required
            value={formData.processingCharge}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Processing Charge..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cite_score"
            className="block text-sm font-medium text-gray-700"
          >
            Cite Score <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="cite_score"
            name="cite_score"
            required
            value={formData.cite_score}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Cite Score..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cite_score_link"
            className="block text-sm font-medium text-gray-700"
          >
            Cite Score Link <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="cite_score_link"
            name="cite_score_link"
            required
            value={formData.cite_score_link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Cite Score Link..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="impact_factor"
            className="block text-sm font-medium text-gray-700"
          >
            Impact Factor <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="impact_factor"
            name="impact_factor"
            required
            value={formData.impact_factor}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Impact Factor..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="impact_factor_link"
            className="block text-sm font-medium text-gray-700"
          >
            Impact Factor Link <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="impact_factor_link"
            name="impact_factor_link"
            required
            value={formData.impact_factor_link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Impact Factor Link..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="accepted_rate"
            className="block text-sm font-medium text-gray-700"
          >
            Accepted Rate <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="accepted_rate"
            name="accepted_rate"
            required
            value={formData.accepted_rate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Accepted Rate..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="time_first_decision"
            className="block text-sm font-medium text-gray-700"
          >
            Time to First Decision <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="time_first_decision"
            name="time_first_decision"
            required
            value={formData.time_first_decision}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Time to First Decision..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="acceptance_to_publication"
            className="block text-sm font-medium text-gray-700"
          >
            Acceptance to Publication <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="acceptance_to_publication"
            name="acceptance_to_publication"
            required
            value={formData.acceptance_to_publication}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Acceptance to Publication..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="review_time"
            className="block text-sm font-medium text-gray-700"
          >
            Review Time <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="review_time"
            name="review_time"
            required
            value={formData.review_time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Review Time..."
          />
        </div>

        {/* TinyMCE Editor About*/}
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About
          </label>
          <div className="mt-1">
            <textarea id="about" name="about" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor editorRef={about} initialContent={formData.about} />
          </div>
        </div>

        {/* TinyMCE Editor Aim and scope */}
        <div>
          <label
            htmlFor="aim_scope"
            className="block text-sm font-medium text-gray-700"
          >
            Aim & Scope
          </label>
          <div className="mt-1">
            <textarea id="aim_scope" name="aim_scope" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={aim_scope}
              initialContent={formData.aim_scope}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 size={20} className="animate-spin mr-2" />
                Submitting...
              </span>
            ) : (
              "Add The Journal"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
