import PolicyForm from "@/components/admin/forms/PolicyForm"
import { _GET } from "@/request/request"


async function CreatePolicyPage({ params }) {
    const {editId} = params
    const response = await _GET(`policy/readOne?pol_id=${editId}`)

    return (
        <PolicyForm initialValues={response ? response : null} />
    )
}

export default CreatePolicyPage