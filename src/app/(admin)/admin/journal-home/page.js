import JournalHomeForm from "@/components/admin/forms/JournalHomeForm"
import { _GET } from "@/request/request"

async function JournalHomePage() {
    const journalData = await _GET('journal/readAll', 'core')

    return (
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
            <JournalHomeForm initialValues={journalData && journalData.journal.length ? journalData.journal[0] : null} />
        </div>
    )
}

export default JournalHomePage