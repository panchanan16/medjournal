"use client";

import { BASE_URL } from "@/config/api.config";
import { _POST } from "@/request/post_request";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function TestimonialForm({ initialValues, editId }) {
  const [formData, setFormData] = useState({
    user_name: initialValues ? initialValues?.user_name : "",
    designation: initialValues ? initialValues?.designation : "",
    university: initialValues ? initialValues?.university : "",
    user_img_link: initialValues ? initialValues?.user_img : "",
    user_comment: initialValues ? initialValues?.user_comment : "",
    posted_on: initialValues ? initialValues?.posted_on : new Date(),
    user_img: "",
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
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          submitData.append(key, formData[key]);
        }
      }

      await _POST(
        `testimonial/${editId ? `update?test_id=${editId}` : "create"}`,
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
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New Testimonial</h1>

      <div className="space-y-6">
        {/* Text Input - Title */}
        <div className="space-y-2">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Name..."
          />
        </div>

        {/* Text Input - Year */}
        <div className="space-y-2">
          <label
            htmlFor="user_comment"
            className="block text-sm font-medium text-gray-700"
          >
            Review Comment <span className="text-red-600">*</span>
          </label>
          <textarea
            type="text"
            id="user_comment"
            name="user_comment"
            required
            value={formData.user_comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Description..."
          ></textarea>
        </div>

        {/* Text Input - Designation */}
        <div className="space-y-2">
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-gray-700"
          >
           Designation <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            required
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter The Designation..."
          />
        </div>

        {/* Text Input - Designation */}
        <div className="space-y-2">
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700"
          >
           University <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="university"
            name="university"
            required
            value={formData.university}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter The Designation..."
          />
        </div>

        {/* Text Input - File */}
        <div className="space-y-2">
          <label
            htmlFor="user_img"
            className="block text-sm font-medium text-gray-700"
          >
            User Image <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="user_img"
            name="user_img"
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
                href={`${BASE_URL}${formData.user_img_link}`}
              >
                {formData.user_img_link && formData.user_img_link}
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
              "Submit Review"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialForm;
