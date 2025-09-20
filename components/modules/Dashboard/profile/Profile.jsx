"use client"
import CustomButton from '@/components/common/CustomButton/CustomButton';
import { Avatar, Box, Button, Divider, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box>
            <Menu>
                <MenuButton>
                    <Avatar
                        size="sm"
                        name="User Name"
                        src="/avater.jpg"
                        _hover={{ cursor: "pointer" }}
                    />
                </MenuButton>

                <MenuList>
                    <VStack>

                        <Avatar
                            size="lg"
                            name="User Name"
                            src="/avater.jpg"
                        />
                        <Text>Software Engineer</Text>
                        <Divider />
                        <Box display='flex' justifyContent='space-between' width="80%" >
                            <CustomButton
                                bg="pink.700"
                                color="white"
                                _hover={{ bg: "pink.600" }}
                                height='32px'
                                href="/profile"
                            >
                                Profile
                            </CustomButton>
                            <CustomButton
                                bg="red.600"
                                color="white"
                                _hover={{ bg: "red.500" }}
                                height='32px'
                            >
                                Logout
                            </CustomButton>
                        </Box>
                    </VStack>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Profile