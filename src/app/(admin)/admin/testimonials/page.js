import TestimonialTable from "@/components/admin/table/TestimonialTable"
import { _GET } from "@/request/request";


async function TestimonialPage() {
  const tetis = await _GET(`testimonial/readAll`, 'core');

  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
      <TestimonialTable TestimonialList={tetis ? tetis : []} />
    </div>
  )
}

export default TestimonialPage