import ArticleCard from "@/components/Volumecard";
import { _GET } from "@/request/request";

async function ArticleByVolumePage({ params }) {
    const { volId } = await params;
    const responseArticles = await _GET(`getByVolumeId/readAll?volId=${volId}`, 'core')

    function groupArticlesByType(articles) {
        const grouped = {};
        articles.forEach(article => {
            const type = article.articleType;
            if (!grouped[type]) {
                grouped[type] = [];
            }
            grouped[type].push(article);
        });

        return Object.entries(grouped).map(([type, items]) => ({
            type,
            items,
            links: ["Full Text (590)", "Reporting Checklist", "Data Sharing Statement", "Peer Review File", "COI Form", "Open Access", "Get Permission"]
        }));
    }

    const articles = groupArticlesByType(responseArticles?.articles)

    return (
        <div className={`font-poppins`}>
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Vol 16, No 1 (February 28, 2025): Journal of Gastrointestinal Oncology</h2>
                            {
                                articles && articles.map((head, key) => (
                                    <div key={key}>
                                        <div className="mb-6">
                                            <h3 className="text-xl font-semibold text-red-800 mb-2">Original Article</h3>
                                            <div className="border-b border-gray-200 mb-4"></div>
                                        </div>

                                        {head?.items.map((art, id) => (
                                            <ArticleCard key={id} article={art} links={head.links} />
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-8">
                            <div className="bg-red-700 text-white p-4">
                                <h3 className="text-lg font-semibold">Current Issue</h3>
                            </div>
                            <div className="p-4">
                                <img
                                    src="/archives.jpeg"
                                    alt="Journal Cover"
                                    className="w-full h-auto object-cover rounded"
                                />
                                <div className="mt-4 text-center">
                                    <h4 className="font-semibold">Vol 16, No 1</h4>
                                    <p className="text-gray-600">February 2025</p>
                                    <button className="mt-3 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">View Issue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}





export default ArticleByVolumePage