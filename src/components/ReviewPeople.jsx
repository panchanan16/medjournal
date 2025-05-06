"use client";

import { useEffect, useState } from "react";

function ReviewPeople({ reviews }) {
  const [activeReviewer, setActiveReviewer] = useState(null);

  function DisplayBiography(revID, month) {
    console.log(revID, month);
    const activeMonth = reviews?.reviewers.filter((el) => el.month == month);
    const ac =
      activeMonth.length &&
      activeMonth[0].names.filter((el) => el.r_id == revID);
    console.log(ac);
    setActiveReviewer(ac);
  }

  return (
    <div className="lg:col-span-9">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-red-900 text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold">{reviews.title}</h1>
          <p className="text-sm mt-2">Posted On {reviews.postedOn}</p>
        </div>

        <div className="p-6">
          <p className="mb-6 text-gray-800"></p>
          <div className="mb-6 text-gray-800" dangerouslySetInnerHTML={{__html: reviews.description }}></div>

          {/* Monthly Reviewers List */}
          <div className="space-y-8">
            {reviews.reviewers &&
              reviews.reviewers.map((month, id) => (
                <div
                  key={id}
                  className="border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <h2 className="text-xl font-semibold text-red-800 mb-4">
                    {month.month}, {`2025`}
                  </h2>
                  <ul className="space-y-2 mb-4">
                    {month.names.map((reviewer, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center"
                      >
                        <button
                          onClick={() =>
                            DisplayBiography(reviewer.r_id, month.month)
                          }
                          className="text-left font-medium text-red-700 hover:text-red-900 hover:underline"
                        >
                          {reviewer.name}
                        </button>
                        <span className="text-gray-600 text-sm md:ml-2">
                          {reviewer.affiliation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {/* Expanded Reviewer Details */}

            {activeReviewer?.length && (
              <div className="mt-6 bg-red-50 p-5 rounded-lg">
                <div
                  dangerouslySetInnerHTML={{
                    __html: activeReviewer[0]?.details,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPeople;
