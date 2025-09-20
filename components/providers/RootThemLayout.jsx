"use client"
import { AuthContext } from '@/context/AuthContext'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const RootThemeLayout = ({ children }) => {
    const { state } = useContext(AuthContext)
    
    const router = useRouter();
    console.log(state);
    if (state.isAuthenticated) {
        router.push('/dashboard');
        return null; // Prevent rendering while redirecting
    }
    return (
        <ChakraProvider>
            <Box>
                <Header />
                <Box width="100%" px="5%">
                    {children}
                </Box>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}

export default RootThemeLayout