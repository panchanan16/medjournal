import AnnouncementForm from "@/components/admin/forms/AnnouncemnetForm"
import { _GET } from "@/request/request"


async function AnnounceEditPage({ params }) {
    const { editId } = await params;
    const response = await _GET(`announce/readOne?id=${editId}`)

    return (
        <AnnouncementForm initialValues={response} />
    )
}

export default AnnounceEditPage