import Link from 'next/link';



function SpecialIssuePage() {
    const series =
    {
        id: 1,
        title: "Precision Radiation Oncology in GI Cancers",
        date: "2024-11-16 11:39:18",
        editors: [
            { name: "Falk Roeder", affiliation: "Paracelsus Medical University Hospital, Salzburg, Austria" },
            { name: "Thomas Brunner", affiliation: "Medical University of Graz, Graz, Austria" }
        ],
        content: `
        <p>This special series focuses on the latest advancements in precision radiation oncology for gastrointestinal cancers. Recent technological developments have significantly improved our ability to deliver precise radiation doses to tumors while sparing surrounding healthy tissues.</p>
        
        <h2>Topics covered in this series include:</h2>
        <ul>
          <li>Stereotactic body radiation therapy (SBRT) for pancreatic cancer</li>
          <li>Intensity-modulated radiation therapy (IMRT) approaches for rectal cancer</li>
          <li>Particle therapy for hepatocellular carcinoma</li>
          <li>MRI-guided adaptive radiotherapy for GI tumors</li>
          <li>Combined modality approaches integrating radiation with systemic therapies</li>
        </ul>
        
        <p>The series features contributions from leading international experts who provide comprehensive reviews of current evidence and practical clinical guidance. Articles discuss patient selection criteria, treatment planning considerations, expected outcomes, and management of treatment-related toxicities.</p>
        
        <p>We invite readers to explore how these advanced techniques are reshaping the landscape of GI cancer management and improving patient outcomes.</p>
      `,
        articles: [
            { title: "Current Status of Stereotactic Body Radiation Therapy for Pancreatic Cancer", authors: "Schmidt M, et al." },
            { title: "Advances in MRI-guided Radiotherapy for Rectal Cancer", authors: "Johnson K, et al." },
            { title: "Proton Therapy for Hepatocellular Carcinoma: A Systematic Review", authors: "Wang L, et al." },
            { title: "Combined Chemoradiation Strategies for Locally Advanced Esophageal Cancer", authors: "Takahashi N, et al." },
            { title: "Radiation-Induced Liver Disease: Prevention and Management", authors: "Gonzalez A, et al." }
        ]
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-red-800 mb-4 pb-2 border-b border-red-100">Special Series (Published)</h2>
                            <div className="space-y-4">
                                {series.articles.map((article, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                                        <h3 className="font-medium text-red-700">{article.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{article.authors}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                            <span className="text-xs text-gray-500">Posted on 2020-07-21 01:30:16</span>
                                            <Link href="/special/1" className="text-red-600 hover:text-red-800 text-sm font-medium inline-flex items-center">
                                                Read article
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 ml-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h2 className="text-lg font-semibold text-red-800 mb-4">Submit to this Special Series</h2>
                            <p className="text-gray-700 mb-4">
                                We welcome submissions related to the topics covered in this special series.
                                Please review our author guidelines and submission requirements before submitting your manuscript.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/guidelines"
                                    className="bg-white text-red-700 border border-red-700 hover:bg-red-50 font-medium px-4 py-2 rounded transition-colors text-center"
                                >
                                    Author Guidelines
                                </Link>
                                <Link
                                    href="/submit"
                                    className="bg-red-700 text-white hover:bg-red-800 font-medium px-4 py-2 rounded transition-colors text-center"
                                >
                                    Submit Manuscript
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SpecialIssuePage