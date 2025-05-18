"use client"

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AboutLayout({ children }) {
    const [expandedSection, setExpandedSection] = useState('');

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
                            <div className="bg-red-800 text-white py-4 px-6">
                                <h2 className="text-xl font-bold">MedLetter</h2>
                                <p className="text-red-100 text-sm">Journal of Medical Sciences</p>
                            </div>

                            <nav className="py-4">
                                <ul>
                                    {[
                                        { id: '', label: 'Aim and Scope', active: true },
                                        { id: 'cookie-preferense', label: 'Cookie Policy' },
                                        { id: 'terms_condition', label: 'Terms & Conditions' },
                                        { id: 'privacy_policy', label: 'Privacy Policy' },
                                        { id: 'copyright', label: 'Copyright' },
                                        { id: 'contact_us', label: 'Contact Us' },

                                    ].map((item) => (
                                        <li key={item.id} onClick={()=> setExpandedSection(item.id)} className={`px-6 py-3 border-l-4 ${expandedSection == item.id ? 'border-red-500 bg-red-50 text-red-700 font-medium' : 'border-transparent hover:border-red-200 hover:bg-gray-50'}`}>
                                            <Link href={`/about/${item.id}`} className="flex items-center">
                                                <ChevronRight size={16} className="mr-2" />
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    {children}
                </div>
            </div>
        </>
    );
}