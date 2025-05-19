
import { _GET } from '@/request/request';
import Layout from '../../components/Layout';
import HomePage from '@/components/HomePage';

export default async function Home() {
  const response = await _GET('article/readAll')
  const journal = await _GET('journal/readAll', 'core')
  const newsAnnouncement = await _GET(`newsAnnouncement/readAll`, 'core')

  return (
    <Layout>
      <HomePage articles={response ? response?.articleList : []} Journal={journal.length ? journal[0] : {}} NewsAnnouncement={newsAnnouncement} />
    </Layout>
  );
}


