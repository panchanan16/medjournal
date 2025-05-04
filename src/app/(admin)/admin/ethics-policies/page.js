import PolicyTable from '@/components/admin/PolicyTable';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  const issues = await _GET(`policy/readAll`)
  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <PolicyTable issues={issues} />
    </div>
  );
}