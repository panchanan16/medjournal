"use client";

import { BASE_URL } from "@/config/api.config";
import { _POST } from "@/request/post_request";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import slugify from "slugify";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

function BlogForm({ initialValues }) {
  const blog = useRef(null);

  const [formData, setFormData] = useState({
    blog_title: initialValues ? initialValues?.blog_title : "",
    blog_url: initialValues ? initialValues?.blog_url : "",
    blog_thumbnail: "",
    blog_details: initialValues ? initialValues?.blog_details : "",
    posted_on: initialValues ? initialValues?.posted_on : new Date(),
    blog_thumbnail_link: initialValues ? initialValues?.blog_thumbnail : "",
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
      if (blog.current) {
        formData.blog_details = blog.current.getContent();
      }

      if (formData.blog_thumbnail == "" && !formData.blog_thumbnail_link ) {
        return alert("Thumbnail is required!");
      }

      const submitData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          submitData.append(key, formData[key]);
        }
      }

      await _POST(
        `blog/${
          initialValues ? `update?blog_id=${initialValues.blog_id}` : "create"
        }`,
        submitData,
        `${initialValues ? "PUT" : "POST"}`,
        true,
        "core"
      );
      console.log("Form data submitted:", formData);
      //   for (let [key, value] of submitData.entries()) {
      //     console.log(`${key}:`, value);
      //   }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // GENERATE URL ---
  function generateUrl(e) {
    e.preventDefault();
    if (formData.blog_title) {
      const slug = slugify(formData.blog_title, { lower: true, strict: true });
      setFormData({ ...formData, ["blog_url"]: slug });
    } else {
      alert("Title Must be Add First");
    }
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New Blog</h1>

      {/* NEW */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="blog_title"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="blog_title"
            name="blog_title"
            required
            value={formData.blog_title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the blog title..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="blog_url"
            className="block text-sm font-medium text-gray-700"
          >
            Blog URL <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="blog_url"
            name="blog_url"
            required
            value={formData.blog_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Generate the blog URL..."
          />
           <button
              onClick={(e) => generateUrl(e)}
              type="button"
              className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Generate URL
            </button>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="blog_thumbnail"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Thumbnail Image<span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="blog_thumbnail"
            name="blog_thumbnail"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Abbreviation Name..."
          />

          {initialValues && (
            <div className="flex items-center mt-3">
              <span className="ml-2 text-xs text-gray-600">
                Old blog Thumbnail:{" "}
              </span>
              <a
                className="text-xs text-red-400"
                href={`${BASE_URL}${formData.blog_thumbnail_link}`}
              >
                {formData.blog_thumbnail_link && formData.blog_thumbnail_link}
              </a>
            </div>
          )}
        </div>

        {/* TinyMCE Editor About*/}
        <div>
          <label
            htmlFor="blog_details"
            className="block text-sm font-medium text-gray-700"
          >
            Main Blog
          </label>
          <div className="mt-1">
            <textarea
              id="blog_details"
              name="blog_details"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={blog}
              initialContent={formData.blog_details}
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
              "Submit The Blog"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
