"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

function ArticleSectionPart({allSection, remove, index, handleChange, formData }) {
  const editorRef = useRef(null);

  function removeSections(e) {
    e.preventDefault()
    const arr = allSection
    arr.splice(index, 1)
    remove([...arr])
    
  }

  return (
    <div>
      <button onClick={removeSections} className="btn bg-red-600 text-white text-xs p-2 rounded-lg ml-[90%] hover:bg-red-700">
        Remove
      </button>
      <div>
        <label
          htmlFor="editor"
          className="block text-sm font-medium text-gray-700"
        >
          Heading:
        </label>
        <div className="mt-1">
          <input
            id="url"
            name="url"
            rows="3"
            value={formData.url}
            onChange={(e)=> handleChange(index, e)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="editor"
          className="block text-sm font-medium text-gray-700"
        >
          Content:
        </label>
        <div className="mt-1">
          <textarea id="editor" name="content" className="hidden" />
          {/* TinyMCE will replace this textarea */}
          <TextEditor editorRef={editorRef} initialContent={formData.content} />
        </div>
      </div>
    </div>
  );
}

export default ArticleSectionPart;
