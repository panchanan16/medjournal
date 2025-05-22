"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import { BASE_URL } from "@/config/api.config";

export default function SliderForm({ initialValues, editId }) {
  // Form state
  const [formData, setFormData] = useState({
    slide_title: initialValues ? initialValues.slide_title : "",
    slider_desc: initialValues ? initialValues.slider_desc : "",
    slider_link: initialValues ? initialValues.slider_link : "",
    slider_img: "",
    slider_img_link: initialValues ? initialValues.slider_img : "",
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
      const submitData = new FormData();
      submitData.append("slide_title", formData.slide_title);
      submitData.append("slider_desc", formData.slider_desc);
      submitData.append("slider_link", formData.slider_link);
      submitData.append("slider_img_link", formData.slider_img_link);

      if (formData.slider_img) {
        submitData.append("slider_img", formData.slider_img);
      }

      await _POST(
        `slider/${editId ? `update?slider_id=${editId}` : "create"}`,
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New Slider</h1>

      <div className="space-y-6">
        {/* Text Input - Title */}
        <div className="space-y-2">
          <label
            htmlFor="slide_title"
            className="block text-sm font-medium text-gray-700"
          >
            Slider title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="slide_title"
            name="slide_title"
            required
            value={formData.slide_title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the title..."
          />
        </div>

        {/* Text Input - Year */}
        <div className="space-y-2">
          <label
            htmlFor="slider_desc"
            className="block text-sm font-medium text-gray-700"
          >
            Slider Description <span className="text-red-600">*</span>
          </label>
          <textarea
            type="text"
            id="slider_desc"
            name="slider_desc"
            required
            value={formData.slider_desc}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Description..."
          ></textarea>
        </div>

        {/* Text Input - URL */}
        <div className="space-y-2">
          <label
            htmlFor="slider_link"
            className="block text-sm font-medium text-gray-700"
          >
            Redirect Link <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="slider_link"
            name="slider_link"
            required
            value={formData.slider_link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Redirect URL..."
          />
        </div>

        {/* Text Input - File */}
        <div className="space-y-2">
          <label
            htmlFor="slider_img"
            className="block text-sm font-medium text-gray-700"
          >
            Slider Image <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="slider_img"
            name="slider_img"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Image URL..."
          />

          {editId && (
            <div className="flex items-center mt-3">
              <span className="ml-2 text-xs text-gray-600">Old Image: </span>
              <a
                className="text-xs text-red-400"
                href={`${BASE_URL}${formData.slider_img_link}`}
              >
                {formData.slider_img_link && formData.slider_img_link}
              </a>
            </div>
          )}
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
              "Create Slider"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
