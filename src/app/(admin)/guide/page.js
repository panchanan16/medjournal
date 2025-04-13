'use client'
import Link from 'next/link';
import AdminAsidebar from '@/components/admin/AdminAsidebar';
import Adminheader from '@/components/admin/Adminheader';
import TitleAndOneSection from '@/components/admin/TitleAndOneSection';
import dynamic from 'next/dynamic';

export default function ContentCreation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <AdminAsidebar />
        {/* Main Content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Adminheader />
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold text-gray-900">Create New Content</h1>
                  </div>
                </div>
              </div>
              {/* Main tinymce section */}
              <TitleAndOneSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}