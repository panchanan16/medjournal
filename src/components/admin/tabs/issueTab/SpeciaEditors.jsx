import { _POST } from "@/request/post_request";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SpeciaEditors({ IssueId, activeTab }) {
  const [authors, setAuthors] = useState([
    {
      issueId: IssueId,
      name: "",
      email: "",
      orchid_id: "",
      afflication: "",
      qualification: "",
    },
  ]);
  const addAuthor = () => {
    setAuthors([
      ...authors,
      {
        issueId: IssueId,
        name: "",
        email: "",
        orchid_id: "",
        afflication: "",
        qualification: "",
      },
    ]);
  };

  const removeAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...authors];
    updated[index][field] = value;
    setAuthors(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (IssueId) {
      authors.length && authors.map((authr, ind) => (authr.issueId = IssueId));
      const payload = authors;
      try {
        const response = await _POST("specialissueEditor/create", payload, "POST");
        console.log("response:", response);
        console.log("Saved:", payload);
      } catch (error) {
        console.error("Error posting article:", error);
      }
    } else {
    //   console.log("Saved:", payload);
      toast.error("Select or Add a Article first");
    }
  };

  if (activeTab == "Special_Authors") {
    return (
      <div className="mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold mb-6">Add Special Issue Editors</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {authors.map((author, index) => (
            <div
              key={index}
              className="p-4 rounded-md bg-gray-50 relative space-y-4"
            >
              <p className="text-red-700 ml-auto px-3 py-1 w-max rounded-lg font-bold bg-red-100">
                Special Authors #{index + 1}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name of the Editor"
                  value={author.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={author.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="ORCID ID"
                  value={author.orchid_id}
                  onChange={(e) =>
                    handleChange(index, "orchid_id", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <textarea
                placeholder="Affiliation"
                value={author.afflication}
                onChange={(e) =>
                  handleChange(index, "afflication", e.target.value)
                }
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                rows={3}
              />

              <textarea
                placeholder="qualification"
                value={author.qualification}
                onChange={(e) =>
                  handleChange(index, "qualification", e.target.value)
                }
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                rows={3}
              />

              <button
                type="button"
                onClick={() => removeAuthor(index)}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="space-x-4">
            <button
              type="button"
              onClick={addAuthor}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Author
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit Authors
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SpeciaEditors;
