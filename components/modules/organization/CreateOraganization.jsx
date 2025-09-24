"use client"
import CardLayout from '@/components/common/CardLayout/CardLayout.'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const CreateOraganization = () => {
    return (
        <CardLayout
            title='Create Organization'
            buttonHref='/settings/organizations-list'
            buttonText=' Back to List'
            buttonIcon={FaArrowLeft}
        >
            CreateOraganization
        </CardLayout>
    )
}

export default CreateOraganization