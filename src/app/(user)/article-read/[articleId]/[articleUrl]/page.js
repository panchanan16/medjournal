import FullArticle from '@/components/FullArticle';
import StyleSheet from '@/components/StyleSheet';
import { _GET } from '@/request/request';

export default async function ArticleReadPage({ params }) {
    const { articleId } = await params
    const response = await _GET(`articlefull/readOne/${articleId}`, 'core')
  
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <FullArticle articleFull={response ? response : {}} artId={articleId} />            
            <StyleSheet />
        </div>
    );
}



