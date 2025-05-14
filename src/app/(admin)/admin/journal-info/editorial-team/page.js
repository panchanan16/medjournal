import EditorialBoardContent from "@/components/admin/EditorialBoardContent";


function Page() {
  return (
    <div className="h-screen flex flex-col py-6">
      <div className="relative overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="md:flex md:items-center md:justify-between mb-6">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Create Journal Info's Editorial-Team Content
                </h1>
              </div>
            </div>
          </div>
          {/* Main tinymce section */}
          <EditorialBoardContent />
        </div>
      </div>
    </div>
  );
}

export default Page;
