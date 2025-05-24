import StyleSheet from "@/components/StyleSheet";
import { _GET } from "@/request/request";


async function SupplementSeriesPage() {
    const html = await _GET('supplement/readAll')

    return (
        <main className="container mx-auto px-6 py-8">
            {/* Custom CSS to style the rendered HTML */}
            <StyleSheet />
            <div className="bg-white shadow-sm rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{html[0].title}</h1>

                <section className="mb-10">
                    {/* Using dangerouslySetInnerHTML to render the HTML content */}
                    <div
                        className="html-content"
                        dangerouslySetInnerHTML={{ __html: html[0].content }}
                    />
                </section>
            </div>

        </main>
    )
}

export default SupplementSeriesPage