import UserArticleForm from '@/components/admin/forms/UserArticleForm'
import { FastProcess, NormalProcess } from '@/components/ProcessSubmission'

function CreateUserArticlePAge() {
    return (
        <section className="flex gap-10 mx-10">
            <div className="max-w-[28rem] mt-5">
                <FastProcess />
                <NormalProcess />
            </div>
            <UserArticleForm initialValues={null} />
        </section>
    )
}

export default CreateUserArticlePAge