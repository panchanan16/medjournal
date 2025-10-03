import { BASE_URL } from "@/config/api.config";
import Link from "next/link";

const ArticleCard = ({ article, links }) => {
  console.log( 'pdf link',article.pdflink)
  return (
    <div className="mb-8 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
      <h3 className="text-lg font-semibold mb-2 hover:text-red-700">
        <Link href={`/article-read/${article.ariticle_id}/${article.url}`}>
          {article.title}
        </Link>
      </h3>

      <div className="flex flex-wrap gap-2">
        {article.published_date && (
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              Posted on:{" "}
              {new Date(article.published_date).toLocaleDateString("en-US")}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            {article.articleType}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            Pages {article.page_from}-{article.page_to}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Link href={`${BASE_URL}${article.pdflink}`} prefetch={false}>
            <span className="bg-red-100 text-red-800 cursor-default font-semibold text-xs px-2 py-1 rounded">
              PDF
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
