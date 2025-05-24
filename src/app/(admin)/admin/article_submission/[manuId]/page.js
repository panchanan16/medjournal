import CreateArticleSubmissionForm from "@/components/admin/forms/ArticleSubmissionForm"
import { _GET } from "@/request/request"


async function EditArticleSubmissionPage({ params }) {
    const { manuId } = await params
    const manuscript = await _GET(`manuscript/readOne?manu_id=${manuId}`, 'core')

    return (
        <CreateArticleSubmissionForm editId={manuId} initialValues={manuscript ? manuscript : null} />
    )
}

export default EditArticleSubmissionPage