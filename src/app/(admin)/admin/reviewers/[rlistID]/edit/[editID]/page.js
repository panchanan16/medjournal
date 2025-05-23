import AddNewReviewer from "@/components/admin/forms/AddNewReviewer";
import { _GET } from "@/request/request";

async function EditReviewerMan({ params }) {
    const { rlistID, editID } = await params;
    const man = await _GET(`reviewer/readOne?r_id=${editID}`)

    return (
        <AddNewReviewer ID={rlistID} initialValues={man} />
    )
}

export default EditReviewerMan