"use client"
import { Box, Divider, Drawer, DrawerContent, DrawerOverlay, Icon, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import CustomButton from '../CustomButton/CustomButton'

const Header = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pathname = usePathname()
    const handleChangeRoute = (value) => {
        router.push(value)
        onClose()
    }

    const NavLink = ({ href, children }) => {
        const isActive = pathname === href
        return (
            <Box
                as={NextLink}
                href={href}
                border="1px solid"
                borderColor='green.800'
                py={1}
                px={5}
                borderBottom={isActive ? "3px solid" : "1px solid"}
                borderRadius='md'
                transition="all 0.2s ease"
                textDecoration="none"
                _focus={{ outline: "none", boxShadow: "0 0 0 2px blue.300" }}
            >
                {children}
            </Box>
        )
    }

    return (
        <Box boxShadow='sm' position='sticky' top={0} bg='white' zIndex={1000}>
            <Box px='50px' display='flex' justifyContent='space-between' height='60px' alignItems='center'>
                <Box>
                    <Image src="/logo.svg" alt="Logo" width={70} height={25} />
                </Box>
                <Box display='flex' alignItems='center' gap={2} hideBelow={"md"}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/courses">All Courses</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Box>
                <Box display='flex' alignItems='center' gap={2} hideBelow={"md"}>
                    <NavLink href="/login">Login</NavLink>
                    <Box
                        as={NextLink}
                        href="/signup"
                        px={4}
                        py={2}
                        borderRadius="md"
                        fontWeight="bold"
                        color="white"
                        bg="green.500"
                        _hover={{
                            bg: "green.600",
                            transform: "translateY(-1px)",
                            transition: "all 0.2s ease"
                        }}
                        transition="all 0.2s ease"
                        textDecoration="none"
                        _focus={{ outline: "none", boxShadow: "0 0 0 2px green.300" }}
                    >
                        Sign Up
                    </Box>
                </Box>
                <Icon as={FiMenu} hideFrom={"md"} fontSize={20} onClick={onOpen} />
            </Box>
            {/* Drawer for mobile menu */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box display='flex' justifyContent='space-between' alignItems='center' px={5}>
                        <Image src="/logo.svg" alt="Logo" width={35} height={20} />
                        <Box width={20} height={20} display='flex' justifyContent='end' alignItems='center'>
                            <Icon as={RxCross2} onClick={onClose} />
                        </Box>
                    </Box>
                    <Divider />
                    <Box px='10px' mt={5}>
                        <Box display='flex' flexDir="column" alignItems='end' gap={3} hideFrom={"md"}>
                            <CustomButton onClick={()=>handleChangeRoute('/')} width='200px' textAlign='center' bg='#0b68a2' color='white' _hover={{bg:'blue.500'}}>Home</CustomButton>
                            <CustomButton onClick={()=>handleChangeRoute('/courses')} width='200px' textAlign='center' bg='#0b68a2' color='white' _hover={{bg: '0b68a2'}}>All Courses</CustomButton>
                            <CustomButton onClick={()=>handleChangeRoute('/about')} width='200px' textAlign='center' bg='#0b68a2' color='white' _hover={{bg: '0b68a2'}}>About</CustomButton>
                            <CustomButton onClick={()=>handleChangeRoute('/contact')} width='200px' textAlign='center' bg='#0b68a2' color='white' _hover={{bg: '#0b68a2'}}>Contact</CustomButton>
                            <CustomButton onClick={()=>handleChangeRoute('/login')} width='200px' textAlign='center' border="1px solid" borderColor="green.600" bg="white" color='green.600' _hover={{bg: 'green.600', color: 'white'}}>Login</CustomButton>
                            <CustomButton onClick={()=>handleChangeRoute('/signup')} width='200px' textAlign='center' bg='green.600' color='white' _hover={{bg: 'green.500'}}>Sign up</CustomButton>
                        </Box>
                    </Box>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Header