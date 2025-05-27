"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import { BASE_URL } from "@/config/api.config";

export default function CreateArticleSubmissionForm({ initialValues, users }) {
  const [formData, setFormData] = useState({
    manu_type: initialValues ? initialValues.manu_type : "Normal Process",
    status: initialValues ? initialValues.status : "Pending",
    pay_status: initialValues ? initialValues.pay_status : "Unpaid",
    user: initialValues ? initialValues.user : "",
    user_name: initialValues ? initialValues.user_name : "",
    user_number: initialValues ? initialValues.user_number : "",
    MRN_number: initialValues ? initialValues.MRN_number : "",
    email: initialValues ? initialValues.email : "",
    manuscript_title: initialValues ? initialValues.manuscript_title : "",
    abstract: initialValues ? initialValues.abstract : "",
    keywords: initialValues ? initialValues.keywords : "",
    article_file_link: initialValues ? initialValues.article_file : "",
    acceptance_letter_link: initialValues
      ? initialValues.acceptance_letter
      : "",
    invoice_link: initialValues ? initialValues.invoice : "",
    additional_file_link: initialValues ? initialValues.additional_file : "",
    editorial_comment:
      initialValues && initialValues.editorial_comment
        ? initialValues.editorial_comment
        : "",
    published_link:
      initialValues && initialValues.published_link
        ? initialValues.published_link
        : "",
    isReminder: 0,
    submitted_on: initialValues ? initialValues.submitted_on : new Date(),
    updated_on: initialValues ? initialValues.updated_on : new Date(),
    article_file: "",
    acceptance_letter: "",
    invoice: "",
    additional_file: "",
  });

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
        `manuscript/${
          initialValues ? `update?manu_id=${initialValues.manu_id}` : "create"
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
        Add a Journal Submission
      </h1>

      {/* NEW */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="manu_type"
            className="block text-sm font-medium text-gray-700"
          >
            Select Submission Type <span className="text-blue-600">*</span>
          </label>
          <select
            id="manu_type"
            name="manu_type"
            defaultValue={formData.manu_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Fast Process">Fast Process</option>
            <option value="Normal Process">Normal Process</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700"
          >
            Select A User <span className="text-blue-600">*</span>
          </label>
          <select
            id="user"
            name="user"
            defaultValue={formData.user}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select user from here</option>
            {users.map((usr, ind) => (              
              <option value={usr.auth_id} key={ind}>{usr.first_name} {usr.last_name} ({usr.user_role})</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="journal_name"
            className="block text-sm font-medium text-gray-700"
          >
            Journal status <span className="text-red-600">*</span>
          </label>
          <select
            defaultValue={formData.status}
            name="status"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
          >
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="journal_name"
            className="block text-sm font-medium text-gray-700"
          >
            Payment status <span className="text-red-600">*</span>
          </label>

          <select
            defaultValue={formData.pay_status}
            name="pay_status"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
            <option value="Invoice">To be invoice</option>
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
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the email..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            User Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the User Name..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="user_number"
            className="block text-sm font-medium text-gray-700"
          >
            User Number<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="user_number"
            name="user_number"
            required
            value={formData.user_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the User number..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="MRN_number"
            className="block text-sm font-medium text-gray-700"
          >
            MRN Number<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="MRN_number"
            name="MRN_number"
            required
            readOnly
            value={formData.MRN_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Don't Enter the MRN..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="manuscript_title"
            className="block text-sm font-medium text-gray-700"
          >
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="manuscript_title"
            name="manuscript_title"
            required
            value={formData.manuscript_title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the title..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="abstract"
            className="block text-sm font-medium text-gray-700"
          >
            Abstract<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="abstract"
            name="abstract"
            required
            value={formData.abstract}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the abstract..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="keywords"
            className="block text-sm font-medium text-gray-700"
          >
            Keywords <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            required
            value={formData.keywords}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the ISSN Print..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="editorial_comment"
            className="block text-sm font-medium text-gray-700"
          >
            Editorial Comment<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="editorial_comment"
            name="editorial_comment"
            required
            value={formData.editorial_comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the ISSN Print..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="published_link"
            className="block text-sm font-medium text-gray-700"
          >
            Published Link <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="published_link"
            name="published_link"
            required
            value={formData.published_link}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the ISSN Online..."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="article_file"
            className="block text-sm font-medium text-gray-700"
          >
            Article File <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="article_file"
            name="article_file"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />

          {formData.article_file_link && (
            <div className="flex items-center mt-3">
              <span className="ml-2 text-xs text-gray-600">
                Old article file:
              </span>
              <a
                className="text-xs text-red-400"
                href={`${BASE_URL}${formData.article_file_link}`}
              >
                {formData.article_file_link && formData.article_file_link}
              </a>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="acceptance_letter"
            className="block text-sm font-medium text-gray-700"
          >
            Acceptance Letter <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="acceptance_letter"
            name="acceptance_letter"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />
        </div>

        {/* Invoice */}
        <div className="space-y-2">
          <label
            htmlFor="invoice"
            className="block text-sm font-medium text-gray-700"
          >
            Invoice <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="invoice"
            name="invoice"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Additional File */}
        <div className="space-y-2">
          <label
            htmlFor="additional_file"
            className="block text-sm font-medium text-gray-700"
          >
            Additional File <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="additional_file"
            name="additional_file"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
              "Add The Article"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="space-y-2">
    <div className="flex items-center space-x-3">
        <input
            id="isInHome"
            name="isInHome"
            type="checkbox"
            checked={formData.isInHome}
            onChange={handleChange}
            className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="isInHome" className="text-gray-700">
            Show in home
        </label>
    </div>
</div> */
}
