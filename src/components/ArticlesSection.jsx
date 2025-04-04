"use client";
import { useState } from "react";

// Mock data for the tabs
const articles = {
  latest: [
    {
      type: "Review Article",
      title:
        "Improving Sanitation and Reducing Diarrheal Disease in Indian Children: Public Health Strategies",
      author: "Dr. Amit Sachdeva",
      publishedDate: "18/03/2025",
    },
    {
      type: "Review Article",
      title:
        "Comprehensive Analysis of Cancer Epidemiology and Care at IGMC Shimla: A Five-Year Review of Trends, Treatment Modalities, and Geographic Disparities in Himachal Pradesh (2018-2022)",
      author: "Dr. Amit Sachdeva",
      publishedDate: "18/03/2025",
    },
    {
      type: "Review Article",
      title:
        "Human Metapneumovirus in India (HMPV) : Unveiling the Silent Respiratory Threat and Forging a Path to Resilient Healthcare Solutions",
      author: "Mr. Nasim Ahmed Ahmed",
      publishedDate: "18/03/2025",
    },
    {
      type: "Review Article",
      title:
        "Safeguarding the Healers: Confronting the Epidemic of Violence and Harassment against Doctors in India",
      author: "Dr. Amit Sachdeva, Nasim Ahmed",
      publishedDate: "18/03/2025",
    },
  ],
  mostRead: [
    {
      type: "Research Article",
      title:
        "Telemedicine Adoption in Rural India: Challenges and Opportunities in the Post-Pandemic Era",
      author: "Dr. Priya Sharma",
      publishedDate: "15/03/2025",
    },
    {
      type: "Case Study",
      title:
        "Novel Approach to Treating Antibiotic-Resistant Tuberculosis: A Mumbai Hospital Experience",
      author: "Dr. Rajesh Patel",
      publishedDate: "12/03/2025",
    },
    {
      type: "Review Article",
      title:
        "Addressing Healthcare Disparities Among Tribal Populations in Central India",
      author: "Dr. Meera Reddy",
      publishedDate: "10/03/2025",
    },
    {
      type: "Research Article",
      title: "Impact of Climate Change on Vector-Borne Diseases in South Asia",
      author: "Dr. Vikram Singh",
      publishedDate: "05/03/2025",
    },
  ],
  nihFunded: [
    {
      type: "Research Article",
      title:
        "Gene Therapy Approaches for Thalassemia Treatment: NIH-India Collaborative Study",
      author: "Dr. Anand Verma",
      publishedDate: "16/03/2025",
    },
    {
      type: "Clinical Trial",
      title:
        "Effectiveness of Novel Malaria Vaccine in Endemic Regions: Phase III Results",
      author: "Dr. Sunita Desai",
      publishedDate: "11/03/2025",
    },
    {
      type: "Research Article",
      title:
        "Neurological Manifestations of Post-COVID Syndrome: A Longitudinal Study",
      author: "Dr. Rahul Mehta",
      publishedDate: "08/03/2025",
    },
    {
      type: "Review Article",
      title:
        "Advances in Genomic Research for Diabetes Prevention in South Asian Populations",
      author: "Dr. Leela Kumar",
      publishedDate: "02/03/2025",
    },
  ],
};

const ArticleCard = ({ title, author, publishDate }) => {
  return (
    <div className="shadow-lg rounded-lg p-4 mb-4 hover:shadow-none transition-shadow duration-300">
      <div className="text-sm text-gray-500 mb-2">Review Article</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-red-700 transition-colors">
        {title}
      </h3>
      <div className="text-sm text-gray-600 mb-2">{author}</div>
      <div className="text-sm text-gray-500 mb-4">Published: {publishDate}</div>
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

function ArticlesSection() {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex border-b mb-6">
        <button
          className={`px-6 py-2 text-sm md:text-lg min-w-fit font-semibold ${
            activeTab === "latest"
              ? "text-red-800 border-b-2 border-red-800"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("latest")}
        >
          Latest Articles
        </button>
        <button
          className={`px-6 py-2 text-sm md:text-lg min-w-fit font-semibold ${
            activeTab === "mostRead"
              ? "text-red-800 border-b-2 border-red-800"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("mostRead")}
        >
          Most Read
        </button>
        <button
          className={`px-6 py-2 text-sm md:text-lg min-w-fit font-semibold ${
            activeTab === "nihFunded"
              ? "text-red-800 border-b-2 border-red-800"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("nihFunded")}
        >
          NIH Funded
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles[activeTab].map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            author={article.author}
            publishDate={article.publishedDate}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticlesSection;
