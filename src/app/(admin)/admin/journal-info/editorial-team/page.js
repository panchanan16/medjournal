import Editorstable from "@/components/admin/table/Editorstable";
import { _GET } from "@/request/request";

async function EditorialPage() {
  const editors = await _GET(`editorBoard/readAll`)

  return (
    <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10">
      <Editorstable Editors={editors} />
    </div>
  );
}

export default EditorialPage