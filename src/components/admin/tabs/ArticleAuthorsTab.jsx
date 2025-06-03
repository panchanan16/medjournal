"use client";

import { _POST } from "@/request/post_request";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

function ArticleAuthorsTab({
  activeTab,
  handleNextSection,
  articleId,
  initialValues,
  editId,
}) {
  const [isLoading, setIsloading] = useState(false);
  const [authors, setAuthors] = useState(
    initialValues
      ? initialValues
      : [
          {
            ar_author_id: "",
            ariticle_id: articleId || editId,
            authors_prefix: "",
            authors_name: "",
            authors_middlename: "",
            authors_lastname: "",
            author_email: "",
            orchid_id: "",
            afflication: "",
            qualification: "",
          },
        ]
  );
  const addAuthor = () => {
    setAuthors([
      ...authors,
      {
        ar_author_id: "",
        ariticle_id: articleId || editId,
        authors_prefix: "",
        authors_name: "",
        authors_middlename: "",
        authors_lastname: "",
        author_email: "",
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
    authors.length &&
      authors.map((authr, ind) => (authr.ariticle_id = articleId || editId));
    const payload = authors;
    if (articleId || editId) {
      try {
        const response = await _POST(
          `articleauthor/${editId ? `update?article_id=${editId}` : "create"}`,
          payload,
          `${editId ? "PUT" : "POST"}`
        );
        console.log("Saved:", response);
        console.log("Saved:", payload);
      } catch (error) {
        console.error("Error posting article:", error);
      }
    } else {
      toast.error("Select or Add a Article first");
    }
  };

  const handleSubmitAndContinue = async (e) => {
    e.preventDefault();
    const payload = { authors };
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

  async function generateCitation(e) {
    e.preventDefault();
    setIsloading(true);
    if (articleId || editId) {
      const response = await _POST(
        `citation/update?ariticle_id=${articleId || editId}`,
        { data: "empty" },
        "PUT",
        null,
        "core"
      );
      setIsloading(false);
    } else {
      alert("Article Must be Created First!");
    }
  }

  if (activeTab == "authors") {
    return (
      <div className="mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold mb-6">Add Article Authors</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {authors.map((author, index) => (
            <div
              key={index}
              className="p-4 rounded-md bg-gray-50 relative space-y-4"
            >
              <p className="text-red-700 ml-auto px-3 py-1 w-max rounded-lg font-bold bg-red-100">
                Section #{index + 1}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prefix (e.g., Dr.)"
                  value={
                    author.authors_prefix == null ? "" : author.authors_prefix
                  }
                  onChange={(e) =>
                    handleChange(index, "authors_prefix", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  value={author.authors_name}
                  onChange={(e) =>
                    handleChange(index, "authors_name", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  value={
                    author.authors_middlename == null
                      ? ""
                      : author.authors_middlename
                  }
                  onChange={(e) =>
                    handleChange(index, "authors_middlename", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={
                    author.authors_lastname == null
                      ? ""
                      : author.authors_lastname
                  }
                  onChange={(e) =>
                    handleChange(index, "authors_lastname", e.target.value)
                  }
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={author.author_email}
                  onChange={(e) =>
                    handleChange(index, "author_email", e.target.value)
                  }
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
            <button
              type="button"
              onClick={(e) => generateCitation(e)}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              {isLoading ? "Wait for a while.." : "Generate Citation"}
            </button>
            <Link href={'/admin/articles'}>
              <button
                type="button"                
                className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800"
              >
                Go to Articles
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default ArticleAuthorsTab;
