import RedirectUnAuthUser from '@/components/authuser/RedirectUnAuthUser';
import { _GET } from '@/request/request';
import { Download, ExternalLink, Eye, FileText, Calendar, Tag, User, Globe, CheckCircle, CreditCard } from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function UserArticleDetailsPage({ params }) {
    const cookieStore = await cookies()
    const user = cookieStore.get('user')

    if (!user) {
        return redirect('/login')
    }
    const { articleId } = await params
    const manuscript = await _GET(`manuscript/readOne?manu_id=${articleId}`, 'core')

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <RedirectUnAuthUser />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Article Information Card */}
                        <div className="bg-white rounded-sm shadow-lg border border-blue-100 overflow-hidden">
                            <div className="bg-indigo-600 px-6 py-4">
                                <h2 className="text-xl font-semibold text-white flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Article Information
                                </h2>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Title */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Title</label>
                                    <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200 transition-colors">
                                        <p className="text-lg font-semibold text-gray-900">{manuscript && manuscript.manuscript_title}</p>
                                    </div>
                                </div>

                                {/* Abstract */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Abstract</label>
                                    <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200 transition-colors">
                                        <p className="text-gray-800">{manuscript && manuscript.abstract}</p>
                                    </div>
                                </div>

                                {/* Keywords */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
                                        <Tag className="w-4 h-4 mr-1" />
                                        Keywords
                                    </label>
                                    <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200 transition-colors">
                                        <div className="flex flex-wrap gap-2">
                                            {manuscript && manuscript.keywords.split(';').map((keyword, index) => (
                                                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Editor Comment */}
                                <div className="group">
                                    <label className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
                                        <User className="w-4 h-4 mr-1" />
                                        Editor Comment
                                    </label>
                                    <div className="mt-2 p-3 bg-amber-50 rounded-lg border border-amber-200 transition-colors">
                                        <p className="text-gray-800">{manuscript && manuscript.editorial_comment && manuscript.editorial_comment !== 'null' ? manuscript.editorial_comment : "No comment added yet."}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article File */}
                        <div className="bg-white rounded-sm shadow-lg border border-blue-100 overflow-hidden">
                            <div className="bg-indigo-600 px-6 py-4">
                                <h2 className="text-xl font-semibold text-white flex items-center">
                                    <Download className="w-5 h-5 mr-2" />
                                    Article File
                                </h2>
                            </div>
                            <div className="p-6">
                                <button className="w-full sm:w-auto inline-flex items-center justify-center px-3 py-3 border border-transparent font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform hover:scale-105 transition-all duration-200 text-sm">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Your Article
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Status Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {/* Payment Status */}
                            <div className="bg-white rounded-sm shadow-md border border-green-100 overflow-hidden">
                                <div className="bg-green-500 px-4 py-3">
                                    <h3 className="font-semibold text-white flex items-center">
                                        <CreditCard className="w-4 h-4 mr-2" />
                                        Payment Status
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-800">
                                        {manuscript && manuscript.pay_status}
                                    </span>
                                </div>
                            </div>

                            {/* Article Status */}
                            <div className="bg-white rounded-sm shadow-md border border-blue-100 overflow-hidden">
                                <div className="bg-red-700 px-4 py-3">
                                    <h3 className="font-semibold text-white flex items-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Article Status
                                    </h3>
                                </div>
                                <div className="p-4">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                                        {manuscript && manuscript.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Submission Details */}
                        <div className="bg-white rounded-sm shadow-md border border-blue-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3">
                                <h3 className="font-semibold text-white flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Submission Details
                                </h3>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-500">Submitted On</span>
                                    <span className="text-sm font-semibold text-gray-900">{manuscript && new Date(manuscript.submitted_on).toLocaleDateString('en-US')}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <span className="text-sm font-medium text-gray-500">Submission ID</span>
                                    <p className="text-sm font-mono text-gray-900 mt-1">{manuscript.MRN_number}</p>
                                </div>
                            </div>
                        </div>

                        {/* Published Link */}
                        <div className="bg-white rounded-sm shadow-md border border-green-100 overflow-hidden">
                            <div className="bg-teal-600 px-4 py-3">
                                <h3 className="font-semibold text-white flex items-center">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Published Link
                                </h3>
                            </div>
                            <div className="p-4">
                                {manuscript && manuscript.published_link && manuscript.published_link !== 'null' ? (<a
                                    href={manuscript.published_link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm break-all hover:underline transition-colors"
                                >
                                    {manuscript.published_link}
                                    <ExternalLink className="w-4 h-4 ml-1 flex-shrink-0" />
                                </a>) : (<span className='text-gray-500'>Not Avaibale Yet!</span>)}

                            </div>
                        </div>

                        {/* Quick Actions */}
                        {/* <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-4 py-3">
                <h3 className="font-semibold text-white">Quick Actions</h3>
              </div>
              <div className="p-4 space-y-3">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  View Article
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                  Edit Details
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-red-300 text-sm font-medium rounded-lg text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                  Request Changes
                </button>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}