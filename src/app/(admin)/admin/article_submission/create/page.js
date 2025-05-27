import CreateArticleSubmissionForm from "@/components/admin/forms/ArticleSubmissionForm"
import { _GET } from "@/request/request"


async function CreateArticleSubmissionPage() {
    const users = await _GET(`auth/readAll`, 'core')

    return (
        <CreateArticleSubmissionForm initialValues={null} users={users ? users : []} />
    )
}

export default CreateArticleSubmissionPage