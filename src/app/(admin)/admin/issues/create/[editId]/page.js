import IssueForm from "@/components/admin/forms/IssueForm"
import { _GET } from "@/request/request"


async function EditIssuePage({ params }) {
    const { editId } = await params
    const volumes = await _GET('volume/readAll')
    const StandardIssueData = await _GET(`issue/readOne?is_id=${editId}`, 'core')
    const SpecialIssueData = await _GET(`specialissue/readOne?issueId=${editId}`)

    return (
        <IssueForm SelectVolumes={volumes} StandardIssueData={StandardIssueData ? StandardIssueData : null}  SpecialIssueData={SpecialIssueData ? SpecialIssueData : null} />
    )
}

export default EditIssuePage