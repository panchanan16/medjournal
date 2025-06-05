'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Share2 } from 'lucide-react';
import StyleSheet from '@/components/StyleSheet';

export default function ArticlePage() {
  // For demo purposes, using hardcoded data
  // In a real app, this would come from the API based on articleId
  const articleData = {
    id: '97011',
    title: 'Development of a prognostic risk model for colorectal cancer and association of the prognostic model with cancer stem cell and immune cell infiltration',
    abstract: 'hfhoufhuorhfof',
    authors: [
      { name: 'Jian Zhang', superscript: '1', corresponding: true, email: 'zjbg163163@163.com' },
      { name: 'Peter C. Ambe', superscript: '2' },
      { name: 'Aasma Shaukat', superscript: '3' }
    ],
    contributions: [
      '(I) Conception and design: J Zhang',
      '(II) Administrative support: J Zhang',
      '(III) Provision of study materials or patients: J Zhang',
      '(IV) Collection and assembly of data: J Zhang, PC Ambe',
      '(V) Data analysis and interpretation: J Zhang, A Shaukat',
      '(VI) Manuscript writing: All authors',
      '(VII) Final approval of manuscript: All authors'
    ],
    sections: [
      {
        title: 'Background',
        content: 'The development of a prognostic model for patients with colorectal cancer (CRC) can facilitate the assessment of patient survival and the effectiveness of clinical treatments. A reasonable prognostic model can provide a basis for individualized treatment, prognostic risk stratification, and subsequent therapy for CRC patients. The aim of our study was to construct a prognostic model for patients with CRC using sequencing data derived from The Cancer Genome Atlas (TCGA) database.'
      },
      {
        title: 'Methods',
        content: 'Sequencing data of paracancerous tissues (n=51) and CRC samples (n=647) were downloaded from the TCGA database. Least absolute shrinkage and selection operator (LASSO) and Cox regression analyses were employed to identify prognostic factors. A restricted cubic spline (RCS) model was used to assess the nonlinear relationship between risk score and poor overall survival (OS). The Genomics of Drug Sensitivity in Cancer (GDSC) database was accessed to evaluate the correlation between the prognostic model'
      },
      {
        title: 'Results',
        content: 'Our findings revealed that six genes, including Niemann-Pick C1-like 1 (NPC1L1) [hazard ratio (HR) =1.53; 95% confidence interval (CI): 1.08–2.17; P=0.02], glucagon-like peptide 2 receptor (GLP2R) (HR =0.68; 95% CI: 0.48–0.97; P=0.04), solute carrier family 8 member A3 (SLC8A3) (HR =0.67; 95% CI: 0.47–0.96; P=0.03), alpha-1-microglobulin/bikunin precursor (AMBP) (HR =0.64; 95% CI: 0.45–0.91; P=0.01), single-pass membrane protein with coiled-coil domains 2 (SMCO2) (HR =0.68; 95% CI: 0.48–0.97; P=0.03), and tetatricopeptide repeat domain 16 (TTC16) (HR =1.55; 95% CI: 1.09–2.20; P=0.02) function as independent prognostic factors for CRC.'
      }
    ],
    metrics: {
      views: 298,
      downloads: 56
    },
  };

  const [activeTab, setActiveTab] = useState('article');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
          {/* Article Content - uses semantic HTML for article content */}
          <article className="lg:w-3/4 bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{articleData.title}</h1>

            {/* Contributions */}
            <div className="mb-8 text-sm text-gray-600">
              <strong>Authors:</strong>
              <ul className="list-none">
                {articleData.contributions.map((contrib, index) => (
                  <li key={index}>{contrib}</li>
                ))}
              </ul>
            </div>

            {/* Article Tabs */}
            <div className="mb-6 border-b">
              <div className="flex flex-wrap">
                <button
                  className={`px-4 py-2 font-medium text-red-700 border-b-2 border-red-700`}
                >
                  Article
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              {articleData.sections.map((section, index) => (
                <section key={index} className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{section.title}:</h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4 sticky top-5 self-start h-fit">
            {/* Article Options Card */}
            <div className="bg-white rounded-lg shadow-md p-5 mb-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Article Options</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                    <DocumentTextIcon className="h-4 w-4" />
                    PDF
                  </Link>
                  <span className="text-gray-500">{articleData.metrics.pdf} views</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                    <DocumentTextIcon className="h-4 w-4" />
                    Full Text
                  </Link>
                  <span className="text-gray-500">{articleData.metrics.fullText} views</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                    <ClipboardCheckIcon className="h-4 w-4" />
                    Reporting Checklist
                  </Link>
                  <span className="text-gray-500">{articleData.metrics.reportingChecklist} views</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                    <DocumentSearchIcon className="h-4 w-4" />
                    Peer Review File
                  </Link>
                  <span className="text-gray-500">{articleData.metrics.peerReviewFile} views</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4 w-4" />
                    COI Form
                  </Link>
                  <span className="text-gray-500">{articleData.metrics.coiForm} views</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <Link href="#" className="flex items-center text-sm text-red-700 hover:underline">
                  <LockOpenIcon className="h-4 w-4 mr-1" />
                  Get Permission
                </Link>
              </div>
            </div>


            {/* Share Card */}
            <div className="bg-white rounded-lg shadow-md p-5 mb-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Share</h3>
              <div className="space-y-2">
                <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share on Facebook
                </Link>
                <Link href="#" className="text-red-700 hover:underline flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share on Twitter
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <StyleSheet />
    </div>
  );
}

const DocumentTextIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ClipboardCheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const DocumentSearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
  </svg>
);

const ExclamationCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LockOpenIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

