import ArticleForm from '@/components/admin/ArticleForm';
import { _GET } from '@/request/request';

export default async function ArticleEditPage({ params }) {
    const { articleID } = params
    const editData = await _GET(`article/readOne?article_id=${articleID}`)
    console.log(editData)

    console.log("Article to be edit is...", articleID)
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">Article Submission</h1>
            </div>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm rounded-lg">
                        <ArticleForm />
                    </div>
                </div>
            </main>
        </div>
    );
}