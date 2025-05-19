import NewsTable from '@/components/admin/table/NewsTable';
import { _GET } from '@/request/request';

async function NewsPage() {
    const Newss = await _GET(`news/readAll`)


    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <NewsTable Newss={Newss} />
        </div>
    );
}

export default NewsPage