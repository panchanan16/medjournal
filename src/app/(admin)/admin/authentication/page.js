import AuthUserTable from "@/components/admin/table/AuthUserTable"
import { _GET } from "@/request/request"


async function AuthAdminPage() {
    const users = await _GET(`auth/readAll`, 'core')
    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <AuthUserTable Users={users ? users : []} />
        </div>
    )
}

export default AuthAdminPage