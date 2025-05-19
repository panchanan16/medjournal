import AnnounceTable from '@/components/admin/table/AnnounceTable';
import { _GET } from '@/request/request';

async function AnnouncePage() {
    const announcements = await _GET(`announce/readAll`)


    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <AnnounceTable Announcement={announcements} />
        </div>
    );
}

export default AnnouncePage