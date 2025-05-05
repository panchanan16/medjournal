import ReviewerTable from "@/components/admin/table/ReviewerTable"
import { _GET } from "@/request/request"

async function AddReviewerPage() {
    const reviews = await _GET(`reviewmain/readAll`)

    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <ReviewerTable reviews={reviews} />
        </div>
    )
}

export default AddReviewerPage
