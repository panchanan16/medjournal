import IndexingTable from "@/components/admin/table/IndexingTable";
import { _GET } from "@/request/request";

async function IndexCreatePage() {
    const issues = await _GET(`index/readAll`)


    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <IndexingTable indexes={issues}/>
        </div>
    );
}

export default IndexCreatePage