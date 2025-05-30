"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import { BASE_URL } from "@/config/api.config";

export default function VolumeForm({ initialValues, editId }) {
  // Form state
  const [formData, setFormData] = useState({
    volume_id: initialValues ? initialValues.volume_id : "",
    volume_name: initialValues ? initialValues.volume_name : "",
    volume_img_link: initialValues ? initialValues.volume_img : "",
    volume_year: initialValues ? initialValues.volume_year : "",
    volume_img: "",
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

    const submitData = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        submitData.append(key, formData[key]);
      }
    }

    try {
      await _POST(
        `volume/${editId ? `update?volume_id=${editId}` : "create"}`,
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New Volume</h1>

      <div className="space-y-6">
        {/* Text Input - Title */}
        <div className="space-y-2">
          <label
            htmlFor="volume_name"
            className="block text-sm font-medium text-gray-700"
          >
            Volume Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="volume_name"
            name="volume_name"
            required
            value={formData.volume_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Volume Name..."
          />
        </div>

        {/* Text Input - Year */}
        <div className="space-y-2">
          <label
            htmlFor="volume_year"
            className="block text-sm font-medium text-gray-700"
          >
            Volume Year <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="volume_year"
            name="volume_year"
            required
            value={formData.volume_year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Year in Number..."
          />
        </div>

        {/* Text Input - Image */}
        <div className="space-y-2">
          <label
            htmlFor="volume_img"
            className="block text-sm font-medium text-gray-700"
          >
            Voume Cover Image <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="volume_img"
            name="volume_img"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Image URL..."
          />

          {initialValues && (
            <div className="flex items-center mt-3">
              <span className="ml-2 text-xs text-gray-600">
                Old Volume Cover:{" "}
              </span>
              <a
                className="text-xs text-red-400"
                href={`${BASE_URL}${formData.volume_img_link}`}
              >
                {formData.volume_img_link && formData.volume_img_link}
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
              "Create Volume"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
