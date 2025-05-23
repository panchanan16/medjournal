

// import Layout from '../../components/Layout';
// import HomePage from '@/components/HomePage';

// export default async function Home() {
//   const response = await _GET('article/readAll')
//   const journal = await _GET('journal/readAll', 'core')
//   const newsAnnouncement = await _GET(`newsAnnouncement/readAll`, 'core')

import { _GET } from '@/request/request';
import HeroSlider from '@/components/HeroSlider'
import HomeArticleTabs from '@/components/HomeArticleTabs'
import JournalMetrics from '@/components/JournalMetrics'
import NewsSection, { AnnouncementsSection } from '@/components/NewsAnnouncement'
import JournalInfo from '@/components/JournalInfo';


export default async function HomePage() {
  const ArticleLatest = await _GET('article/readAll')
  const newsAnnouncement = await _GET(`newsAnnouncement/readAll`, 'core')
  const sliders = await _GET(`slider/readAll`, 'core')
  const journal = await _GET('journal/readAll', 'core')

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero slider */}
        <HeroSlider SliderImgs={sliders ? sliders : []} HighlightInfo={journal && journal?.journal.length ? journal.journal : null} />

        <JournalMetrics MetricsInfo={journal && journal?.journal.length ? journal.journal : null} />

        {/* Main Content */}
        <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Articles Section */}
            <HomeArticleTabs ArticleLatest={ArticleLatest ? ArticleLatest.articleList : []} />

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Journal Highlight */}
              <JournalInfo Info={journal && journal?.journal.length ? journal.journal : null} IndexInfo={journal && journal?.index.length ? journal.index : null} />

              {/* Announcement */}
              <AnnouncementsSection AnnounceData={newsAnnouncement ? newsAnnouncement.announcements : []} />

              {/* NEWS */}
              <NewsSection NewsData={newsAnnouncement ? newsAnnouncement.news : []} />

            </div>
          </div>
        </main>
      </div>
    </>
  )
}




