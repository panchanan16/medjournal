import IndexForm from '@/components/admin/forms/IndexForm';
import { _GET } from '@/request/request';
import React from 'react'

async function EditIndexPage({ params }) {
    const { editId } = params
    const response = await _GET(`index/readOne?ind_id=${editId}`)

    return (
        <IndexForm initialValues={response} />
    )
}


export default EditIndexPage;