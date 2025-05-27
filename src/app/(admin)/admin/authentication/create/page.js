import UserCreateForm from "@/components/admin/forms/AuthCreationForm"

function CreateUserPage() {
    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <UserCreateForm initialValues={null} />
        </div>
    )
}

export default CreateUserPage