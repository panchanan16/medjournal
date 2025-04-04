'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FloatingSection from '@/components/FloatingSection';

export default function ArchivesPage() {
    const [activeYear, setActiveYear] = useState('2024');

    const journals = {
        '2024': [
            {
                id: 1,
                volume: 15,
                issue: 6,
                date: 'Dec 31, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 2,
                volume: 15,
                issue: 5,
                date: 'October 31, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 3,
                volume: 15,
                issue: 4,
                date: 'August 31, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 4,
                volume: 15,
                issue: 3,
                date: 'June 30, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 5,
                volume: 15,
                issue: 2,
                date: 'April 30, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 6,
                volume: 15,
                issue: 1,
                date: 'February 29, 2024',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            }
        ],
        '2023': [
            {
                id: 7,
                volume: 14,
                issue: 6,
                date: 'December 31, 2023',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 8,
                volume: 14,
                issue: 5,
                date: 'October 31, 2023',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 9,
                volume: 14,
                issue: 4,
                date: 'August 31, 2023',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            },
            {
                id: 10,
                volume: 14,
                issue: 3,
                date: 'June 30, 2023',
                title: 'Journal of Gastrointestinal Oncology',
                image: '/archives.jpeg'
            }
        ]
    };

    const years = Object.keys(journals).sort((a, b) => b - a);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="sticky top-0 bg-white shadow-md z-10">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto py-3 scrollbar-hide">
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`px-6 py-2 mx-1 rounded-md font-semibold transition-colors ${activeYear === year
                                        ? 'bg-red-700 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-red-100'
                                    }`}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="container flex flex-col items-center mx-auto px-4 py-8">
                <div className="mb-8 md:self-start">
                    <h2 className="text-3xl font-bold text-red-800 border-b-2 border-red-300 pb-2">
                        {activeYear}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {journals[activeYear].map((journal) => (
                        <Link href={`/journal/${journal.id}`} key={journal.id}>
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                                <div className="relative">
                                    <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                                        <div className="w-full h-[20rem] relative">
                                            <Image
                                                src={journal.image}
                                                alt={`Cover for ${journal.title} Vol ${journal.volume}, No ${journal.issue}`}
                                                layout="fill"
                                                objectFit="fit"
                                                className="transition-opacity duration-300 hover:opacity-90"
                                            />
                                        </div>
                                    </div>                                  
                                </div>

                                <div className="p-5 border-t border-gray-100">
                                    <h3 className="font-bold text-red-800 mb-1">
                                        Vol {journal.volume}, No {journal.issue} ({journal.date}):
                                    </h3>
                                    <p className="text-gray-700">{journal.title}</p>                            
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <FloatingSection />
        </div>
    );
}
