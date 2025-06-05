import BlogFull from "@/components/BlogFull";
import { _GET } from "@/request/request";
import { redirect } from "next/navigation";


async function BlogDetailPage({ params }) {
    const { blgId, blogUrl } = await params;
    const blog = await _GET(`blog/readOne?blog_id=${blgId}`, 'core')

    if (blog.blog_url == blogUrl) {
        return <BlogFull FullBlog={blog ? blog : null} />
    } else {
       return redirect('/')
    }
}

export default BlogDetailPage;