"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./Volumecard";

function VolumeByArticle({ AllArticles }) {
  const [articleSet, setArticleSet] = useState([]);
  const [filterArticle, setFilterArticle] = useState(articleSet);

  function groupArticlesByType(articles, issue = 1) {
    const grouped = {};
    articles.forEach((article) => {
      const type = article.issue_name;
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(article);
    });

    return Object.entries(grouped).map(([type, items]) => ({
      type,
      items,
      links: ["Full Text", "COI Form", "Get Permission"],
    }));
  }

  function FilterByIssue(issue) {
    setFilterArticle(articleSet.filter((item) => item.type == issue));
  }

  useEffect(() => {
    const articles = groupArticlesByType(
      AllArticles ? AllArticles.articles : []
    );
    setArticleSet(articles);
    setFilterArticle(articles);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Vol {AllArticles && AllArticles.vols[0].volume_name}, year (
            {AllArticles && AllArticles.vols[0].volume_year}): All Issues
            Articles
          </h2>
          {filterArticle &&
            filterArticle.map((head, key) => (
              <div key={key}>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">
                    Issue {head.type}
                  </h3>
                  <div className="border-b border-gray-200 mb-4"></div>
                </div>

                {head?.items.map((art, id) => (
                  <ArticleCard key={id} article={art} links={head.links} />
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
          <div className="bg-red-700 text-white p-4">
            <h3 className="text-lg font-semibold">Issues in this Volume</h3>
          </div>
          <div className="p-4">
            <ul>
              {AllArticles &&
                [...AllArticles.vols] // clone array so we don’t mutate original
                  .sort((a, b) => Number(a.issue_name) - Number(b.issue_name))
                  .map((is, ind) => (
                    <li
                      key={ind}
                      className="text-red-800 hover:underline cursor-pointer"
                    >
                      <span
                        className="cursor-pointer"
                        onClick={() => FilterByIssue(is.issue_name)}
                      >
                        Issue {is.issue_name}
                      </span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumeByArticle;
