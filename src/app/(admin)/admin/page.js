'use client'

import Head from 'next/head';
import { 
  Users, 
  ShoppingBag, 
  BarChart, 
  Bell,
  Search,
  MessageSquare
} from 'lucide-react';
import AdminAsidebar from '@/components/admin/AdminAsidebar';
import Adminheader from '@/components/admin/Adminheader';

export default function Dashboard() {
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
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Main content goes here */}
                <div className="py-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Dashboard Stat Card 1 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">24,521</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">View all users</a>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Stat Card 2 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                            <ShoppingBag className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">Products Sold</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">14,386</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a href="#" className="font-medium text-green-600 hover:text-green-500">View inventory</a>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Stat Card 3 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                            <BarChart className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">$258,492</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">View analytics</a>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Stat Card 4 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                            <Bell className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">Pending Orders</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">152</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">View orders</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity Section */}
                  <div className="mt-8">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h2>
                    <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
                      <ul className="divide-y divide-gray-200">
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-indigo-600 truncate">New user registered</p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  User
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                  John Smith
                                </p>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>
                                  5 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-indigo-600 truncate">New order placed</p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                  Order
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  <ShoppingBag className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                  Order #38290
                                </p>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-indigo-600 truncate">Payment received</p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  Payment
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  <BarChart className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                  $129.00
                                </p>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <p>
                                  1 hour ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}