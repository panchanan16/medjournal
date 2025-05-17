import Link from "next/link";

const ArticleCard = ({ article, links }) => {
  return (
    <div className="mb-8 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
      <h3 className="text-lg font-semibold mb-2 hover:text-red-700">
        <Link href={`/article-read/${article.ariticle_id}`}>{article.title}</Link>
      </h3>
      <p className="text-sm text-gray-600 mb-3">{article.authors}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
          {article.pageInfo}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => {
          const isButton = link === "Get Permission";
          return isButton ? (
            <button
              key={index}
              className="bg-red-700 text-white text-xs px-3 py-1 rounded hover:bg-red-800 transition flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              {link}
            </button>
          ) : (
            <a
              key={index}
              href="#"
              className={`text-xs px-3 py-1 rounded transition ${
                link === "Open Access"
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleCard;
