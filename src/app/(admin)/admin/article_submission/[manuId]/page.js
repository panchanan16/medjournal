import CreateArticleSubmissionForm from "@/components/admin/forms/ArticleSubmissionForm"
import { _GET } from "@/request/request"


async function EditArticleSubmissionPage({ params }) {
    const { manuId } = await params
    const manuscript = await _GET(`manuscript/readOne?manu_id=${manuId}`, 'core')
     const users = await _GET(`auth/readAll`, 'core')

    return (
        <CreateArticleSubmissionForm editId={manuId} initialValues={manuscript ? manuscript : null} users={users ? users : []} />
    )
}

export default EditArticleSubmissionPage