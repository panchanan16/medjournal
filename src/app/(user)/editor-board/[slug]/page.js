import { _GET } from '@/request/request';
import Image from 'next/image';

export default async function EditorProfile({ params }) {
    const { slug } = await params
    const editorData = await _GET(`editorBoard/readOne?editor_id=${slug}`)

    const hasBiography = editorData.biography;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Editor Header */}
                    <div className="bg-gradient-to-r from-red-700 to-red-900 px-6 py-8 text-white">
                        <h1 className="text-3xl font-bold mb-1">{editorData.name}</h1>
                        <div className="text-xl text-red-100 font-semibold">{editorData.editor_type.toUpperCase()}</div>
                        <div className="text-xl text-red-100">{editorData.designation}</div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Left Column - Image & Details */}
                            <div className="md:w-1/3">
                                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="relative w-full aspect-square">
                                        {/* <Image
                                            src={'/editor.jpeg'}
                                            alt={editorData.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 hover:scale-105"
                                        /> */}
                                        <img className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full" src={`${{BASE_URL}}${editorData.imgLink}`} alt={editorData.name} />
                                    </div>
                                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                                        <div className="mb-3">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Institution</h3>
                                            <p className="text-gray-800">{editorData.institution}</p>
                                        </div>
                                        <div className="mb-3">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Qualification</h3>
                                            <a href={`mailto:${editorData.email}`} className="text-red-60 hover:text-red-800 transition-colors">
                                                {editorData.qualification}
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Biography */}
                            <div className="md:w-2/3">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-red-800 border-b-2 border-red-100 pb-2 mb-4">Biography</h2>
                                    {hasBiography ? (
                                        <div className="space-y-4 text-gray-700" dangerouslySetInnerHTML={{__html: editorData.biography}}>
                                            
                                        </div>
                                    ) : (
                                        <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <p className="text-gray-500">Biography information is not currently available for {editorData.name}.</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
