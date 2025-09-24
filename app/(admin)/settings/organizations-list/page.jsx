import Loader from '@/components/common/Loader/Loader'
import OrganizationList from '@/components/modules/organization/OrganizationList'
import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <OrganizationList />
        </Suspense>
    )
}

export default page