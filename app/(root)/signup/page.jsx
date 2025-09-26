import Loader from '@/components/common/Loader/Loader'
import SignUp from '@/components/modules/public/SignUp/SignUp'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SignUp />
        </Suspense>
    )
}

export default page