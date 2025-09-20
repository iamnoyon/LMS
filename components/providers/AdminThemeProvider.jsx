"use client";
import { ChakraProvider } from '@chakra-ui/react'
import React, { useContext } from 'react'
import AuthWatcher from './AuthWatcher'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation';

const AdminThemeProvider = ({ children }) => {
    const router = useRouter()
    const { state } = useContext(AuthContext);
    console.log(state);
    if (state.isAuthenticated === false) {
        router.push('/');
        return null; // Prevent rendering while redirecting
    }
    return (
        <ChakraProvider>
            <AuthWatcher>
                {children}
            </AuthWatcher>
        </ChakraProvider>
    )
}

export default AdminThemeProvider