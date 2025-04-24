import TitleAndContent from "@/components/admin/TitleAndContent";

function Page() {
  return (
    <div>
      <div className="h-screen flex flex-col py-6">
        <div className="relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Create New Content For Article Processing Charges
                  </h1>
                </div>
              </div>
            </div>
            {/* Main tinymce section */}
            <TitleAndContent endpoints="articlecharge/create" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
