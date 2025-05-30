"use client";

import { _POST } from "@/request/post_request";

import { Save } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

function EditorialBoardContent({ InitialValues }) {
  const [formData, setFormData] = useState({
    editor_type: InitialValues ? InitialValues.editor_type : "",
    name: InitialValues ? InitialValues.name : "",
    qualification: InitialValues ? InitialValues.qualification : "",
    designation: InitialValues ? InitialValues.designation : "",
    institution: InitialValues ? InitialValues.institution : "",
    biography: InitialValues ? InitialValues.biography : "",
    editorImg: InitialValues ? InitialValues.imgLink : "",
    editor_img: {}, // actual file
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("No file chosen, yet.");
  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked ? 1 : 0 });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Manual validation
      const { editor_type, name, qualification, designation, institution } =
        formData;
      if (
        !editor_type ||
        !name ||
        !qualification ||
        !designation ||
        !institution
      ) {
        toast.error("Please fill all required fields before submitting.");
        setIsSubmitting(false);
        return;
      }

      if (editorRef.current) {
        formData.biography = editorRef.current.getContent();
      }

      const submitData = new FormData();
      submitData.append("editor_type", editor_type);
      submitData.append("name", name);
      submitData.append("qualification", qualification);
      submitData.append("designation", designation);
      submitData.append("institution", institution);
      submitData.append("biography", formData.biography);
      submitData.append("editorImg", formData.editorImg);

      if (formData.editor_img) {
        submitData.append("editor_img", formData.editor_img);
      }

      const end = `editorBoard/${
        InitialValues
          ? `update?editor_id=${InitialValues.editor_id}`
          : "create"
      }`;
      // ${InitialValues.editor_id ? "PUT" : "POST"}
      // console.log(end);
      const response = await _POST(
        end,
        submitData,
        `${InitialValues ? "PUT" : "POST"}`,
        true,
        "core"
      );

      // for (const [key, value] of submitData.entries()) {
      //   console.log(key, value);
      // }

      // Reset form
      setFormData({
        editor_type: "",
        name: "",
        qualification: "",
        designation: "",
        institution: "",
        editorImg: null,
      });
      setFileName("No file chosen, yet.");
      if (editorRef.current) {
        editorRef.current.setContent("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          ["Editor Type", "editor_type"],
          ["Name", "name"],
          ["Qualification", "qualification"],
          ["Designation", "designation"],
          ["Institution", "institution"],
        ].map(([label, name]) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            {name === "editor_type" ? (
              <select
                name={name}
                id={name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-red-500 focus:border-red-500 text-sm"
                value={formData[name]}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Editor Type</option>
                <option value="author">Author</option>
                <option value="editor">Editor</option>
                <option value="reviewer">Reviewer</option>
                <option value="administrator">Administrator</option>
                <option value="editor in chief">Editor in chief</option>
                <option value="Former board">Former Board</option>
              </select>
            ) : (
              <input
                type="text"
                name={name}
                id={name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                value={formData[name]}
                onChange={handleInputChange}
                required
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700 pb-2">
            Biography (Optional)
          </label>
          <TextEditor
            editorRef={editorRef}
            initialContent={formData.biography}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="editor_img"
            className="block text-sm font-medium cursor-pointer bg-blue-500 text-white p-2 rounded"
          >
            Choose Image
          </label>
          <input
            type="file"
            name="editor_img"
            id="editor_img"
            accept="image/*"
            onChange={handleInputChange}
            className=""
          />
          <span className="ml-2 text-sm text-gray-600">{fileName}</span>
        </div>

        <div className="flex items-center">
          <span className="ml-2 text-sm text-gray-600">Old Img:</span>
          <a href={`http://localhost:3100${formData.editorImg}`}>
            {formData.editorImg && formData.editorImg}
          </a>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 border rounded-md text-sm text-gray-700 border-gray-300 hover:bg-gray-100"
            onClick={() => {
              setFormData({
                editor_type: "",
                name: "",
                qualification: "",
                designation: "",
                institution: "",
                editorImg: null,
              });
              setFileName("No file chosen, yet.");
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
            className={`px-4 py-2 rounded-md text-sm text-white bg-red-600 hover:bg-red-700 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2 inline-block"
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
                    d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                  ></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <Save className="inline-block w-4 h-4 mr-1" />
                Save Content
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditorialBoardContent;
