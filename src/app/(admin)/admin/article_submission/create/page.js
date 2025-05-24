import CreateArticleSubmissionForm from "@/components/admin/forms/ArticleSubmissionForm"
import { _GET } from "@/request/request"


async function CreateArticleSubmissionPage() { 
    return (
        <CreateArticleSubmissionForm initialValues={null} />
    )
}

export default CreateArticleSubmissionPage