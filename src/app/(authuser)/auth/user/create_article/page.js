import UserArticleForm from '@/components/admin/forms/UserArticleForm'
import RedirectUnAuthUser from '@/components/authuser/RedirectUnAuthUser';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

async function CreateUserArticlePAge() {
    const cookieStore = await cookies()
    const user = cookieStore.get('user')

    if (!user) {
        return redirect('/login')
    }

    return (
        <section className="mx-10">            
            <RedirectUnAuthUser />
            <UserArticleForm initialValues={null} userId={user} />
        </section>
    )
}

export default CreateUserArticlePAge