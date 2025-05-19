import { _POST } from "@/request/post_request";
import React, { useState } from "react";

function StandardIssueTab({ VolumeList, activeTab, setIssueId }) {
  const InitialValue = {
    isPress: 1,
    volume_id: "",
    issue_name: "",
    issue_month: "",
  };

  const [formData, setFormData] = useState(InitialValue);

  const handleChange = (e) => {
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
    const payload = formData;
    try {
      const response = await _POST(`issue/create`, payload, "POST");
    //   console.log(response);
    //   console.log("Saved:", payload);
      setIssueId(response?.is_id
)
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };

  if (activeTab == "Issues") {
    return (
      <div className="mx-auto px-5 py-8">
        <h1 className="text-2xl font-bold mb-6">Add Standard Issue</h1>
        <form>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  id="isPress"
                  name="isPress"
                  type="checkbox"
                  checked={formData.isPress}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="isInHome" className="text-gray-700">
                  In Press
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="volume_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Volume:*
                </label>
                <div className="mt-1 flex">
                  <select
                    id="volume_id"
                    name="volume_id"
                    required
                    value={formData.volume_id}
                    onChange={handleChange}
                    className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  >
                    <option value="">---------</option>
                    {VolumeList &&
                      VolumeList?.map((vol, ind) => (
                        <option key={ind} value={vol.volume_id}>
                          {vol.volume_name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="issue_name"
                className="block text-sm font-medium text-gray-700"
              >
                Issue Name:
              </label>
              <input
                id="issue_name"
                name="issue_name"
                rows="3"
                value={formData.issue_name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="issue_month"
                className="block text-sm font-medium text-gray-700"
              >
                Month:
              </label>
              <input
                id="issue_month"
                name="issue_month"
                rows="3"
                value={formData.issue_month}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <button
              onClick={(e) => handleSubmit(e)}
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StandardIssueTab;
