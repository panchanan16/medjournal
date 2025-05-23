"use client";

import {
  BadgeDollarSign,
  BarChart,
  BookA,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  Newspaper,
  PackageOpen,
  Settings,
  ShoppingBag,
  Siren,
  Users,
  Notebook,
  Star,
  BadgeAlert,
  ArchiveRestore,
  ChevronsLeftRightEllipsis,
  HandCoins,
  NewspaperIcon,
  BoxIcon,
  BoxesIcon,
  MessageCircleWarningIcon,
  BoltIcon,
  BookMarkedIcon,
  Mic2Icon,
  MicIcon,
  TvIcon,
  PanelRightOpen,
  ScanEyeIcon,
  ClapperboardIcon,
  FileSymlinkIcon,
  WifiHighIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AdminAsidebar() {
  const [openSections, setOpenSections] = useState({
    dashboard: true,
    journalInfo: false,
    forAuthors: false,
    forReviewers: false,
    ethicsAndPloicies: false,
    specialIssues: false,
    archives: false,
    Indexing: false,
    onlineFirst: false,
    articleProcessingCharges: false,
    siteSettings: false,
    announce: false,
    news: false,
    slider: false,

    // Currently not in use 👇
    users: false,
    products: false,
    analytics: false,
    settings: false,
    content: false,
  });

  const [openSubSections, setOpenSubSections] = useState({
    editorialTeam: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const newState = Object.fromEntries(
        Object.keys(prev).map((key) => [key, false])
      );
      return {
        ...newState,
        [section]: !prev[section],
      };
    });
  };

  const toggleSubSection = (section) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isSectionOpen = (section) =>
    openSections?.[section] ? "bg-red-700" : "";

  return (
    <div className="hidden md:flex md:flex-shrink-0 sticky top-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-red-800 shadow-lg">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-red-900">
            <h1 className="text-xl font-bold text-white">MedJournal</h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {/* Dashboard Section */}

              <Link href="/admin/journal-home">
                <div
                  onClick={() => toggleSection("Issues")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("Issues") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <Home className="mr-3 h-5 w-5" />
                    <span className="">Journal Home</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Journal Info Section ---> */}
              <div>
                <button
                  onClick={() => toggleSection("journalInfo")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white  hover:bg-red-700 group ${isSectionOpen(
                    "journalInfo"
                  )}`}
                >
                  <div className="flex">
                    <Notebook className="mr-3 h-5 w-5" />
                    <span className="">Journal Info</span>
                  </div>
                  {openSections.journalInfo ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.journalInfo && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/admin/journal-info/about-us">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        About Us
                      </div>
                    </Link>
                    <Link href="/admin/indexing">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Indexing
                      </div>
                    </Link>

                    <Link href="/admin/journal-info/editorial-team">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Editorial Team
                      </div>
                    </Link>

                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Peer Review Process
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Supplement & Series
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Adversiting Policies
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Testingmonials
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* <!--- For Authors Section ---> */}
              <div>
                <button
                  onClick={() => toggleSection("forAuthors")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white  hover:bg-red-700 group ${isSectionOpen(
                    "forAuthors"
                  )}`}
                >
                  <div className="flex">
                    <BookA className="mr-3 h-5 w-5" />
                    <span className="">For Authors</span>
                  </div>
                  {openSections.forAuthors ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.forAuthors && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/admin/authorInstruction">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Authors Instructions
                      </div>
                    </Link>
                    <Link href="/users/admins">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Indexing
                      </div>
                    </Link>

                    <Link href="/users/admins">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Online Submission
                      </div>
                    </Link>

                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Submit Multimedia Files
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Refference Style
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Interview With Outstanding Authors{" "}
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* <!--- For Reviewers Section ---> */}
              <div>
                <button
                  onClick={() => toggleSection("forReviewers")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white  hover:bg-red-700 group ${isSectionOpen(
                    "forReviewers"
                  )}`}
                >
                  <div className="flex">
                    <Star className="mr-3 h-5 w-5" />
                    <span className="">For Reviewers</span>
                  </div>
                  {openSections.forReviewers ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.forReviewers && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/admin/reviewer_guidelines">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Guidelines For Reviewers{" "}
                      </div>
                    </Link>
                    <Link href="/admin/reviewers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Reviewers
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* <!--- Ethics & Policies Section ---> */}
              <Link href="/admin/ethics-policies">
                <div
                  onClick={() => toggleSection("ethicsAndPloicies")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("ethicsAndPloicies")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <Siren className="mr-3 h-5 w-5" />
                    <span className="">Ethics & Policies</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Ethics & Policies Section ---> */}
              <Link href="/admin/slider">
                <div
                  onClick={() => toggleSection("slider")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("slider") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <PanelRightOpen className="mr-3 h-5 w-5" />
                    <span className="">Slider</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Indexing Section ---> */}
              <Link href="/admin/indexing">
                <div
                  onClick={() => toggleSection("Indexing")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("Indexing")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <BookMarkedIcon className="mr-3 h-5 w-5" />
                    <span className="">Indexing</span>
                  </div>
                </div>
              </Link>

              {/* <!--- perr riwiew  Section ---> */}
              <Link href="/admin/peer">
                <div
                  onClick={() => toggleSection("peer")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("peer") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <ScanEyeIcon className="mr-3 h-5 w-5" />
                    <span className="">Peer Review</span>
                  </div>
                </div>
              </Link>

              {/* <!--- MultiMedia  Section ---> */}
              <Link href="/admin/multimedia">
                <div
                  onClick={() => toggleSection("multimedia")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("multimedia")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <ClapperboardIcon className="mr-3 h-5 w-5" />
                    <span className="">multimedia process</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Reffer style  Section ---> */}
              <Link href="/admin/referStyle">
                <div
                  onClick={() => toggleSection("referStyle")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("referStyle")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <FileSymlinkIcon className="mr-3 h-5 w-5" />
                    <span className="">ReferStyle process</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Online Subbmission  Section ---> */}
              <Link href="/admin/onlinesubmit">
                <div
                  onClick={() => toggleSection("onlinesubmit")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("onlinesubmit")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <WifiHighIcon className="mr-3 h-5 w-5" />
                    <span className="">online submit process</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Announce Section ---> */}
              <Link href="/admin/announce">
                <div
                  onClick={() => toggleSection("announce")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("announce")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <MicIcon className="mr-3 h-5 w-5" />
                    <span className="">Announcement</span>
                  </div>
                </div>
              </Link>

              {/* <!--- news Section ---> */}
              <Link href="/admin/news">
                <div
                  onClick={() => toggleSection("news")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("news") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <TvIcon className="mr-3 h-5 w-5" />
                    <span className="">News</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Online First Section ---> */}
              <Link href="/admin/content/all">
                <div
                  onClick={() => toggleSection("onlineFirst")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("onlineFirst")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <ChevronsLeftRightEllipsis className="mr-3 h-5 w-5" />
                    <span className="">Online First</span>
                  </div>
                </div>
              </Link>

              {/* Article section */}
              <Link href="/admin/articles">
                <div
                  onClick={() => toggleSection("Articles")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("Articles")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <NewspaperIcon className="mr-3 h-5 w-5" />
                    <span className="">Articles</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Article Processing Charges Section ---> */}
              <Link href="/admin/article-charges">
                <div
                  onClick={() => toggleSection("articleProcessingCharges")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("articleProcessingCharges")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <HandCoins className="mr-3 h-5 w-5" />
                    <span className="">Article Processing Charges</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Volume Section ---> */}
              <Link href="/admin/volume">
                <div
                  onClick={() => toggleSection("Volume")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("Volume") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <BoxesIcon className="mr-3 h-5 w-5" />
                    <span className="">Volumes</span>
                  </div>
                </div>
              </Link>

              {/* <!--- Issues Section ---> */}
              <Link href="/admin/issues">
                <div
                  onClick={() => toggleSection("Issues")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("Issues") ? "bg-red-700" : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <MessageCircleWarningIcon className="mr-3 h-5 w-5" />
                    <span className="">Issues</span>
                  </div>
                </div>
              </Link>

              {/* Settings section */}
              <Link href="/admin/site-settings">
                <div
                  onClick={() => toggleSection("siteSettings")}
                  className={`w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white group ${
                    isSectionOpen("siteSettings")
                      ? "bg-red-700"
                      : "hover:bg-red-700"
                  }`}
                >
                  <div className="flex">
                    <BoltIcon className="mr-3 h-5 w-5" />
                    <span className="">Site Settings</span>
                  </div>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAsidebar;
