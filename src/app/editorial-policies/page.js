import StyleSheet from '@/components/StyleSheet'

const htmlContent = `<h2 class="title page-title">Editorial Policies</h2>
<p><span lang="EN-US">Our journal editorial office takes a similar structure to those at many other academic journals. Comprising a range of experienced individuals, including managing editor, editorial associates, software specialists, and administrative coordinators, the editorial office strives to provide a smooth service for authors and reviewers alike. Its responsibilities include:</span></p>
<ul type="disc">
<li><span lang="EN-US">Managing the peer review process to ensure manuscripts progress smoothly through peer review. This involves providing reviewers with all the information they need, to guarantee authors receive a review that improves the quality of their manuscript.</span></li>
<li><span lang="EN-US">Compiling issues, making sure they are delivered on time and to the highest standard.</span></li>
<li><span lang="EN-US">Editing, proofreading, and reformatting manuscripts to ensure they are finished to a high quality and conform to the journal style.</span></li>
<li><span lang="EN-US">Providing assistance with submissions and handling queries and problems.</span></li>
</ul>
<p><span lang="EN-US">Our editorial office is quick to respond to online trends. The editorial office staff frequently conducts data analysis of citation levels, usage, and author submission behavior to determine content that would enhance readership, all while balancing commercial aspirations with editorial integrity, direction, and policies.</span></p>
<p><span lang="EN-US">For publishing and ethical standards, we follow the Recommendations&nbsp;for the Conduct, Reporting, Editing, and Publication of Scholarly work in Medical Journals (<a href="http://www.icmje.org/recommendations/" target="_blank" rel="noopener noreferrer">http://www.icmje.org/recommendations/</a>) issued by the International Committee of Medical Journal Editors (ICMJE) and the Cope of Conduct and Best Practice Guidelines for Journal Editors (<a href="http://publicationethics.org/files/Code_of_conduct_for_journal_editors.pdf" target="_blank" rel="noopener noreferrer">http://publicationethics.org/files/Code_of_conduct_for_journal_editors.pdf</a>) issued by the Committee on Publication Ethics (COPE).</span></p>
<p><span lang="EN-US">&nbsp;</span></p>
<p><em>Updated on July 19, 2024</em></p>
<p class="intro">&nbsp;</p>
<p>&nbsp;</p>`

function EditorialPolicies() {
    return (
        <main className="container mx-auto px-6 py-8">
            {/* Custom CSS to style the rendered HTML */}
            <StyleSheet />

            <div className="bg-white shadow-sm rounded-lg p-8">                
                <section className="mb-10">
                    {/* Using dangerouslySetInnerHTML to render the HTML content */}
                    <div
                        className="html-content"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </section>
            </div>
        </main>
    )
}

export default EditorialPolicies