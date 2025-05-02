import AllArticles from '@/components/admin/AllArticles';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  // Sample data for preview (simplified version)
  const articles = await _GET(`article/readAll`)
  console.log(articles)

  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <AllArticles articles={articles} />
    </div>
  );
}