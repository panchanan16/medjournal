import { BASE_URL } from '@/config/api.config';
import { _GET } from '@/request/request';
import Image from 'next/image';
import Link from 'next/link';

export default async function EditorialTeamPage() {

    const editorialBoard = await _GET(`editorBoard/readAll`)
    function groupEditorsByType(editorsArray) {
        const grouped = {};

        editorsArray.forEach(editor => {
            const type = editor.editor_type;

            if (!grouped[type]) {
                grouped[type] = [];
            }

            grouped[type].push(editor);
        });

        // Convert grouped object to array of objects
        return Object.entries(grouped).map(([editor_type, editors]) => ({
            editor_type,
            editors
        }));
    }

    const filterData = groupEditorsByType(editorialBoard)
    const editorInChief = filterData?.filter((chief) => chief.editor_type == 'editor in chief')

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-10 max-w-7xl">
                <h1 className="text-4xl font-bold text-red-800 text-center mb-12">
                    Editorial Team
                </h1>

                {/* Editor in Chief Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-red-700 border-b-2 border-red-700 pb-2 mb-8">
                        Editor-in-Chief
                    </h2>
                    {
                        editorInChief?.length && editorInChief[0]?.editors.map((chief, key) => (
                            <div key={key} className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="relative w-40 h-40 overflow-hidden rounded-lg border-4 border-red-100">
                                    <img
                                        src={`http://localhost:3100${chief.imgLink}`}
                                        alt={chief.name}
                                        className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <Link href={`/editor-board/${chief.editor_id}`}>
                                        <h3 className="text-xl font-bold text-red-800 hover:text-red-600 transition-colors duration-300 cursor-pointer mb-2">
                                            {chief.name}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-700 mb-2">{chief.qualification}</p>
                                    <p className="text-gray-600 italic">{chief.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>

                {/* Editorial Board Section */}
                {
                    filterData?.length && filterData.map((sec, key) => {
                        if (sec.editor_type !== 'editor in chief') {
                            return <section key={key} className='mt-15'>
                                <h2 className="text-2xl font-semibold text-red-700 border-b-2 border-red-700 pb-2 mb-8">
                                    {sec.editor_type.toUpperCase()}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sec && sec?.editors?.map((editor, index) => (
                                        <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                            <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 hover:border-red-300 border-red-100">
                                                {/* <Image
                                        src={`localhost:3100${editor.imgLink}`}
                                        alt={editor.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                    /> */}
                                                <img className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full" src={`${BASE_URL}${editor.imgLink}`} alt={editor.name} />
                                            </div>
                                            <div className="text-center">
                                                <Link href={`/editor-board/${editor.editor_id}`}>
                                                    <h3 className="text-lg font-bold text-red-800 hover:text-red-600 transition-colors duration-300 cursor-pointer mb-2">
                                                        {editor.name}
                                                    </h3>
                                                </Link>
                                                <p className="text-gray-700 text-sm">{editor.institution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        }
                    })
                }
            </main>
        </div>
    );
}