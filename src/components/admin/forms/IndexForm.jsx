"use client";

import { _POST } from "@/request/post_request";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

function IndexForm({ initialValues }) {
  const [formData, setFormData] = useState({
    index_name: initialValues ? initialValues?.index_name : "",
    link: initialValues ? initialValues?.link : "",
    imgUrl: initialValues?.imgUrl ? initialValues?.imgUrl : "",
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
      await _POST(
        `index/${editId ? `update?ind_id=${editId}` : "create"}`,
        formData,
        `${editId ? "PUT" : "POST"}`
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New Index</h1>

      <div className="space-y-6">
        {/* Text Input - Image */}
        <div className="space-y-2">
          <label
            htmlFor="index_name"
            className="block text-sm font-medium text-gray-700"
          >
            Index Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="index_name"
            name="index_name"
            required
            value={formData.index_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Image URL..."
          />
        </div>
        {/* Text Input - pageUrl */}
        <div className="space-y-2">
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Index URL <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="link"
            name="link"
            required
            value={formData.link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Volume Name..."
          />
        </div>

        {/* Text Input - redirect */}
        {/* <div className="space-y-2">
          <label
            htmlFor="imgUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Img URL <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            required
            value={formData.imgUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Year in Number..."
          />
        </div> */}

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
              "Create Index"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexForm;
