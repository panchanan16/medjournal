'use client'

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import StyleSheet from '@/components/StyleSheet';

export default function Guidelines() {
    const sectionRefs = {
        about: useRef(null),
        categories: useRef(null),
        submission: useRef(null),
        preparation: useRef(null),
        style: useRef(null),
        copyright: useRef(null),
        review: useRef(null),
        charges: useRef(null),
        proofs: useRef(null),
        offprints: useRef(null)
    };

    const scrollToSection = (sectionId) => {
        sectionRefs[sectionId]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Toggle subsections visibility
    const toggleSubsection = (sectionId) => {
        const subsection = document.getElementById(`${sectionId}-subsection`);
        const allSubsections = document.querySelectorAll('.subsection');

        allSubsections.forEach(sub => {
            if (sub.id !== `${sectionId}-subsection`) {
                sub.classList.add('hidden');
            }
        });

        subsection.classList.toggle('hidden');
    };
    const sections = ["Home", "About", "Services", "Contact"];

    const [activeSection, setActiveSection] = useState(sections[0]);
    useEffect(() => {
        const aboutSubsection = document.getElementById('about-subsection');
        if (aboutSubsection) {
            aboutSubsection.classList.remove('hidden');
        }
    }, []);



    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
                {/* Sidebar */}
                <aside className="w-72 bg-gradient-to-r from-red-100 to-white self-center mt-5 rounded-lg p-4 shrink-0 border-r border-gray-200 overflow-y-auto lg:self-start lg:sticky top-5">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-4">Contents</h2>
                        {
                            sections.length && sections.map((item, ind) => (
                                <div className="mb-3" key={ind}>
                                    <button
                                        onClick={() => {
                                            scrollToSection('submission');
                                            toggleSubsection('submission');
                                            setActiveSection(item)
                                        }}
                                        className={`flex text-md items-center text-gray-700 hover:text-red-600 p-2 w-full ${activeSection === item ? "bg-white rounded-lg text-red-600" : "hover:bg-white rounded-lg"}`}
                                    >
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="8" x2="12" y2="16" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                        </span>
                                        {item}
                                    </button>
                                    <div id="submission-subsection" className="subsection hidden pl-8 mt-2 space-y-2">
                                        <div onClick={() => scrollToSection('submission')} className="cursor-pointer hover:text-red-600 text-sm">
                                            Submission Process
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                        {/* Offprints and Reprints Section */}
                        {/* <div className="mb-3">
                            <button
                                onClick={() => {
                                    scrollToSection('offprints');
                                    toggleSubsection('offprints');
                                }}
                                className="flex text-sm items-center text-gray-700 hover:text-red-600 p-2 w-full"
                            >
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </span>
                                OFFPRINTS AND REPRINTS
                            </button>
                            <div id="offprints-subsection" className="subsection hidden pl-8 mt-2 space-y-2">
                                <div onClick={() => scrollToSection('offprints')} className="cursor-pointer hover:text-red-600">
                                    Offprint Information
                                </div>
                                <div onClick={() => scrollToSection('reprints')} className="cursor-pointer hover:text-red-600">
                                    Reprint Guidelines
                                </div>
                            </div>
                        </div> */}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto html-content">
                    <div className="max-w-4xl mx-auto">
                        <h1>Guidelines for Authors</h1>

                        {/* About the Journal */}
                        <section ref={sectionRefs.about} id="about" className="mb-12">
                            <h2>1. ABOUT THE JOURNAL</h2>
                            <p className="mb-4">
                                JGO is indexed in PubMed, PubMed Central (PMC), Scopus, Science Citation Index Expanded (SCIE) and received its impact factor of 2 for the year 2023.
                            </p>
                            <p ref={sectionRefs['about-more']} id="about-more" className="mb-4">
                                For more about our journal, please see: <a href="https://jgo.amegroups.org/about">https://jgo.amegroups.org/about</a>
                            </p>
                        </section>

                        {/* Manuscript Categories */}
                        <section ref={sectionRefs.categories} id="categories" className="mb-12">
                            <h2>2. MANUSCRIPT CATEGORIES</h2>

                            <div ref={sectionRefs['categories-table']} id="categories-table" className="overflow-x-auto mt-4">
                                <table>
                                    <thead className="bg-red-50">
                                        <tr>
                                            <th>Manuscript categories</th>
                                            <th>Word limit</th>
                                            <th>Abstract</th>
                                            <th>Key words</th>
                                            <th>Main text</th>
                                            <th>References</th>
                                            <th>Tables and Figures</th>
                                            <th>Structure template</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Original Article</td>
                                            <td>No limit</td>
                                            <td>
                                                Structured with Background, Methods, Results, and Conclusions,<br />
                                                200-450 words
                                            </td>
                                            <td>3-5</td>
                                            <td>
                                                Structured as Introduction, Methods, Results, Discussion, and Conclusions;<br />
                                                Require a highlight box
                                            </td>
                                            <td>No limit</td>
                                            <td>No limit</td>
                                            <td>
                                                <a href="#" className="text-red-600 hover:underline">⬇️ Download</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Review Article</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                Include Introduction, comprehensive review of a certain topic
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Manuscript Submission */}
                        <section ref={sectionRefs.submission} id="submission" className="mb-12">
                            <h2>3. MANUSCRIPT SUBMISSION</h2>
                            <p className="mb-4">
                                All manuscripts must be submitted online through the journal's submission system. The submitting author should register or create an account if they haven't done so previously. After logging in, authors should follow the step-by-step instructions for submission.
                            </p>
                            <p className="mb-4">
                                During submission, authors will be required to provide information about all authors, suggest reviewers, and upload manuscript files following our formatting guidelines.
                            </p>
                        </section>

                        {/* Manuscript Preparation */}
                        <section ref={sectionRefs.preparation} id="preparation" className="mb-12">
                            <h2>4. MANUSCRIPT PREPARATION</h2>
                            <p className="mb-4">
                                Authors should prepare their manuscripts according to the requirements outlined in the respective manuscript category. All manuscripts should be prepared in editable Word format with 1.5 line spacing, 12-point font size, and at least 1-inch margins on all sides.
                            </p>
                            <p className="mb-4">
                                The manuscript should include the title page, abstract, keywords, main text, references, figure legends, tables, and figures. Each of these elements should start on a new page.
                            </p>
                        </section>

                        {/* Style of the Manuscript */}
                        <section ref={sectionRefs.style} id="style" className="mb-12">
                            <h2>5. STYLE OF THE MANUSCRIPT</h2>
                            <p className="mb-4">
                                The journal follows American English spelling and authors should therefore follow the latest edition of the Merriam–Webster's Collegiate Dictionary. The journal recommends authors to use the past tense to describe specific results and the present tense for general reference.
                            </p>
                            <p className="mb-4">
                                Use standard abbreviations and define at first mention. Avoid abbreviations in the title and abstract. Use SI units for scientific terms.
                            </p>
                        </section>

                        {/* Copyright and Permissions */}
                        <section ref={sectionRefs.copyright} id="copyright" className="mb-12">
                            <h2>6. COPYRIGHT AND PERMISSIONS</h2>
                            <p className="mb-4">
                                Upon acceptance of an article, authors will be asked to complete a 'Copyright Transfer Agreement'. The corresponding author will be responsible for signing this form on behalf of all authors.
                            </p>
                            <p ref={sectionRefs.permissions} id="permissions" className="mb-4">
                                Authors are responsible for obtaining permission to reproduce any previously published material, including figures and tables, from the copyright holder. The source of reproduced material should be cited in the manuscript.
                            </p>
                        </section>

                        {/* Peer Review Process */}
                        <section ref={sectionRefs.review} id="review" className="mb-12">
                            <h2>7. PEER REVIEW PROCESS</h2>
                            <p className="mb-4">
                                All submitted manuscripts are initially reviewed by the editorial office to ensure compliance with the journal's guidelines. Manuscripts that pass initial screening are then assigned to an appropriate editor who sends them for peer review.
                            </p>
                            <p ref={sectionRefs['review-timeline']} id="review-timeline" className="mb-4">
                                The journal aims to provide authors with an initial decision within 4-6 weeks of submission. Accepted articles will be published online ahead of inclusion in a specific issue.
                            </p>
                        </section>

                        {/* Article Processing Charges */}
                        <section ref={sectionRefs.charges} id="charges" className="mb-12">
                            <h2>8. ARTICLE PROCESSING CHARGES</h2>
                            <p className="mb-4">
                                The journal charges an article processing fee for each accepted manuscript. The current fee structure is available on the journal's website. The fee covers the costs of manuscript processing, professional copyediting, typesetting, and publication.
                            </p>
                            <p ref={sectionRefs.waiver} id="waiver" className="mb-4">
                                Waiver requests may be considered for authors from low-income countries or in cases of financial hardship. Such requests should be made during submission.
                            </p>
                        </section>
         
                    </div>
                </main>
            </div>
            <StyleSheet />
        </>
    );
}