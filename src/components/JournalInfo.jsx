import Link from "next/link";

function JournalInfo({ Info, IndexInfo }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Journal Highlight</h3>
        </div>
      </div>
      <div className="p-6">
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: Info ? Info[0].about : "" }}
        ></div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-md p-4 mt-5 border border-red-200">
          <h4 className="font-bold text-red-900 mb-3">Indexing</h4>
          <div className="text-sm space-y-2">
            {IndexInfo &&
              IndexInfo.map((item, ind) => (
                <div className="flex items-center space-x-2" key={ind}>
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <Link href={item.link}>
                    <span className="text-gray-700 hover:text-red-600">{item.index_name}</span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalInfo;
