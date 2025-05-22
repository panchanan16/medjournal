import SliderForm from '@/components/admin/forms/SliderForm'
import { _GET } from '@/request/request'


async function EditSliderFormPage({ params }) {
    const { editId } = await params
    const sliders = await _GET(`slider/readOne?slider_id=${editId}`, 'core')

    return (
        <SliderForm initialValues={sliders ? sliders : null} editId={editId}/>
    )
}

export default EditSliderFormPage