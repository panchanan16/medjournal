import UserCreateForm from "@/components/admin/forms/AuthCreationForm"
import { _GET } from "@/request/request"

async function EditUserPage({ params }) {
    const { userId } = await params
    const user = await _GET(`auth/readOne?auth_id=${userId}`, 'core')

    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <UserCreateForm initialValues={user ? user : null} userid={userId} />
        </div>
    )
}

export default EditUserPage