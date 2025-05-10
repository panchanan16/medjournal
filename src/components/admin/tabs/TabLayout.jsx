import { _POST } from "@/request/post_request";
import { useState } from "react";

function TabLayout({
  TabUI,
  TabName,
  activeTab,
  InitialValue,
  GoToNext,
  setArticleId,
}) {
  const [formData, setFormData] = useState(InitialValue);
  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: type === "checkbox" ? checked : value,
    // });

    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked ? 1 : 0 });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  async function handleSaveSection(params) {
    try {
      // Create FormData object for file uploads
      const submitData = new FormData();

      // Append all form fields to FormData
      Object.keys(formData).forEach((key) => {
        if (key === "coverImage" && formData[key]) {
          submitData.append(key, formData[key]);
        } else if (key === "tags") {
          submitData.append(key, JSON.stringify(formData[key]));
        } else {
          submitData.append(key, formData[key]);
        }
      });

      // Dummy API call simulation ----
      const response = await _POST(
        "articleMain/create",
        submitData,
        "POST",
        true,
        "core"
      );
      // console.log(response.article_id);
      setArticleId && setArticleId(response.article_id);

      // Simulate successful API response
      console.log("Form data submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }    
  }

  function handleNextSection(params) {
    GoToNext();
    console.log(formData);
    setArticleId && setArticleId;
  }

  return (
    <>
      {activeTab === TabName && (
        <>
          <TabUI handleChange={handleChange} formData={formData} />
          {/* Form Action area */}
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={handleSaveSection}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleNextSection}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Save And Continue
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TabLayout;
