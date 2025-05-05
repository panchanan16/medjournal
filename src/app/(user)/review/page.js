import ReviewComponent from '@/components/reviewComponent';
import { _GET } from '@/request/request';

export default async function ReviewPage() {
  const reviewItems = await _GET(`reviewmain/readAll`)

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-700 to-red-900 py-6 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Reviewers</h1>
          </div>
          <ReviewComponent reviewerData={reviewItems} />
        </div>
      </main>
    </div>
  );
}