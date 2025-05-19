"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  Bell,
  Newspaper,
} from "lucide-react";

const newsData = [
  {
    id: 1,
    heading: "New Research Findings Published in Science Journal",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium lectus nec sodales blandit. Sed ut magna ut leo tempus maximus eu non enim. Proin cursus arcu vitae urna feugiat, eget tincidunt neque fringilla. Maecenas facilisis vestibulum nisi. Donec in urna et sapien feugiat tincidunt. Nullam a tempus magna. Morbi volutpat purus et risus commodo, eget viverra lacus dignissim. Sed imperdiet, orci nec tempor maximus, lorem sem varius ligula, eu euismod massa tortor sit amet ligula. Nam et arcu nulla. Cras tristique varius dui, vel blandit ipsum rutrum in. Praesent quis finibus arcu, id tincidunt leo. Etiam mi nunc, imperdiet quis risus et, faucibus porttitor leo. Cras sit amet sapien ut mi rhoncus sollicitudin.",
  },
];

const announcementsData = [
  {
    id: 1,
    heading: "Office Closure Notice",
    content:
      "Our offices will be closed on May 25th for system maintenance. We apologize for any inconvenience this may cause. During this time, our online services will remain operational, but response times may be slightly delayed. Normal operations will resume on May 26th. If you have any urgent matters, please contact our emergency response team at the provided email address.",
  },
];

// Detail View Component
const DetailView = ({ item, type, onBack }) => {
  const isNews = type === "news";

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="flex items-center text-red-600 hover:text-red-800 mb-6 font-medium"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to {isNews ? "News" : "Announcements"}
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        {item.heading}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: item.content }} className="prose max-w-none text-gray-700">
      </div>
    </div>
  );
};

// Tab Button Component ------
const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium text-sm sm:text-base transition-colors ${
        active
          ? "bg-red-600 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      } rounded-t-lg`}
    >
      <div className="flex items-center">{children}</div>
    </button>
  );
};

// Main Component -----
export default function NewsAnnouncementTab({ NewsAnnouncementData }) {
  const [activeTab, setActiveTab] = useState("news");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  const currentItems =
    activeTab === "news"
      ? NewsAnnouncementData.news
      : NewsAnnouncementData.announcements;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>

      {!selectedItem ? (
        <>
          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            <TabButton
              active={activeTab === "news"}
              onClick={() => handleTabChange("news")}
            >
              <Newspaper className="w-5 h-5 mr-2" />
              News
            </TabButton>
            <TabButton
              active={activeTab === "announcements"}
              onClick={() => handleTabChange("announcements")}
            >
              <Bell className="w-5 h-5 mr-2" />
              Announcements
            </TabButton>
          </div>

          {/* Items List */}
          <div className="space-y-6">
            {currentItems.map((item, ind) => (
              <div
                key={ind}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`p-6 ${
                      activeTab === "news" ? "md:w-2/3" : "w-full"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>12 may, 2025</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {item.heading}
                    </h3>
                    <div
                      className="text-gray-600 text-sm mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: item.content.split('</p>')[0] }}
                    ></div>
                    <div className="flex justify-between items-center">
                      <button className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <DetailView
          item={selectedItem}
          type={activeTab}
          onBack={handleBackClick}
        />
      )}
    </div>
  );
}
