'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function EditorialTeamPage() {
    const editorInChief = {
        name: "Gary Y Yang, MD",
        institution: "Loma Linda University Medical Center, Loma Linda, CA, USA",
        email: "jgoeic@amegroups.com",
        image: "/editor.jpeg"
    };

    const editorialBoard = [
        {
            name: "Joseph Chao, MD",
            institution: "City of Hope, Duarte, CA, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Ann-Lii Cheng, MD, PhD",
            institution: "National Taiwan University, Taipei",
            image: "/editor.jpeg"
        },
        {
            name: "Laura Dawson, MD",
            institution: "Princess Margaret Hospital, Toronto, Ontario, Canada",
            image: "/editor.jpeg"
        },
        {
            name: "Marwan Fakih, MD",
            institution: "City of Hope Comprehensive Cancer Center, Duarte, CA, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Carlos A. Garberoglio, MD",
            institution: "Loma Linda University, Loma Linda, CA, USA",
            image: "/editor.jpeg"
        },
        {
            name: "John Gibbs, MD",
            institution: "Jersey Shore University Medical Center, Neptune, NJ, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Joseph M. Herman, MS MD",
            institution: "Northwell Health, New Hyde Park, NY, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Chung-Tsen Hsueh, MD, PhD",
            institution: "Loma Linda University, Loma Linda, CA, USA",
            image: "/editor.jpeg"
        },
        {
            name: "David H. Ilson, MD",
            institution: "Memorial Sloan-Kettering Cancer Center, New York, NY, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Milind Javle, MD",
            institution: "MD Anderson Cancer Center, Houston, TX, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Lawrence Kleinberg, MD",
            institution: "Johns Hopkins University, Baltimore, MD, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Sunil Krishnan, MD",
            institution: "UTHealth Houston – Texas Medical Center, Houston, TX, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Shane Lloyd, MD",
            institution: "University of Utah School of Medicine, Salt Lake City, UT, USA",
            image: "/editor.jpeg"
        },
        {
            name: "Upender Manne, MS, PhD",
            institution: "University of Alabama at Birmingham, Birmingham, AL, USA",
            image: "/editor.jpeg"
        }
    ];

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
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="relative w-40 h-40 overflow-hidden rounded-lg border-4 border-red-100">
                            <Image
                                src={editorInChief.image}
                                alt={editorInChief.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <Link href={`/editors/${encodeURIComponent(editorInChief.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                                <h3 className="text-xl font-bold text-red-800 hover:text-red-600 transition-colors duration-300 cursor-pointer mb-2">
                                    {editorInChief.name}
                                </h3>
                            </Link>
                            <p className="text-gray-700 mb-2">{editorInChief.institution}</p>
                            <p className="text-gray-600 italic">Email: {editorInChief.email}</p>
                        </div>
                    </div>
                </section>

                {/* Editorial Board Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-700 border-b-2 border-red-700 pb-2 mb-8">
                        Editorial Board
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {editorialBoard.map((editor, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-red-100">
                                    <Image
                                        src={editor.image}
                                        alt={editor.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="text-center">
                                    <Link href={`/editors/${encodeURIComponent(editor.name.toLowerCase().replace(/\s+/g, '-'))}`}>
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
            </main>
        </div>
    );
}