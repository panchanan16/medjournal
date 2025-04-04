// components/LatestArticles.js
import React from 'react';

const ArticleCard = ({ title, author, publishDate }) => {
  return (
    <div className="shadow-lg rounded-lg p-4 mb-4 hover:shadow-none transition-shadow duration-300">
      <div className="text-sm text-gray-500 mb-2">Review Article</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-red-700 transition-colors">
        {title}
      </h3>
      <div className="text-sm text-gray-600 mb-2">
        {author}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        Published: {publishDate}
      </div>
      <div className="flex space-x-4">
        <a 
          href="#" 
          className="flex items-center text-sm text-red-600 hover:underline"
        >
          <svg 
            className="w-4 h-4 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
            />
          </svg>
          Download
        </a>
        <a 
          href="#" 
          className="flex items-center text-sm text-red-600 hover:underline"
        >
          Read Article 
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const LatestArticles = () => {
  const articles = [
    {
      title: "Improving Sanitation and Reducing Diarrheal Disease in Indian Children: Public Health Strategies",
      author: "Dr. Amit Sachdeva",
      publishDate: "18/03/2025"
    },
    {
      title: "Comprehensive Analysis of Cancer Epidemiology and Care at IGMC Shimla: A Five-Year Review of Trends, Treatment Modalities, and Geographic Disparities in Himachal Pradesh (2018-2022)",
      author: "Dr. Amit Sachdeva",
      publishDate: "18/03/2025"
    },
    {
      title: "Human Metapneumovirus in India (HMPV): Unveiling the Silent Respiratory Threat and Forging a Path to Resilient Healthcare Solutions",
      author: "Mr. Nasim Ahmed Ahmed",
      publishDate: "18/03/2025"
    },
    {
      title: "Safeguarding the Healers: Confronting the Epidemic of Violence and Harassment against Doctors in India",
      author: "Dr. Amit Sachdeva, Nasim Ahmed",
      publishDate: "18/03/2025"
    },
    {
      title: "Eating Disorders and Body Image Disturbances: Exploring the Psychological and Societal Factors Behind Increasing Prevalence",
      author: "Dr. Amit Sachdeva",
      publishDate: "18/03/2025"
    },
    {
      title: "Revitalizing Life: A Comprehensive Exploration of Legal, Cultural, and Technological Pathways to Enhance Organ Donation in India",
      author: "Dr. Amit Sachdeva",
      publishDate: "18/03/2025"
    },
    {
      title: "Addressing the Global Mental Health Crisis: Barriers to Care and Strategies for Improving Access to Psychiatric Services",
      author: "Dr. Amit Sachdeva",
      publishDate: "18/03/2025"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-black pb-2">
        Latest Published Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard 
            key={index}
            title={article.title}
            author={article.author}
            publishDate={article.publishDate}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;

