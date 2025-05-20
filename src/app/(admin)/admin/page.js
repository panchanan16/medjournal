"use client";

import Head from "next/head";
import {
  Users,
  ShoppingBag,
  BarChart,
  Bell,
  Search,
  MessageSquare,
} from "lucide-react";
import AdminAsidebar from "@/components/admin/AdminAsidebar";
import Adminheader from "@/components/admin/Adminheader";

export default function Dashboard() {
  return (
    <div className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
           <h1>Welcome to Admin Panel</h1>
        </div>
      </div>
    </div>
  );
}
