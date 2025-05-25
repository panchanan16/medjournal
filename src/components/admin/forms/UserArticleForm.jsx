"use client";

import { _POST } from "@/request/post_request";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

function UserArticleForm({ initialValues }) {
  const [formData, setFormData] = useState({
    manuscript_title: "",
    user: 1,
    user_name: "",
    user_number: "",
    email: "",
    abstract: "",
    keywords: "",
    article_file_link: "",
    submitted_on: new Date(),
    article_file: "",
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

  const { editId } = useParams();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();

      submitData.append("manuscript_title", formData.manuscript_title);
      submitData.append("abstract", formData.abstract);
      submitData.append("keywords", formData.keywords);
      submitData.append("submitted_on", formData.submitted_on);
      submitData.append("user", formData.user);
      submitData.append("user_name", formData.user_name);
      submitData.append("user_number", formData.user_number);
      submitData.append("email", formData.email);

      if (formData.article_file) {
        submitData.append("article_file", formData.article_file);
      }

      await _POST(
        `manuscript/${editId ? `update?ind_id=${editId}` : "createByUser"}`,
        submitData,
        `${editId ? "PUT" : "POST"}`,
        true,
        "core"
      );
      console.log("Form data submitted:", formData);
      for (const key in formData) {
        formData[key] = "";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Add a New Article
      </h1>

      <div className="space-y-6">
        {/* Text Input - title */}
        <div className="space-y-2">
          <label
            htmlFor="manuscript_title"
            className="block text-sm font-medium text-gray-700"
          >
            Title <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="manuscript_title"
            name="manuscript_title"
            required
            value={formData.manuscript_title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the Title..."
          />
        </div>
        {/* Text Input - Abstract */}
        <div className="space-y-2">
          <label
            htmlFor="abstract"
            className="block text-sm font-medium text-gray-700"
          >
            Abstract <span className="text-blue-600">*</span>
          </label>
          <textarea
            type="text"
            id="abstract"
            name="abstract"
            required
            value={formData.abstract}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the abstract..."
          ></textarea>
        </div>

        {/* Text Input - keywords */}
        <div className="space-y-2">
          <label
            htmlFor="keywords"
            className="block text-sm font-medium text-gray-700"
          >
            Keywords<span className="text-blue-600">*</span>
          </label>
          <textarea
            type="text"
            id="link"
            name="link"
            required
            value={formData.link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter keywords with ; separated..."
          ></textarea>
        </div>

        {/* file Input */}
        <div className="space-y-2">
          <label
            htmlFor="article_file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Article<span className="text-blue-600">*</span>
          </label>
          <input
            type="file"
            id="article_file"
            name="article_file"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Year in Number..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            User Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the Name..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="user_number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="user_number"
            name="user_number"
            required
            value={formData.user_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the Number..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the Email..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 size={20} className="animate-spin mr-2" />
                Submitting...
              </span>
            ) : (
              "Submit Article"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserArticleForm;
