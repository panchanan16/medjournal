"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import dynamic from "next/dynamic";
import { BASE_URL } from "@/config/api.config";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

export default function UserCreateForm({ initialValues, userid }) {
  const achieve = useRef(null);
  const publics = useRef(null);

  const [formData, setFormData] = useState({
    email: initialValues ? initialValues?.email : "",
    password: initialValues ? initialValues?.password : "",
    first_name: initialValues ? initialValues?.first_name : "",
    last_name: initialValues ? initialValues?.last_name : "",
    profile_img_link: initialValues ? initialValues?.profile_img : "",
    designation: initialValues ? initialValues?.designation : "",
    institution: initialValues ? initialValues?.institution : "",
    achievements: initialValues ? initialValues?.achievements : "",
    publications: initialValues ? initialValues?.publications : "",
    isEmailVerified: initialValues ? initialValues?.isEmailVerified : 0,
    isActive: initialValues ? initialValues?.isActive : 1,
    user_role: initialValues ? initialValues?.user_role : "user",
    created_at: initialValues ? initialValues?.created_at : new Date(),
    profile_img: "",
  });

  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (achieve.current) {
        formData.achievements = achieve.current.getContent();
      }

      if (publics.current) {
        formData.publications = publics.current.getContent();
      }

      const submitData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          submitData.append(key, formData[key]);
        }
      }

      submitData.append("password", "password");

        await _POST(
          `auth/${
            initialValues ? `update?auth_id=${initialValues.auth_id}` : "create"
          }`,
          submitData,
          `${initialValues ? "PUT" : "POST"}`,
          true,
          "core"
        );

      for (const [key, value] of submitData.entries()) {
        console.log(`${key}: ${value}`);
      }

      console.log("Form data submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Add a New User</h1>

      {/* NEW */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="user_role"
            className="block text-sm font-medium text-gray-700"
          >
            Select User Type <span className="text-blue-600">*</span>
          </label>
          <select
            id="user_role"
            name="user_role"
            defaultValue={formData.user_role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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

        {!userid && (
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter the password..."
            />
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Abbreviation Name..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the last name..."
          />
        </div>

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
            placeholder="Enter the Designation..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-gray-700"
          >
            Institution <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            required
            value={formData.institution}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Institution..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="profile_img"
            className="block text-sm font-medium text-gray-700"
          >
            User Profile <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="profile_img"
            name="profile_img"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="flex items-center mt-3">
            <span className="ml-2 text-xs text-gray-600">Old profile: </span>
            <a
              className="text-xs text-red-400"
              href={`${BASE_URL}${formData.profile_img_link}`}
            >
              {formData.profile_img_link && formData.profile_img_link}
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <input
            id="isActive"
            name="isActive"
            type="checkbox"
            checked={formData.isActive}
            onChange={handleChange}
            className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="isActive" className="text-gray-700">
            Is Active
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            id="isEmailVerified"
            name="isEmailVerified"
            type="checkbox"
            checked={formData.isEmailVerified}
            onChange={handleChange}
            className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="isEmailVerified" className="text-gray-700">
            Is Email Verified
          </label>
        </div>

        {/* TinyMCE Editor achievements*/}
        <div>
          <label
            htmlFor="achievements"
            className="block text-sm font-medium text-gray-700"
          >
            Achievements
          </label>
          <div className="mt-1">
            <textarea
              id="achievements"
              name="achievements"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={achieve}
              initialContent={formData.achievements}
            />
          </div>
        </div>

        {/* TinyMCE Editor Publications */}
        <div>
          <label
            htmlFor="publications"
            className="block text-sm font-medium text-gray-700"
          >
            Publications
          </label>
          <div className="mt-1">
            <textarea
              id="publications"
              name="publications"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={publics}
              initialContent={formData.publications}
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
              "Submit Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
