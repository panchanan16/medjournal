import AllArticles from '@/components/admin/AllArticles';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  const articles = await _GET(`articleMain/readAll`, 'core')

  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <AllArticles articles={articles ? articles : []} />
    </div>
  );
}