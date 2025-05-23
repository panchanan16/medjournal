import TitleAndContent from "@/components/admin/TitleAndContent";
import { _GET } from "@/request/request";

async function ReferStylePage() {
  const response = await _GET('reffer/readAll')

  return (
    <div className="h-screen flex flex-col py-6">
      <div className="relative overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Create refer Process
                </h1>
              </div>
            </div>
          </div>
          {/* Main tinymce section */}
          <TitleAndContent type={response?.length ? 'PUT' : 'POST'} endpoints={`reffer/${response?.length ? `update?ref_id=${response[0]?.ref_id}` : 'create'}`} initialValues={response?.length ? response[0] : null} />
        </div>
      </div>
    </div>
  );
}

export default ReferStylePage;