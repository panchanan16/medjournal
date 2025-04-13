
import Layout from '../../components/Layout';
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


