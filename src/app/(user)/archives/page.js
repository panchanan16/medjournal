import VolumesRender from "@/components/admin/VolumesRender";
import { _GET } from "@/request/request";

export default async function ArchivesPage() {
    const volumes = await _GET('volume/readAll')

    return (
        <VolumesRender AllVolumes={volumes} />
    )
}
