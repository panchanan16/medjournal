import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsAnnouncementsSection from "./NewsAnnouncement";
import HeroSection from "./HeroSection";
import JournalInfo from "./JournalInfo";
import JournalMetrics from "./JournalMetrics";
import ArticlesSection from "./ArticlesSection";

export default function HomePage({ articles, Journal }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Medical Letter - Journal of Medical Science</title>
        <meta
          name="description"
          content="A continuous magazine dedicated to publishing cutting-edge research, expert opinions, and analytical views on current global health issues."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection HeroData={Journal} />

        {/* Journal Info */}
        <JournalInfo Info={Journal} />

        {/* Journal Metrics */}
        <JournalMetrics Metrics={Journal} />

        {/* Latest Artcles */}
        {/* <LatestArticles /> */}
        <ArticlesSection articleList={articles} />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Contribute Your Research?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our community of medical researchers and healthcare
              professionals advancing global health knowledge through impactful
              publications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/submit"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition flex items-center"
              >
                Submit Your Manuscript
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/authors/guidelines"
                className="bg-transparent hover:bg-red-800 text-white border border-white font-medium px-6 py-3 rounded-lg transition"
              >
                View Submission Guidelines
              </Link>
            </div>
          </div>
        </section>
        <NewsAnnouncementsSection />
      </main>
    </div>
  );
}
