import Link from "next/link";

const NewsSection = ({ NewsData }) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className="w-6 h-1 bg-red-700 mr-3"></div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Announcements
        </h2>
      </div>
      <div className="border-t border-gray-100 pt-4">
        {/* <p className="text-gray-500 italic">No Announcements</p> */}
        {NewsData.length &&
          NewsData.map((item, ind) => (
            <div className="space-y-4" key={ind}>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium hover:text-red-700 transition">
                  <Link href="/news_announcement">
                    {item.heading}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export function AnnouncementsSection({ AnnounceData }) {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <div className="flex items-center mb-4">
        <div className="w-6 h-1 bg-red-700 mr-3"></div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">NEWS</h2>
      </div>
      <div className="border-t border-gray-100 pt-4">
        {/* <p className="text-gray-500 italic">No Announcements</p> */}
        {AnnounceData.length &&
          AnnounceData?.map((item, ind) => (
            <div className="space-y-4" key={ind}>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium hover:text-red-700 transition">
                  <Link href="/news_announcement">{item.heading}</Link>
                </h3>
                <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NewsSection;
