import NewsForm from "@/components/admin/forms/NewsForm"
import { _GET } from "@/request/request";


async function EditNewsPage({ params }) {
    const { editId } = await params;
    const response = await _GET(`news/readOne?news_id=${editId}`)

    return (
        <NewsForm initialValues={response} />
    )
}

export default EditNewsPage