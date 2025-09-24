"use client"
import { createColumnHelper } from '@tanstack/react-table'
import { Award, Mail, Phone, User } from 'lucide-react';
import React from 'react'
import ReactTable from '@/components/common/ReactTable/ReactTable';
import { tableData } from '@/const/data';
import CardLayout from '@/components/common/CardLayout/CardLayout.';
import { FaList, FaPlus } from 'react-icons/fa';

const columnHelper = createColumnHelper();

const OrganizationList = () => {
    const columns = [
        columnHelper.accessor('id', {
            id: 'id',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Award size={20} style={{ marginRight: '3px' }} /> ID
                </div>
            },
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('name', {
            id: 'Name',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <User size={20} style={{ marginRight: '3px' }} /> Name
                </div>
            },
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('age', {
            id: 'age',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    Age
                </div>
            },
            cell: info => info.getValue(),
            enableSorting: true,
        }),
        columnHelper.accessor('email', {
            id: 'email',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Mail size={20} style={{ marginRight: '3px' }} /> Email
                </div>
            },
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('phone', {
            id: 'Phone',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Phone size={20} style={{ marginRight: '3px' }} /> Phone
                </div>
            },
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('status', {
            id: 'status',
            header: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    Status
                </div>
            },
            cell: info => info.getValue(),
            enableSorting: true,
        }),
    ]
    return (
        <CardLayout
            title="Organizations List"
            icon={FaList}
            buttonHref='/settings/create-organization'
            buttonText='Create Organization'
            buttonIcon={FaPlus}
        >
            <ReactTable dataScource={tableData} columns={columns}></ReactTable>
        </CardLayout>
    )
}

export default OrganizationList