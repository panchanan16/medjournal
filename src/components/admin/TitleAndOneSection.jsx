"use client";

import { Save } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

function TitleAndOneSection() {
  const [formData, setFormData] = useState({
    title: "",
    mainSection: "",
    endSection: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef(null);
  const endSectionRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ensure we have the latest content from the editor
      if (editorRef.current) {
        formData.mainSection = editorRef.current.getContent();
      }

      if (endSectionRef.current) {
        formData.endSection = endSectionRef.current.getContent();
      }

      // This is where you would make your API call
      console.log("Submitting form data:", formData);

      // Simulate API call for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // setFormData({ title: '', mainSection: '' });
      // if (editorRef.current) {
      //   editorRef.current.setContent('');
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Content Creation Form */}
      <div className="py-4">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Title Input */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-sm p-3 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* TinyMCE Editor */}
                <div>
                  <label
                    htmlFor="editor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Main Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="editor"
                      name="mainSection"
                      className="hidden"
                    />
                    {/* TinyMCE will replace this textarea */}
                    <TextEditor editorRef={editorRef} />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="editor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    EndSection
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="endsection"
                      name="endSection"
                      className="hidden"
                    />
                    {/* TinyMCE will replace this textarea */}
                    <TextEditor editorRef={endSectionRef} />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setFormData({ title: "", mainSection: "" });
                      if (editorRef.current) {
                        editorRef.current.setContent("");
                      }
                    }}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-1 h-4 w-4" />
                        Save Content
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleAndOneSection;
