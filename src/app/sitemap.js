import { _GET } from "@/request/request"

// export const revalidate = 3600 * 24 * 7;
export const dynamic = 'force-dynamic';

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

    const blogs = await _GET('blog/readAll', 'core')
    const journals = await _GET('articleMain/readAll', 'core')

    // Static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/indexing`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/editor-in-chief`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/editor-board`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/former_board`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },

        {
            url: `${baseUrl}/peer_review_process`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/supplement_series`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/author-instruction`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/submit_article`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/referstyle`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reviewer_guidelines`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/policy/editor-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/for-authors`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/data-sharing-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }
        ,
        {
            url: `${baseUrl}/data-sharing-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }
        ,
        {
            url: `${baseUrl}/data-sharing-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }
        ,
        {
            url: `${baseUrl}/ad-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }
        ,
        {
            url: `${baseUrl}/archives`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }
        ,
        {
            url: `${baseUrl}/published-special-issue`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        }

    ]

    // Dynamic blog post routes
    const blogRoutes = blogs && blogs?.map((post) => ({
        url: `${baseUrl}/featuredblogs/${post.blog_id}/${post.blog_url}`,
        lastModified: new Date(post.posted_on && post.posted_on),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))


    // Dynamic journals routes
    const journalRoutes = journals && journals?.map((post) => ({
        url: `${baseUrl}/article-read/${post.ariticle_id}/${post.url}`,
        lastModified: new Date(post.published_date !== "" && post.published_date),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [...staticRoutes, ...blogRoutes, ...journalRoutes]
}
