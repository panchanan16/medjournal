import { BASE_URL } from '@/config/api.config';
import { _GET } from '@/request/request';
import Image from 'next/image';
import Link from 'next/link';

export default async function FormerBoardPage() {

    const editorialBoard = await _GET(`editorBoard/readAll?editor_type=Former board`)

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-10 max-w-7xl">
                {/* <h1 className="text-4xl font-bold text-red-800 text-center mb-12">
                    Editorial Team
                </h1> */}

                {/* Editorial Board Section */}
                <section className='mt-15'>
                    <h2 className="text-2xl font-semibold text-red-700 border-b-2 border-red-700 pb-2 mb-8">
                        FORMER BOARD
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            editorialBoard?.length && editorialBoard.map((sec, key) => (
                                <div key={key} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                    <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 hover:border-red-300 border-red-100">
                                        {/* <Image
                                        src={`localhost:3100${editor.imgLink}`}
                                        alt={editor.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                    /> */}
                                        <img className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full" src={`${BASE_URL}${sec.imgLink}`} alt={sec.name} />
                                    </div>
                                    <div className="text-center">
                                        <Link href={`/editor-board/${sec.editor_id}`}>
                                            <h3 className="text-lg font-bold text-red-800 hover:text-red-600 transition-colors duration-300 cursor-pointer mb-2">
                                                {sec.name}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-700 text-sm">{sec.institution}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </section>
            </main>
        </div>
    );
}