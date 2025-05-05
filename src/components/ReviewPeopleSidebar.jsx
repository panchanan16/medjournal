'use client'

function ReviewPeopleSidebar() {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-red-800 text-white p-4">
          <h2 className="text-xl font-semibold">Reviewers</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                Reviewer of the Month (2025)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                Reviewer of the Month (2024)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                Reviewer of the Month (2023)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                Reviewer of the Month (2022)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 bg-red-100 font-medium rounded text-red-800"
              >
                Reviewer of the Month (2020-21)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                The reviewers of JGO 2020
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 hover:bg-red-50 rounded transition-colors text-red-700 hover:text-red-900"
              >
                The reviewers of JGO 2019
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewPeopleSidebar;
