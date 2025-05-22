
// import { _GET } from '@/request/request';
// import Layout from '../../components/Layout';
// import HomePage from '@/components/HomePage';

// export default async function Home() {
//   const response = await _GET('article/readAll')
//   const journal = await _GET('journal/readAll', 'core')
//   const newsAnnouncement = await _GET(`newsAnnouncement/readAll`, 'core')

//   return (
//     <Layout>
//       <HomePage articles={response ? response?.articleList : []} Journal={journal.length ? journal[0] : {}} NewsAnnouncement={newsAnnouncement} />
//     </Layout>
//   );
// }



"use client"

import JournalMetrics from '@/components/JournalMetrics'
import { ChevronLeft, ChevronRight } from 'lucide-react'


// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('current')
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length)
  //   }, 5000)
  //   return () => clearInterval(timer)
  // }, [slides.length])

  const slides = [
    {
      id: 1,
      title: "Whole-genome sequencing of 20 cholangiocarcinoma cases reveals unique profiles in patients with cirrhosis and primary sclerosing cholangitis",
      abstract: "In 2025, many JGO authors make outstanding contributions to our journal. Their articles published with us have received very well feedback in the field and stimulate a lot of discussions and new insights among the peers.",
      img: "https://cdn.amegroups.cn/static/image/569fd4cd225de10a00c398c9e0285c0c/569fd4cd225de10a00c398c9e0285c0c.png/w600"
    },
    {
      id: 2,
      title: "An unusual paraesophageal and diaphragmatic SDHA-deficient gastrointestinal stromal tumor (GIST) metastases case report",
      abstract: "Recent developments in gastroenterology research have opened new pathways for treatment and diagnosis. Our contributors continue to push the boundaries of medical knowledge.",
      img: "https://cdn.amegroups.cn/static/image/2c8c76cedc9f052f918fae9b48b8e007/2c8c76cedc9f052f918fae9b48b8e007.jpeg/w600"
    },
    {
      id: 3,
      title: "Journal of Gastrointestinal Oncology 2023 CiteScore Released: 3.2",
      abstract: "Our journal continues to publish high-impact research that directly influences clinical practice and improves patient outcomes worldwide.",
      img: "https://cdn.amegroups.cn/static/image/a4be23e9e82f80ab2b571133d0460319/2023-CiteScore-%20banner.jpg/w600"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const [current, setCurrent] = useState(0);


  return (
    <>
      <Head>
        <title>Journal of Gastrointestinal Oncology</title>
        <meta name="description" content="Leading peer-reviewed medical journal in gastrointestinal oncology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="w-full max-full mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Slider - 70% */}

            {/* New Slider */}
            <div className="w-7/10 min-w-0">
              <div className="relative">
                {/* Main Slider */}
                <div className="rounded-lg h-96 flex items-center justify-between p-5 relative overflow-hidden">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <img className='w-full object-cover' src={slides[currentSlide].img} />
                  </div>
                  {/* Navigation */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-black/40 text-white p-2 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-black/40 text-white p-2 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="mt-3 bg-white rounded-lg shadow-lg p-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                      {slides[currentSlide].abstract}
                    </p>
                    <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                      Read More
                    </button>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex mt-3 justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Journal Volume - 30% */}
            <div className="w-2/8 flex-shrink-0 min-w-0">
              <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800 truncate">Journal highlight</h3>
                  </div>
                </div>

                <div className="p-3">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 text-center">
                    <div className="flex justify-center">
                      <img
                        src="/archives.jpeg"
                        alt="Journal cover"
                        className="rounded max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-bold text-sm">ISSN (Online): N/A</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-bold text-sm">ISSN (Online): N/A</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-bold text-sm">Abbreviation: Med Ltr</span>
                  </div>

                  <Link href={'/about'}>
                    <span className='text-red-700 font-semibold'>Read Aim & Scope →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <JournalMetrics />

        {/* Main Content */}
        <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Articles Section */}
            <div className="lg:col-span-2">
              {/* Enhanced Tabs */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8 overflow-hidden">
                <nav className="flex">
                  {[
                    { id: 'current', label: 'Current Issue', icon: '📰' },
                    { id: 'popular', label: 'Most Read', icon: '🔥' },
                    { id: 'funded', label: 'NIH Funded', icon: '💰' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 px-6 font-semibold text-sm transition-all duration-300 ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                        : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Featured Article */}
              <article className="bg-white rounded-lg shadow-lg border border-gray-100 p-5 mb-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  {
                    [1, 1, 1, 1, 11, 1].map((el, key) => (
                      <div className="flex-1 border-b-2 border-gray-200 mb-3" key={key}>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="bg-green-100 text-green-700 font-semibold text-xs px-3 py-1.5 rounded-full">
                            Orginal Article
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-red-600 cursor-pointer transition-colors">
                          Efficacy and safety of camrelizumab in combination with S-1 plus oxaliplatin sequenced by camrelizumab-based maintenance therapy as a first-line treatment for advanced gastric or gastroesophageal junction.
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          Wan-Run Peng, Fei Zhang, Wen-Wen Ma, Jie Da, Han-Qing Yu
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200">
                            PDF Pages
                          </span>
                          <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1.5 rounded-full border border-purple-200">
                            Full Text
                          </span>
                          <span className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full border border-green-200">
                            Peer Review File
                          </span>
                          <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1.5 rounded-full border border-orange-200">
                            Get Permission
                          </span>
                        </div>
                        {/* <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 text-xs transition-all duration-300">
                      Read Full Article →
                    </button> */}
                      </div>
                    ))
                  }
                </div>
              </article>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Journal Highlight */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Journal Highlight</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Journal of Gastrointestinal Oncology is an open-access, international peer-reviewed journal indexed by PubMed/PubMed Central Science Citation Index Expanded (SCIE), with a focus on the diagnosis, prevention and clinical investigations of gastrointestinal cancer, including but not limited to, multimodality therapy, markers, imaging and tumor biology.
                  </p>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-md p-4 border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3">Indexing</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">Web of Science [Science Citation Index Expanded (SCIE)]</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">PubMed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Announcement */}
              <div className="bg-white rounded-md shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-red-700 mr-3"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Announcements
                  </h2>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  {/* <p className="text-gray-500 italic">No Announcements</p> */}
                  {/* 
                  {NewsData &&
                    NewsData?.announcements.map((item, ind) => ( */}
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="font-medium hover:text-red-700 transition">
                        <Link href="/news_announcement">{'This is announcemnet of the year 2025'}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Posted: 15/03/2025
                      </p>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>


              {/* NEWS */}
              <div className="bg-white rounded-md shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-1 bg-red-700 mr-3"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    NEWS
                  </h2>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  {/* <p className="text-gray-500 italic">No Announcements</p> */}
                  {/* 
                  {NewsData &&
                    NewsData?.announcements.map((item, ind) => ( */}
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="font-medium hover:text-red-700 transition">
                        <Link href="/news_announcement">{'This is announcemnet of the year 2025'}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Posted: 15/03/2025
                      </p>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
    </>
  )
}




