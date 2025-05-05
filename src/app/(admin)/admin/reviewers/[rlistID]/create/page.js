import AddNewReviewer from "@/components/admin/forms/AddNewReviewer"

function CreateNewPeople({ params }) {
    const { rlistID } = params;

    return (
        <AddNewReviewer ID={rlistID} />
    )
}

export default CreateNewPeople