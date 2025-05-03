import IssueTable from '@/components/admin/issueTable';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  // Sample data for preview (simplified version)
  const issues = await _GET(`issue/readAll`)
  console.log(issues)

  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <IssueTable issues={issues} />
    </div>
  );
}