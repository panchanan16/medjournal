"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { _POST } from "@/request/post_request";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

export default function SiteSettingsForm({ initialValues }) {
  const AboutUs = useRef(null);
  const ContactUs = useRef(null);
  const PrivacyPolicy = useRef(null);
  const TermsCondition = useRef(null);
  const Copyright = useRef(null);
  const CookiePrefer = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    phone: initialValues ? initialValues?.phone : "",
    whatsapp: initialValues ? initialValues?.whatsapp : "",
    submissionEmail: initialValues ? initialValues?.submissionEmail : "",
    supportEmail: initialValues ? initialValues?.supportEmail : "",
    FooterCopyright: initialValues ? initialValues?.FooterCopyright : "",
    AboutUs: initialValues ? initialValues?.AboutUs : "",
    ContactUs: initialValues ? initialValues?.ContactUs : "",
    PrivacyPolicy: initialValues ? initialValues?.PrivacyPolicy : "",
    TermsCondition: initialValues ? initialValues?.TermsCondition : "",
    Copyright: initialValues ? initialValues?.Copyright : "",
    CookiePrefer: initialValues ? initialValues?.CookiePrefer : "",
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
      if (AboutUs.current) {
        formData.AboutUs = AboutUs.current.getContent();
      }

      if (ContactUs.current) {
        formData.ContactUs = ContactUs.current.getContent();
      }

      if (PrivacyPolicy.current) {
        formData.PrivacyPolicy = PrivacyPolicy.current.getContent();
      }

      if (TermsCondition.current) {
        formData.TermsCondition = TermsCondition.current.getContent();
      }

      if (Copyright.current) {
        formData.Copyright = Copyright.current.getContent();
      }

      if (CookiePrefer.current) {
        formData.CookiePrefer = CookiePrefer.current.getContent();
      }

      await _POST(
        `settings/${initialValues ? `update?settings_id=${initialValues.settings_id}` : "create"}`,
        formData,
        `${initialValues ? "PUT" : "POST"}`
      );
      console.log("Form data submitted:", formData);
      //   for (const key in formData) {
      //     formData[key] = "";
      //   }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700 mb-6">
        Site Configuration Form
      </h1>

      <div className="space-y-6">
        {/* Text Input - Phone */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Phone..."
          />
        </div>
        {/* Text Input - Whatsapp */}
        <div className="space-y-2">
          <label
            htmlFor="Whatsapp"
            className="block text-sm font-medium text-gray-700"
          >
            Whatsapp <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Whatsapp NUmber..."
          />
        </div>
        {/* Text Input - Submission Email */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Submission Email <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="submissionEmail"
            name="submissionEmail"
            required
            value={formData.submissionEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the Email..."
          />
        </div>
        {/* Text Input - Support Email */}
        <div className="space-y-2">
          <label
            htmlFor="pageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Support Email <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="supportEmail"
            name="supportEmail"
            required
            value={formData.supportEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the email..."
          />
        </div>
        {/* Text Input - Footer copyright */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Footer copyright <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="FooterCopyright"
            name="FooterCopyright"
            required
            value={formData.FooterCopyright}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter the FooterCopyright..."
          />
        </div>

        {/* TinyMCE Editor About us*/}
        <div>
          <label
            htmlFor="AboutUs"
            className="block text-sm font-medium text-gray-700"
          >
            About Us
          </label>
          <div className="mt-1">
            <textarea id="AboutUs" name="AboutUs" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor editorRef={AboutUs} initialContent={formData.AboutUs} />
          </div>
        </div>
        {/* TinyMCE Editor contact us */}
        <div>
          <label
            htmlFor="ContactUs"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Us
          </label>
          <div className="mt-1">
            <textarea id="ContactUs" name="ContactUs" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={ContactUs}
              initialContent={formData.ContactUs}
            />
          </div>
        </div>
        {/* TinyMCE Editor Privacy policy*/}
        <div>
          <label
            htmlFor="PrivacyPolicy"
            className="block text-sm font-medium text-gray-700"
          >
            Privacy Policy
          </label>
          <div className="mt-1">
            <textarea
              id="PrivacyPolicy"
              name="PrivacyPolicy"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={PrivacyPolicy}
              initialContent={formData.PrivacyPolicy}
            />
          </div>
        </div>
        {/* TinyMCE Editor terms and condition*/}
        <div>
          <label
            htmlFor="TermsCondition"
            className="block text-sm font-medium text-gray-700"
          >
            Terms and Condition
          </label>
          <div className="mt-1">
            <textarea
              id="TermsCondition"
              name="TermsCondition"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={TermsCondition}
              initialContent={formData.TermsCondition}
            />
          </div>
        </div>
        {/* TinyMCE Editor copy right  */}
        <div>
          <label
            htmlFor="Copyright"
            className="block text-sm font-medium text-gray-700"
          >
            Copy Right
          </label>
          <div className="mt-1">
            <textarea id="Copyright" name="Copyright" className="hidden" />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={Copyright}
              initialContent={formData.Copyright}
            />
          </div>
        </div>
        {/* TinyMCE Editor cookie*/}
        <div>
          <label
            htmlFor="CookiePrefer"
            className="block text-sm font-medium text-gray-700"
          >
            Cookie Preferences
          </label>
          <div className="mt-1">
            <textarea
              id="CookiePrefer"
              name="CookiePrefer"
              className="hidden"
            />
            {/* TinyMCE will replace this textarea */}
            <TextEditor
              editorRef={CookiePrefer}
              initialContent={formData.CookiePrefer}
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
              "Submit Site Settings"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
