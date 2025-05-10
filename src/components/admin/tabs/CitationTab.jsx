import TabLayout from "./TabLayout";

function CitationTab({ activeTab, handleNextSection, articleId }) {
  const initialValues = {
    isInHome: true,
    isOpenAccess: true,
    isInPress: false,
    issueNo: "",
    url: "",
    articleType: "",
  };

  function TabArticleCitationUi({ handleChange, formData }) {
    console.log("Article Id citation is: ", articleId)
    return (
      <form>
         <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="citation_apa"
                className="block text-sm font-medium text-gray-700"
              >
                APA Citation:
              </label>
              <textarea
                id="citation_apa"
                name="citation_apa"
                rows="2"
                value={formData.citation_apa}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="citation_mla"
                className="block text-sm font-medium text-gray-700"
              >
                MLA Citation:
              </label>
              <textarea
                id="citation_mla"
                name="citation_mla"
                rows="2"
                value={formData.citation_mla}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="citation_mla"
                className="block text-sm font-medium text-gray-700"
              >
                Harvard:
              </label>
              <textarea
                id="citation_mla"
                name="citation_mla"
                rows="2"
                value={formData.citation_mla}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="citation_mla"
                className="block text-sm font-medium text-gray-700"
              >
                Chicago:
              </label>
              <textarea
                id="citation_mla"
                name="citation_mla"
                rows="2"
                value={formData.citation_mla}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="citation_mla"
                className="block text-sm font-medium text-gray-700"
              >
                Vancouver:
              </label>
              <textarea
                id="citation_mla"
                name="citation_mla"
                rows="2"
                value={formData.citation_mla}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    );
  }

  return (
    <>
      <TabLayout
        TabUI={TabArticleCitationUi}
        TabName={"citations"}
        InitialValue={initialValues}
        activeTab={activeTab}
        GoToNext={handleNextSection}
      />
    </>
  );
}

export default CitationTab;
