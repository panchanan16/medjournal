import BlogsSection from "@/components/BlogSection"
import { _GET } from "@/request/request"

async function FeaturedBlogsPage() {
    const blogs = await _GET(`blog/readAll`, 'core')

    return (
        <section className='container mx-auto px-6 bg-white shadow-sm rounded-lg p-8 my-10'>
            <BlogsSection Blogs={blogs} />
        </section>
    )
}

export default FeaturedBlogsPage