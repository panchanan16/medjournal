import { _POST } from "@/request/post_request";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
const TextEditor = dynamic(() => import("@/components/admin/TextEditor"), {
  ssr: false,
});

function SpecialIssueTab({ activeTab, IssueId }) {
  console.log("Article Id section tab is: ", IssueId);
  const editorRef = useRef("");
  const [speciaIssue, setSpecialIssue] = useState({
    issueId: "",
    isSpecial: 1,
    isPublished: 1,
    publish_date: "",
    submission_deadline: "",
    issueCoverImgUrl: "http://ss.com/img=1",
    special_issue_title: "",
    special_issue_about: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setSpecialIssue({ ...speciaIssue, [name]: checked ? 1 : 0 });
    } else if (type === "file") {
      setSpecialIssue({ ...speciaIssue, [name]: files[0] });
    } else {
      setSpecialIssue({ ...speciaIssue, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = speciaIssue;
    try {
      if (editorRef.current) {
        speciaIssue.special_issue_about = editorRef.current.getContent();
      }
      if (IssueId) {
        payload.issueId = IssueId
        const response = await _POST(`specialissue/create`, payload, "POST");
        console.log(response);
        console.log(payload);
      } else {
        console.log(payload);
        toast.error("Select or Add a Article first");
      }

      // const data = await response.json();
      console.log("Saved:", payload);
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };

  if (activeTab == "Special_Issues") {
    return (
      <div className="mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold mb-6">Make It a Special Issue</h1>
        <form className="space-y-6">
          <div className="p-4 rounded-md bg-gray-50 relative space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  id="isSpecial"
                  name="isSpecial"
                  type="checkbox"
                  checked={speciaIssue.isSpecial}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="isSpecial" className="block font-medium mb-1">
                  In Special
                </label>
              </div>
               <div className="flex items-center space-x-3">
                <input
                  id="isPublished"
                  name="isPublished"
                  type="checkbox"
                  checked={speciaIssue.isPublished}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="isSpecial" className="block font-medium mb-1">
                  In Published
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Issue Title:
              </label>
              <input
                type="text"
                name="special_issue_title"
                value={speciaIssue.special_issue_title}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Date Area */}
            <div className="flex gap-10">
              <div>
                <label
                  htmlFor="publish_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Published Date:*
                </label>
                <input
                  type="date"
                  id="publish_date"
                  name="publish_date"
                  rows="3"
                  value={speciaIssue.publish_date}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="submission_deadline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Submission Deadline:*
                </label>
                <input
                  type="date"
                  id="submission_deadline"
                  name="submission_deadline"
                  rows="3"
                  value={speciaIssue.submission_deadline}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Editor area is here */}
            <div>
              <label
                htmlFor="special_issue_about"
                className="block text-sm font-medium text-gray-700"
              >
                Special Issue About:
              </label>

              <div className="mt-1">
                <TextEditor
                  editorRef={editorRef}
                  initialContent={speciaIssue.special_issue_about}
                />
              </div>
            </div>
          </div>

          <button
            onClick={(e) => handleSubmit(e)}
            type="button"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SpecialIssueTab;
