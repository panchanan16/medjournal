import BlogForm from '@/components/admin/forms/BlogForm'
import { _GET } from '@/request/request'


async function EditBlogFormPage({ params }) {
    const { editId } = await params;
    const blog = await _GET(`blog/readOne?blog_id=${editId}`, 'core')
    return (
        <BlogForm initialValues={blog ? blog : null} />
    )
}

export default EditBlogFormPage