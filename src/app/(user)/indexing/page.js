import IndexingUser from '@/components/IndexingUser'
import { _GET } from '@/request/request'

async function IndexUserPage() {
    const indexes = await _GET('index/readAll')

    return (
        <section className='container mx-auto px-6 bg-white shadow-sm rounded-lg p-8 my-10'>
            <IndexingUser IndexItem={indexes} />
        </section>
    )
}

export default IndexUserPage