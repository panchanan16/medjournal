import ReviewerListTable from "@/components/admin/table/ReviewerListTable"
import { _GET } from "@/request/request"

async function AddReviwerListPage({ params }) {
    const { rlistID } = params
    const reviews = await _GET(`reviewer/readAll?rev_id=${rlistID}`)

    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <ReviewerListTable reviewList={reviews} nextpageId={rlistID} />
        </div>
    )
}

export default AddReviwerListPage;
