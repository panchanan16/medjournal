import VolumeTable from '@/components/admin/VolumeTable';
import { _GET } from '@/request/request';

export default async function ArticlesPreview() {
  // Sample data for preview (simplified version)
  const volumes = await _GET(`volume/readAll`)
  console.log(volumes)

  
  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
        <VolumeTable volumes={volumes} />
    </div>
  );
}