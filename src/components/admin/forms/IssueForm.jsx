"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";

export default function IssueForm({ SelectVolumes }) {
  // Form state
  const [formData, setFormData] = useState({
    volume_id: "",
    issue_name: "",
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
      await _POST("issue/create", formData);
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">
        Create a New Issue
      </h1>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="volume_id"
            className="block text-sm font-medium text-gray-700"
          >
            Select a Volume
          </label>
          <select
            id="volume_id"
            name="volume_id"
            value={formData.volume_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select a Volume First
            </option>
            {SelectVolumes?.length &&
              SelectVolumes.map((item, ind) => (
                <option value={item.volume_id} key={ind}>
                  {item.volume_name}
                </option>
              ))}
          </select>
        </div>
        {/* Text Input - Issue name */}
        <div className="space-y-2">
          <label
            htmlFor="issue_name"
            className="block text-sm font-medium text-gray-700"
          >
            Volume Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="issue_name"
            name="issue_name"
            required
            value={formData.issue_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Volume Name..."
          />
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
              "Create Issue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
