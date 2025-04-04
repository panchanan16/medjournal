import Link from "next/link";

const NewsAnnouncementsSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-6 h-1 bg-red-700 mr-3"></div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">News</h2>
            </div>
            <div className="border-t border-gray-100 pt-4">
              {/* <p className="text-gray-500 italic">No News</p> */}
             
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/news/1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque. Lorem, ipsum.</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/news/1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque. Lorem ipsum dolor sit amet.</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/news/1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, velit quia libero cumque quo in?</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/news/1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium amet repudiandae assumenda saepe accusantium deserunt dolor.
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/news/1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque. Lorem, ipsum dolor.</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
              </div>
             
            </div>
          </div>
          
          {/* Announcements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-6 h-1 bg-red-700 mr-3"></div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Announcements</h2>
            </div>
            <div className="border-t border-gray-100 pt-4">
              {/* <p className="text-gray-500 italic">No Announcements</p> */}

              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-medium hover:text-red-700 transition">
                    <Link href="/announcements/1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempore possimus veniam fugiat perferendis!</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Posted: 15/03/2025</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default NewsAnnouncementsSection ;