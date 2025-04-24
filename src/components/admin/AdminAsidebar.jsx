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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AdminAsidebar() {
  const [openSections, setOpenSections] = useState({
    dashboard: true,
    journalInfo: false,
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
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSubSection = (section) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-red-800 shadow-lg">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-red-900">
            <h1 className="text-xl font-bold text-white">MedJournal</h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {/* Dashboard Section */}
              <div>
                <button
                  onClick={() => toggleSection("dashboard")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Home className="mr-3 h-5 w-5" />
                    <span className="">Dashboard</span>
                  </div>
                  {openSections.dashboard ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.dashboard && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Overview
                      </div>
                    </Link>
                    <Link href="/dashboard/performance">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Performance
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Content Management - New Section */}
              <div>
                <button
                  onClick={() => toggleSection("content")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-600 group"
                >
                  <div className="flex">
                    <FileText className="mr-3 h-5 w-5" />
                    <span className="">About</span>
                  </div>
                  {openSections.content ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.content && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/admin/content/all">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        All Content
                      </div>
                    </Link>
                    <Link href="/admin/content/create">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-500">
                        Create New
                      </div>
                    </Link>
                    <Link href="/content/categories">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Categories
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* <!--- Journal Info (Admin Section) ---> */}
              <div>
                <button
                  onClick={() => toggleSection("journalInfo")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
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
                    <Link href="/users/admins">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Indexing
                      </div>
                    </Link>

                    <Link href="/users/admins">
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

              {/* Users Section */}
              <div>
                <button
                  onClick={() => toggleSection("users")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Users className="mr-3 h-5 w-5" />
                    <span className="">For authors</span>
                  </div>
                  {openSections.users ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.users && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/users/all">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        All Users
                      </div>
                    </Link>
                    <Link href="/users/admins">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Admins
                      </div>
                    </Link>
                    <Link href="/users/customers">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Customers
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Section */}
              <div>
                <button
                  onClick={() => toggleSection("products")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <BookA className="mr-3 h-5 w-5" />
                    <span className="">For Reviewers</span>
                  </div>
                  {openSections.products ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.products && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/products/inventory">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Inventory
                      </div>
                    </Link>
                    <Link href="/products/categories">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Categories
                      </div>
                    </Link>
                    <Link href="/products/orders">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Orders
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Analytics Section */}
              <div>
                <button
                  onClick={() => toggleSection("analytics")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Siren className="mr-3 h-5 w-5" />
                    <span className="">Ethics & Policies</span>
                  </div>
                  {openSections.analytics ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.analytics && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/analytics/sales">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Sales
                      </div>
                    </Link>
                    <Link href="/analytics/traffic">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Traffic
                      </div>
                    </Link>
                    <Link href="/analytics/conversion">
                      <div className="group flex items-center px-5 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Conversion
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Settings Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Settings className="mr-3 h-5 w-5" />
                    <span className="">Special Contents</span>
                  </div>
                  {openSections.settings ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.settings && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/settings/general">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        General
                      </div>
                    </Link>
                    <Link href="/settings/security">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Security
                      </div>
                    </Link>
                    <Link href="/settings/notifications">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Notifications
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* Archives Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <PackageOpen className="mr-3 h-5 w-5" />
                    <span className="">Archives</span>
                  </div>
                  {openSections.settings ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.settings && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/settings/general">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        General
                      </div>
                    </Link>
                    <Link href="/settings/security">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Security
                      </div>
                    </Link>
                    <Link href="/settings/notifications">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Notifications
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* new Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Newspaper className="mr-3 h-5 w-5" />
                    <span className="">News</span>
                  </div>
                  {openSections.settings ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.settings && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/settings/general">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        General
                      </div>
                    </Link>
                    <Link href="/settings/security">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Security
                      </div>
                    </Link>
                    <Link href="/settings/notifications">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Notifications
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {/* Settings Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <BadgeDollarSign className="mr-3 h-5 w-5" />
                    <span className="">Charges</span>
                  </div>
                  {openSections.settings ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.settings && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/settings/general">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        General
                      </div>
                    </Link>
                    <Link href="/settings/security">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Security
                      </div>
                    </Link>
                    <Link href="/settings/notifications">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Notifications
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Settings Section */}
              <div>
                <button
                  onClick={() => toggleSection("settings")}
                  className="w-full flex items-center justify-between px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-red-700 group"
                >
                  <div className="flex">
                    <Settings className="mr-3 h-5 w-5" />
                    <span className="">Settings</span>
                  </div>
                  {openSections.settings ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {openSections.settings && (
                  <div className="pl-10 space-y-1 mt-1">
                    <Link href="/settings/general">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        General
                      </div>
                    </Link>
                    <Link href="/settings/security">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Security
                      </div>
                    </Link>
                    <Link href="/settings/notifications">
                      <div className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-100 hover:text-white hover:bg-red-700">
                        Notifications
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAsidebar;
