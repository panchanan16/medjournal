import FeatureBlogTable from "@/components/admin/table/FeatureBlogTable";
import { _GET } from "@/request/request";

async function FeatureBlogsPage() {
   const blogs = await _GET(`blog/readAll`, 'core')


    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <FeatureBlogTable  Blogs={blogs ? blogs : []}/>
        </div>
    );
}

export default FeatureBlogsPage