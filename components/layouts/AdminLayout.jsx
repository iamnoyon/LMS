"use client"
import { Box, Divider, Icon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Profile from '../modules/Dashboard/profile/Profile';
import Sidebar from './Sidebar';
import Loader from '../common/Loader/Loader';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }) => {
    const pathname = usePathname()
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleCollapseSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [pathname])
    return (
        <Box>
            <Box
                minH='100vh'
                width={isSidebarCollapsed ? '80px' : '17%'}
                bg='pink.700'
                position='fixed'
                top={0}
                left={0}
                bottom={0}
                transition='width 0.3s ease-in-out'
            >
                <Box
                    h='60px'
                    boxShadow='sm'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    overflow='hidden'
                >
                    <Text
                        opacity={isSidebarCollapsed ? 0 : 1}
                        transform={isSidebarCollapsed ? "scale(0.8)" : "scale(1)"}
                        transition='opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
                    >
                        Noyon
                    </Text>
                </Box>
                <Box>
                    <Sidebar isCollapsed={isSidebarCollapsed} />
                </Box>
            </Box>
            <Box
                marginLeft={isSidebarCollapsed ? '80px' : '17%'}
                minH='100vh'
                bg='gray.50'
                transition='margin-left 0.3s ease-in-out'
            >
                <Box
                    height="60px"
                    bg='white'
                    boxShadow='sm'
                    display='flex'
                    alignItems='center'
                    paddingX='20px'
                    position='sticky'
                    top={0}
                    zIndex={10}
                    justifyContent='space-between'
                >
                    <button onClick={handleCollapseSidebar}>
                        <Icon as={isSidebarCollapsed ? LuMenu : FaAngleDoubleLeft} fontSize={isSidebarCollapsed ? '24px' : '18px'} />
                    </button>
                    <Profile />
                </Box>
                <Box
                    m={4}
                >
                    {
                        isLoading ? <Loader /> : children
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default AdminLayout