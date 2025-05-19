"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

export default function AnnouncementForm({ initialValues }) {
  const editorRef = useRef(null);
  // Form state
  const [formData, setFormData] = useState({
    heading: initialValues ? initialValues?.heading : "",
    content: initialValues ? initialValues?.content : "",
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
      if (editorRef.current) {
        formData.content = editorRef.current.getContent();
      }

      await _POST(`announce/${editId ? `update?id=${editId}` : 'create'}`, formData, `${editId ? 'PUT' : 'POST'}`);
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a Annoument</h1>

      <div className="space-y-6">
        {/* Text Input - Image */}
        <div className="space-y-2">
          <label
            htmlFor="heading"
            className="block text-sm font-medium text-gray-700"
          >
           Heading <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            required
            value={formData.heading}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Heading..."
          />
        </div>

        {/* TinyMCE Editor */}
        <div>
          <label
            htmlFor="editor"
            className="block text-sm font-medium text-gray-700"
          >
            Announcement
          </label>
          <div className="mt-1">
            <textarea id="editor" name="content" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={editorRef}
              initialContent={formData.content}
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
              "Create Announcement"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
