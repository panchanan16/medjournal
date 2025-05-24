import AllArticles from '@/components/admin/AllArticles';
import AllSubmission from '@/components/admin/AllSubmission';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  const articles = await _GET(`manuscript/readAll`, 'core')

  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <AllSubmission articles={articles ? articles : null} />
    </div>
  );
}