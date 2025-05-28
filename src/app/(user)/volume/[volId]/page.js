import VolumeByArticle from "@/components/VolumeByArticle";
import { _GET } from "@/request/request";

async function ArticleByVolumePage({ params }) {
    const { volId } = await params;
    const responseArticles = await _GET(`getByVolumeId/readAll?volId=${volId}`, 'core')

    return (
        <div className={`font-poppins`}>
            <main className="container mx-auto px-4 py-8">
                    <VolumeByArticle AllArticles={responseArticles} />                
            </main>
        </div>
    );
}





export default ArticleByVolumePage