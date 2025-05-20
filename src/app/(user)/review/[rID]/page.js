import ReviewPeople from '@/components/ReviewPeople';
import ReviewPeopleSidebar from '@/components/ReviewPeopleSidebar';
import { _GET } from '@/request/request';
import ReviewCss from '@/styles/reviewCss';

export default async function ReviewersPage({ params }) {
    const { rID } = await params
    const reviews = await _GET(`reviewer/readAll?rev_id=${rID}`)
    const reviewList = await _GET(`reviewmain/readAll`)

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">
                {reviews && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Content */}
                        <ReviewPeople reviews={reviews} />
                        {/* Sidebar */}
                        <ReviewPeopleSidebar List={reviewList ? reviewList : []} />
                    </div>
                )}
            </main>
            <ReviewCss />
        </div>
    );
}