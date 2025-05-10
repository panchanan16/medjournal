"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Editor } from "@tinymce/tinymce-react";
import toast from "react-hot-toast";
import { _POST } from "@/request/post_request";

// const Editor = dynamic(() => import("@tinymce/tinymce-react"), {
//   ssr: false,
// });

function ArticleSection({ activeTab, handleNextSection, articleId }) {
  const initialValues = {
    Article_Heading: true,
    article_content: true,
  };

  console.log("Article Id section tab is: ", articleId);

  const [sections, setSections] = useState([{ ariticle_id: articleId, Article_Heading: "", article_content: "" }]);

  const addSection = () => {
    setSections([...sections, { ariticle_id: articleId, Article_Heading: "", article_content: "" }]);
  };

  const removeSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };


  async function handleuser(params) {
    const user = await _POST('api/300')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    sections.length && sections.map((secItem, ind) => secItem.ariticle_id = articleId)
    const payload = { section: sections };
    try {
      if (articleId) {
        const response = await _POST(`articledetails/create`, payload, 'POST')
        console.log(response)
      } else {
        toast.error("Select or Add a Article first")
      }

      // const data = await response.json();
      console.log("Saved:", payload);
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };

  const handleSubmitAndContinue = async (e) => {
    e.preventDefault();
    const payload = { sections };
    try {
      // const response = await fetch("/api/articles", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      // const data = await response.json();
      console.log("Saved:", payload);
      handleNextSection();
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };

  if (activeTab == "sections") {
    return (
      <div className="mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold mb-6">Add Article</h1>
        <form className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="p-4 rounded-md bg-gray-50 relative">
              <label className="block font-medium mb-1">
                Heading:
                <input
                  type="text"
                  value={section.Article_Heading}
                  onChange={(e) =>
                    handleChange(index, "Article_Heading", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </label>

              <label className="block font-medium mt-4 mb-1">
                Content:
                {/* <textarea
                  value={section.content}
                  onChange={(e) =>
                    handleChange(index, "content", e.target.value)
                  }
                  className="w-full mt-1 p-2 border rounded resize-none"
                  rows={4}
                /> */}
              </label>
              <div className="mt-1">
                {/* TinyMCE will replace this textarea */}
                <Editor
                  tinymceScriptSrc="/tinymce/tinymce.min.js"
                  onEditorChange={(newContent) =>
                    handleChange(index, "article_content", newContent)
                  }
                  value={section.article_content}
                  init={{
                    // selector: "textarea",
                    license_key: "gpl",
                    height: 500,
                    menubar: true,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => removeSection(index)}
                className="absolute top-2 right-2 text-red-500 font-bold"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Add new Section
          </button>

          <button
          onClick={(e)=> handleSubmit(e)}
            type="button"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Submit
          </button>
          <button
            onClick={handleSubmitAndContinue}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Save And Continue
          </button>
        </form>
      </div>
    );
  }
}

export default ArticleSection;
