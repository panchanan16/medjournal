
import { _GET } from '@/request/request';
import Layout from '../../components/Layout';
import HomePage from '@/components/HomePage';

export default async function Home() {
  const response = await _GET('article/readAll')

  return (
    <Layout>
      <HomePage articles={response ? response?.articleList : []} />
    </Layout>
  );
}


