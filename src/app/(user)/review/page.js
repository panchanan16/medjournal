'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Reviewers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const reviewerData = [
    {
      title: "Reviewer of the Month (2025)",
      date: "2025-04-01 17:20:33",
      year: "2025",
      content: "In 2025, JGO reviewers continue to make outstanding contributions to the peer review process."
    },
    {
      title: "Reviewer of the Month (2024)",
      date: "2024-03-01 15:45:04",
      year: "2024",
      content: "In 2024, JGO reviewers continue to make outstanding contributions to the peer review process."
    },
    {
      title: "Reviewer of the Month (2023)",
      date: "2023-09-21 16:23:33",
      year: "2023",
      content: "In 2023, JGO reviewers continue to make outstanding contributions to the peer review process."
    },
    {
      title: "Reviewer of the Month (2022)",
      date: "2023-08-14 16:53:56",
      year: "2022",
      content: "In 2022, JGO reviewers continue to make outstanding contributions to the peer review process."
    },
    {
      title: "Reviewer of the Month (2020-21)",
      date: "2021-04-06 15:19:00",
      year: "",
      content: "Over the years, many JGO reviewers have made outstanding contributions to the peer review process."
    },
    {
      title: "The reviewers of JGO 2020",
      date: "2020-12-23 10:40:05",
      year: "",
      content: "We appreciate and thank the reviewers of JGO for their tremendous efforts to support and improve our work. Hereby, we would like to express our sincere gratitude to them, which are listed as follows."
    },
    {
      title: "The reviewers of JGO 2019",
      date: "2019-12-24 03:08:17",
      year: "",
      content: "We appreciate and thank the reviewers of JGO for their tremendous efforts to support and improve our work. Hereby, we would like to express our sincere gratitude to them, which are listed as follows."
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-700 to-red-900 py-6 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Reviewers</h1>
          </div>

          <div className="divide-y divide-gray-200">
            {reviewerData.map((item, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition duration-150">
               <Link href="/reviewer"><h2 className="text-xl md:text-2xl font-bold text-red-800 hover:underline mb-2">{item.title}</h2></Link>
                <div className="text-sm text-gray-500 mb-3">
                  Posted on {isClient ? formatDate(item.date) : item.date.split(' ')[0]}
                </div>
                <p className="text-gray-700 mb-3">{item.content}</p>
                <Link href="/reviewer" className="inline-flex items-center text-red-700 hover:text-red-900 font-medium">
                  Read more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}