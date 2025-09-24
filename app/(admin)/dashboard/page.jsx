import Loader from '@/components/common/Loader/Loader'
import Dashboard from '@/components/modules/Dashboard/Dashboard'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Dashboard />
        </Suspense>
    )
}

export default page