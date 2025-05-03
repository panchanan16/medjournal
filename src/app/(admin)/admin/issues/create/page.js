import IssueForm from "@/components/admin/forms/IssueForm"
import { _GET } from "@/request/request"


async function CreateIssuePage() {
    const volumes = await _GET('volume/readAll')
    
    return (
        <IssueForm SelectVolumes={volumes} />
    )
}

export default CreateIssuePage