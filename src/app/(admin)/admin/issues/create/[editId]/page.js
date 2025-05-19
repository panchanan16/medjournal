import IssueForm from "@/components/admin/forms/IssueForm"
import { _GET } from "@/request/request"


async function EditIssuePage() {
    const volumes = await _GET('volume/readAll')
    const resposne = await _GET(``)
    
    return (
        <IssueForm SelectVolumes={volumes} />
    )
}

export default EditIssuePage