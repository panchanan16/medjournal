import FullArticle from '@/components/FullArticle';
import StyleSheet from '@/components/StyleSheet';
import { _GET } from '@/request/request';
import { redirect } from 'next/navigation';

export default async function ArticleReadPage({ params }) {
    const { articleId, articleUrl } = await params
    const response = await _GET(`articlefull/readOne/${articleId}`, 'core')
  
    if (articleUrl == response.url) {
        return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <FullArticle articleFull={response ? response : {}} artId={articleId} />            
            <StyleSheet />
        </div>
    );
    } else {
        return redirect('/')
    }
}



