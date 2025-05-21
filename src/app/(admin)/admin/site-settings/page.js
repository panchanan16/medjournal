import SiteSettingsForm from "@/components/admin/forms/SiteSettingsForm"
import { _GET } from "@/request/request"

async function SiteSettingSPage() {
    const siteData = await _GET('settings/readAll')
    console.log(siteData)

    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <SiteSettingsForm initialValues={siteData?.length ? siteData[0] : null} />
        </div>
    )
}


export default SiteSettingSPage