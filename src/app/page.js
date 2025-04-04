// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import JournalHeader from '../components/JournalHeader';
import JournalStats from '../components/JournalStats';
import LatestArticles from '@/components/LatestArticle';
import Footer from '@/components/Footer';
import NewsAndAnnouncements from '@/components/NewsAnnouncement';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <Layout>
      {/* <div className="bg-gray-100 min-h-screen">
        <JournalHeader />
        <JournalStats />
        <LatestArticles />
        <NewsAndAnnouncements />
        <Footer />
      </div> */}
      <HomePage />
    </Layout>
  );
}


