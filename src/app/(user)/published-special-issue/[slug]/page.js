import { _GET } from "@/request/request";
import Link from "next/link";

export default async function SeriesDetail({ params }) {
    const { slug } = await params
    const specialIssueMain = await _GET(`specialissuefull/readOne?sp_issue_id=${slug}`, 'core')
    console.log(specialIssueMain)

    if (!specialIssueMain) {
        return (
            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-red-800">Series not found</h1>
                    <p className="mt-4">The requested series could not be found.</p>
                    <Link href="/" className="mt-6 inline-block text-red-600 hover:text-red-800">
                        Return to home page
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="flex-grow container mx-auto px-4 py-8 w-full">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-red-900 to-red-700 px-6 py-4">
                        <Link href="/published-special-issue" className="text-red-200 hover:text-white mb-2 inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Special Series
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">{specialIssueMain?.special_issue_title}</h1>
                        <p className="text-red-100 mt-2">Posted on {specialIssueMain?.publish_date}</p>
                    </div>

                    <div className="p-3 md:p-6">
                        <div className="mb-6 bg-red-50 p-4 rounded-lg border border-red-100">
                            <h2 className="text-lg font-semibold text-red-800 mb-2">Guest Editors</h2>
                            <img
                                src="/special.jpeg"

                            />
                            {specialIssueMain?.authors?.map((editor, index) => (
                                <div key={index} className="last:mb-0 mt-5">
                                    <span className="font-semibold">{editor.name}</span>
                                    <span className="text-gray-600"> ({editor.afflication})</span>
                                </div>
                            ))}
                        </div>

                        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: specialIssueMain?.special_issue_about }} />

                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-red-800 mb-4 pb-2 border-b border-red-100">Articles in this Series</h2>
                            <div className="space-y-4">
                                {specialIssueMain?.articles?.map((article, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                                        <h3 className="font-medium text-red-700">{article.title}</h3>
                                        {/* <p className="text-gray-600 text-sm mt-1">{article.authors}</p> */}
                                        <div className="mt-2 flex justify-between items-center">
                                            <div className="flex gap-2">
                                                <a
                                                    href="#"
                                                    className={`text-xs px-3 py-1 rounded transition ${3 === "Open Access"
                                                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {`Full text`}
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`text-xs px-3 py-1 rounded transition ${3 === "Open Access"
                                                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {`Get PDF`}
                                                </a>
                                            </div>
                                            <Link href={`/article-read/${article.ariticle_id}`} className="text-red-600 hover:text-red-800 text-sm font-medium inline-flex items-center">
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
    );
}


