import Loader from '@/components/common/Loader/Loader'
import CreateOraganization from '@/components/modules/organization/CreateOraganization'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <CreateOraganization />
        </Suspense>
    )
}

export default page