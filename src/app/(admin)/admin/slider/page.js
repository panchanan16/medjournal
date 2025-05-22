import SliderTable from "@/components/admin/table/SliderTable"
import { _GET } from "@/request/request"

async function SliderList() {
    const sliders = await _GET(`slider/readAll`, 'core')
    
  return (
    <SliderTable SliderList={sliders ? sliders : []} />
  )
}

export default SliderList