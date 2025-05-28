'use client'

import Link from "next/link";

export default function ManuscriptSubmission() {
  const handleSubmit = (processType) => {
    alert(`Redirecting to ${processType} submission...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Manuscript Submission Portal
          </h1>
          <p className="text-lg text-gray-600">
            Choose your preferred submission process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fast Process Section */}
          <div className="bg-red-900 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Fast Process</h2>
            <p className="mb-6 text-red-100">
              You can submit your Manuscript to the following email.
              Please mention the Journal name to which manuscript is
              submitting. Note:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <p className="text-red-100">
                  Immediate acknowledgement of manuscript within 12 hours
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <p className="text-red-100">
                  Acceptance letter after urgent review within 1 day
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <p className="text-red-100">
                  Gallery Proof within 1 day after Payment and
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <p className="text-red-100">
                  Immediate Publication within 1 day after Gallery Proof confirmation by author
                </p>
              </div>
            </div>

            <div className="bg-red-500 rounded-lg p-4 mb-6">
              <p className="text-center font-semibold">
                Email: fastsubmission@farmclin.es

              </p>
            </div>

            <Link href={'/auth/user'}>
              <button
                className="w-full bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Submit Online
              </button>
            </Link>
          </div>

          {/* Normal Process Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Normal Process</h2>
            <p className="mb-6 text-gray-600">
              You can submit your Manuscript to the following email.
              Please mention the Journal name to which manuscript is
              submitting. Note:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <p className="text-gray-700">
                  Acknowledgement of manuscript submission within 24-48 hours;
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <p className="text-gray-700">
                  Acceptance letter after review Process which takes 5-7 days;
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <p className="text-gray-700">
                  Gallery Proof within 7 days after Payment and
                </p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <p className="text-gray-700">
                  Monthly Publication Online and Print
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-300">
              <p className="text-center font-semibold text-gray-800">
                Email: submission@farmcline.es
              </p>
            </div>

            <Link href={'/auth/user'}>
              <button
                className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Submit Online
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}