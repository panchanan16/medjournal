'use client'

import Image from 'next/image';

export default function EditorProfile() {
    const editorData = {
        name: "Gary Y Yang, MD",
        position: "Editor-in-Chief",
        institution: "Loma Linda University Medical Center, Loma Linda, CA, USA",
        email: "jgoeic@amegroups.com",
        image: "/editor.jpeg",
        biography: [
            "Dr. Gary Yang is Professor and Dell E. Webb Chair in Radiation Medicine, Loma Linda University in southern California, where he also serves as Residency Program Director and Director of Education and Development. Loma Linda University is the first hospital-based proton treatment center in the United States, providing patients worldwide with cutting-edge proton therapy treatments and access to the world-class doctors and staff.",
            "Dr. Yang received his medical degree from Chicago Medical School and completed his internship at Yale University, New Haven, Connecticut, followed by residency training at Emory University, Atlanta, Georgia and fellowship at Johns Hopkins University, Baltimore, Maryland. Before joining Loma Linda University, Dr. Yang was Residency Program Director and Medical Director of Radiation Medicine at Roswell Park Cancer Institute, Buffalo, New York.",
            "Dr. Yang is an internationally recognized expert in GI cancers. He is currently the Editor-in-Chief of the Journal of Gastrointestinal Oncology, Associate Editor for the Journal of Thoracic Disease, and editorial board member of the World Journal of GI Oncology and Thoracic Cancer. He is also a reviewer for over 20 peer-reviewed journals and has authored or co-authored more than 150 journal publications, abstracts and book chapters.",
            "Dr. Yang was invited as moderator/faculty speaker at various scientific and educational sessions of international conferences including International Society of GI Oncology (ISGIO) and American Society for Radiation Oncology (ASTRO). Research Council of America named Dr. Yang among the \"America's Top Oncologists\". He was named to \"America's Top Doctors\" by Castle Connolly Medical, Ltd."
        ],
        updatedOn: "January 17, 2025",
        journals: ["Journal of Gastrointestinal Oncology", "Journal of Thoracic Disease", "World Journal of GI Oncology", "Thoracic Cancer"]
    };

    const hasBiography = editorData.biography && editorData.biography.length > 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Editor Header */}
                    <div className="bg-gradient-to-r from-red-700 to-red-900 px-6 py-8 text-white">
                        <h1 className="text-3xl font-bold mb-1">{editorData.name}</h1>
                        <div className="text-xl text-red-100">{editorData.position}</div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Left Column - Image & Details */}
                            <div className="md:w-1/3">
                                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src={editorData.image}
                                            alt={editorData.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                                        <div className="mb-3">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Institution</h3>
                                            <p className="text-gray-800">{editorData.institution}</p>
                                        </div>
                                        <div className="mb-3">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Email</h3>
                                            <a href={`mailto:${editorData.email}`} className="text-red-600 hover:text-red-800 transition-colors">
                                                {editorData.email}
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Associated Journals</h3>
                                            <ul className="list-disc pl-5 text-sm text-gray-700">
                                                {editorData.journals.map((journal, index) => (
                                                    <li key={index} className="mb-1">
                                                        <a href="#" className="hover:text-red-700 transition-colors">{journal}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Biography */}
                            <div className="md:w-2/3">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-red-800 border-b-2 border-red-100 pb-2 mb-4">Biography</h2>
                                    {hasBiography ? (
                                        <div className="space-y-4 text-gray-700">
                                            {editorData.biography.map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}
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

// // This function can be used to fetch data from an API in a real application
// export async function getServerSideProps(context) {
//   // In a real app, you would fetch the editor data based on the slug
//   // const { slug } = context.params;
//   // const data = await fetchEditorData(slug);

// //   return {
// //     props: {}, // Will be passed to the page component as props
// //   };
// }