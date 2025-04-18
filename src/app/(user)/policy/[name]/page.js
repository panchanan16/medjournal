import StyleSheet from '@/components/StyleSheet'
import { _GET } from '@/request/request'


async function PolicyPage({ params }) {
    const { name } = await params
    const response = await _GET(`policy/readOne?pageUrl=${name}`)
    const htmlContent = response.content


    return (
        <main className="container mx-auto px-6 py-8">
            <div className="bg-white shadow-sm rounded-lg p-8">
                <section className="mb-10">
                    <div
                        className="html-content"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </section>
            </div>
            <StyleSheet />
        </main>
    )
}

export default PolicyPage