import { useState } from "react";

function TabLayout({ TabUI, TabName, activeTab, InitialValue, GoToNext }) {
  const [formData, setFormData] = useState(InitialValue);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function handleNextSection(params) {
    GoToNext();
  }

  function handleSaveSection(params) {
    console.log(formData)
  }

  return (
    <>
      {activeTab === TabName && (
        <>
          <TabUI handleChange={handleChange} formData={formData} />
          {/* Form Action area */}
          <div className="flex justify-end">
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
