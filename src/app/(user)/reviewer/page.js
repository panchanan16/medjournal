'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ReviewersPage() {
    const [activeReviewer, setActiveReviewer] = useState(null);
    const [reviews, setReviews] = useState([]);

    // Simulating fetching data
    useEffect(() => {
        // In a real application, this would be an API call
        const dummyData = {
            title: "Reviewer of the Month (2020-21)",
            postedOn: "2021-04-06 15:19:00",
            description: `Over the years, many JGO reviewers have made outstanding contributions to the peer review process. They demonstrated professional effort and enthusiasm in their reviews and provided comments that genuinely help the authors to enhance their work.`,
            highlightText: `Hereby, we would like to highlight some of our outstanding reviewers, with a brief interview of their thoughts and insights as a reviewer. Allow us to express our heartfelt gratitude for their tremendous effort and valuable contributions to the scientific process.`,
            reviewers: [
                {
                    id: 1,
                    month: "December, 2020",
                    names: [
                        { name: "Samuel M Miller", affiliation: "Yale University, United States" },
                        { name: "Erin L. Van Blarigan", affiliation: "University of California, United States" }
                    ],
                    details: `
            <div class="reviewer-details">
              <h3>Samuel M Miller</h3>
              <div class="profile-content">
                <div class="profile-image">
                  <img src="/samual.jpeg" alt="Samuel M Miller" />
                </div>
                <div class="profile-text">
                  <p>Samuel Miller, MD is a general surgery resident at Yale University and currently a fellow in the National Clinician Scholars Program, also at Yale, New Haven, the United States. He earned his undergraduate degree in Psychology from Brown University, and his Doctor of Medicine from the Warren Alpert Medical School of Brown University. Dr. Miller's current work focuses on the informed consent process in older surgical patients as well as preoperative assessment tools that can predict surgical outcomes in older adults.</p>
                 
                  <p>He also believes that being a reviewer is a privilege as reviewers are given the opportunity to guide the advancement of research and science. By providing detailed and constructive feedback, reviewers can offer researchers a framework to improve scientific methods, study designs, and patient care.</p>
                  <p>To Dr. Miller, a constructive review is one that provides critical feedback with recommendations for improvement while maintaining respect for the effort put forth by the authors. On the other hand, a destructive review offers criticism without direction and leaves the authors discouraged without actionable items.</p>
                  <p>In Dr. Miller's opinion, it is crucial for authors to complete Conflict of Interest (COI) forms recommended by International Committee of Medical Journal Editors (ICMJE). "COI declaration is important. Whether we like it or not, bias is present in our everyday lives. It is important to recognize all potential biases when we can, and to acknowledge that unconscious bias may exist in all of us."</p>
                  <p class="author">(By Vicky Wong, Brad Li, Eunice X. Xu)</p>
                </div>
              </div>
            </div>
          `
                },
                {
                    id: 2,
                    month: "November, 2020",
                    names: [
                        { name: "Erin L. Van Blarigan", affiliation: "University of California, United States" }
                    ],
                    details: `
            <div class="reviewer-details">
              <h3>Erin L. Van Blarigan</h3>
              <div class="profile-content">
                <div class="profile-image">
                  <img src="erin.jpeg" />
                </div>
                <div class="profile-text">
                  <p>Erin Van Blarigan, ScD is an Associate Professor at Department of Epidemiology and Biostatistics, University of California, San Francisco, California, the United States. Currently, she works as a nutritional epidemiologist and her research focuses on the relation between lifestyle factors, including diet and physical activity, and cancer mortality and mortality. Her goal is to provide evidence for lifestyle recommendations to improve cancer survivorship outcomes.</p>
                  <p>Dr. Van Blarigan earned her doctor of science in Epidemiology and Nutrition from the Harvard School of Public Health. Her doctoral dissertation was titled "Diet and physical activity in relation to prostate cancer progression and survival" and her thesis committee included Drs. Meir Stampfer, Edward Giovannucci, and June Chan. Dr. Van Blarigan also completed a postdoctoral scholarship at UCSF where she participated in the NIH Training Program in Molecular and Genetic Epidemiology of Cancer.</p>
                  <p>Dr. Van Blarigan chooses to review for the Journal of Gastrointestinal Oncology because she is interested in colorectal cancer epidemiology and survivorship. However, there are still some challenges that a reviewer might face during the review process.</p>
                  <p class="author">(By Vicky Wong, Brad Li, Eunice X. Xu)</p>
                </div>
              </div>
            </div>
          `
                },
                // Add more reviewers as needed
            ]
        };
        setReviews(dummyData);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <style jsx global>{`
          .reviewer-details h3 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #7f1d1d;
          }
          
          .profile-content {
            display: flex;
            flex-direction: column;
          }
          
          @media (min-width: 768px) {
            .profile-content {
              flex-direction: row;
              gap: 2rem;
            }
          }
          
          .profile-image {
            flex-shrink: 0;
            margin-bottom: 1rem;
          }
          
          @media (min-width: 768px) {
            .profile-image {
              margin-bottom: 0;
            }
          }
          
          .profile-image img {
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .profile-text p {
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          
          .author {
            font-style: italic;
            text-align: right;
            color: #6b7280;
            margin-top: 1.5rem;
          }
        `}</style>
            <main className="container mx-auto px-4 py-8">
                {reviews && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-9">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="bg-red-900 text-white p-6">
                                    <h1 className="text-2xl md:text-3xl font-bold">{reviews.title}</h1>
                                    <p className="text-sm mt-2">Posted On {reviews.postedOn}</p>
                                </div>

                                <div className="p-6">
                                    <p className="mb-6 text-gray-800">{reviews.description}</p>
                                    <p className="mb-8 text-gray-800 border-l-4 border-red-700 pl-4 italic">{reviews.highlightText}</p>

                                    {/* Monthly Reviewers List */}
                                    <div className="space-y-8">
                                        {reviews.reviewers && reviews.reviewers.map((month) => (
                                            <div key={month.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                                <h2 className="text-xl font-semibold text-red-800 mb-4">{month.month}</h2>
                                                <ul className="space-y-2 mb-4">
                                                    {month.names.map((reviewer, idx) => (
                                                        <li key={idx} className="flex flex-col md:flex-row md:items-center">
                                                            <button
                                                                onClick={() => setActiveReviewer(month.id)}
                                                                className="text-left font-medium text-red-700 hover:text-red-900 hover:underline"
                                                            >
                                                                {reviewer.name}
                                                            </button>
                                                            <span className="text-gray-600 text-sm md:ml-2">{reviewer.affiliation}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Expanded Reviewer Details */}
                                                {activeReviewer === month.id && (
                                                    <div className="mt-6 bg-red-50 p-5 rounded-lg">
                                                        <div dangerouslySetInnerHTML={{ __html: month.details }} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="bg-red-800 text-white p-4">
                                    <h2 className="text-xl font-semibold">Reviewers</h2>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                Reviewer of the Month (2025)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                Reviewer of the Month (2024)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                Reviewer of the Month (2023)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                Reviewer of the Month (2022)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 bg-red-100 font-medium rounded text-red-800">
                                                Reviewer of the Month (2020-21)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                The reviewers of JGO 2020
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900">
                                                The reviewers of JGO 2019
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}