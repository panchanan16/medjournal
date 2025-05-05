'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

function ReviewComponent({ reviewerData }) {
//   const reviewerData = [
//     {
//       title: "Reviewer of the Month (2025)",
//       date: "2025-04-01 17:20:33",
//       year: "2025",
//       content:
//         "In 2025, JGO reviewers continue to make outstanding contributions to the peer review process.",
//     },
//   ];


  return (
    <div className="divide-y divide-gray-200">
      {reviewerData.map((item, index) => (
        <div
          key={index}
          className="p-6 hover:bg-gray-50 transition duration-150"
        >
          <Link href={`/review/${item.revlist_id}`}>
            <h2 className="text-xl md:text-2xl font-bold text-red-800 hover:underline mb-2">
              {item.title}
            </h2>
          </Link>
          <div className="text-sm text-gray-500 mb-3">
            Posted on{" "}
            { new Date().toLocaleDateString("en-US") }
          </div>
          {/* <p className="text-gray-700 mb-3">{item.content}</p> */}
          <div className="text-gray-700 mb-3 text-sm" dangerouslySetInnerHTML={{ __html: item.content }}></div>
          <Link
            href={`/review/${item.revlist_id}`}
            className="inline-flex items-center text-red-700 hover:text-red-900 font-medium"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ReviewComponent;
