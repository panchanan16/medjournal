import VolumeForm from '@/components/admin/forms/volumeForm'
import { _GET } from '@/request/request'

async function EditVolumePage({ params }) {
    const { editId } = await params
    const response = await _GET(`volume/readOne?volume_id=${editId}`)

    return (
        <VolumeForm initialValues={response ? response : null} editId={editId} />
    )
}

export default EditVolumePage