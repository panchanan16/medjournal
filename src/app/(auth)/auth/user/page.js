"use client"

import { useState } from 'react';
import Head from 'next/head';
import {
    FileText,
    Send,
    ChevronDown,
    Search,
    Calendar,
    Clock,
    Menu,
    X,
    Home,
    Settings,
    LogOut,
    Bell,
    User
} from 'lucide-react';
import Link from 'next/link';

export default function userProfilePage() {
    const articles = [
        { mrn: 'MRN-0000003', title: 'The Impact of AI in Modern Healthcare', status: 'ACKNOWLEDGED', submitted: '20 May, 2025', payment: 'PENDING' },
        { mrn: 'MRN-0000002', title: 'Advances in Telemedicine During Global Health Crises', status: 'ACKNOWLEDGED', submitted: '20 May, 2025', payment: 'PENDING' },
        { mrn: 'MRN-0000001', title: 'Novel Approaches to Chronic Pain Management', status: 'UNDER REVIEW', submitted: '18 May, 2025', payment: 'PENDING' },
        { mrn: 'MRN-0000000', title: 'Pediatric Vaccine Developments: A Five-Year Outlook', status: 'PUBLISHED', submitted: '10 May, 2025', payment: 'COMPLETED' },
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}            
            {/* Main content */}
            <div className="flex">
                {/* Content area */}
                <div className="flex-1">
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                    <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4 md:mb-0">
                                        Your Articles
                                    </h2>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                        <Link href={'user/create_article'}>
                                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                                                New Article
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Articles table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                MRN
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Submitted On
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Payment Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {articles.map((article, index) => (
                                            <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">
                                                    {article.mrn}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {article.title}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${article.status === 'ACKNOWLEDGED' ? 'bg-blue-100 text-blue-800' :
                                                            article.status === 'UNDER REVIEW' ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-green-100 text-green-800'}`}>
                                                        {article.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="flex items-center">
                                                        <Calendar className="h-4 w-4 mr-1" />
                                                        {article.submitted}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${article.payment === 'PENDING' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-green-100 text-green-800'}`}>
                                                        {article.payment}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
                                            <span className="font-medium">4</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Next</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </nav>
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