import UserArticleForm from '@/components/admin/forms/UserArticleForm'
import { FastProcess, NormalProcess } from '@/components/ProcessSubmission'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

async function CreateUserArticlePAge() {
    const cookieStore = await cookies()
    const user = cookieStore.get('user')

    if (!user) {
        return redirect('/login')
    }

    return (
        <section className="flex gap-10 mx-10">
            <div className="max-w-[28rem] mt-5">
                <FastProcess />
                <NormalProcess />
            </div>
            <UserArticleForm initialValues={null} userId={user} />
        </section>
    )
}

export default CreateUserArticlePAge