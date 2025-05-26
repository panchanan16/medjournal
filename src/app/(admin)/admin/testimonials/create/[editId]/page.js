import TestimonialForm from '@/components/admin/forms/testimonialForm'
import { _GET } from '@/request/request'


async function EditTestimonialPage({ params }) {
    const { editId } = await params
    const testiOne = await _GET(`testimonial/readOne?test_id=${editId}`, 'core')
    return (
        <TestimonialForm initialValues={testiOne ? testiOne : null} editId={editId} />
    )
}

export default EditTestimonialPage