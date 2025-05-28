import { _GET } from '@/request/request';
import Link from 'next/link';

async function CurrentSpecialIssuePage() {
    const publishedIssues = await _GET('specialissue/readAll?isPublished=0')

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-red-800 mb-4 pb-2 border-b border-red-100">Special Series (Upcoming)</h2>
                            <div className="space-y-4">
                                {publishedIssues && publishedIssues.map((issue, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                                        <Link href={`/upcoming_special_issue/${issue.sp_issue_id}`}>
                                            <h3 className="font-medium text-red-700">{issue.special_issue_title}</h3>
                                        </Link>

                                        <div className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: issue.special_issue_about.split('</p>')[0] }}></div>
                                        <div className="mt-2 flex justify-between items-center">
                                            <span className="text-xs text-gray-500">published on {issue.publish_date}</span>
                                            <Link href={`/upcoming_special_issue/${issue.sp_issue_id}`} className="text-red-600 hover:text-red-800 text-sm font-medium inline-flex items-center">
                                                Read Articles
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
                                    href="/author-instruction"
                                    className="bg-white text-red-700 border border-red-700 hover:bg-red-50 font-medium px-4 py-2 rounded transition-colors text-center"
                                >
                                    Author Guidelines
                                </Link>
                                <Link
                                    href="/auth/user"
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

export default CurrentSpecialIssuePage;