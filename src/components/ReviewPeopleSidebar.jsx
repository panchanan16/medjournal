"use client";

import Link from "next/link";

function ReviewPeopleSidebar({ List }) {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-red-800 text-white p-4">
          <h2 className="text-xl font-semibold">Reviewers</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {List?.length &&
              List.map((rev, ind) => (
                <li key={ind}>
                  <Link
                    href={`/review/${rev.revlist_id}`}
                    className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
                  >
                    {rev.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewPeopleSidebar;
