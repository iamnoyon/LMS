import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaList } from 'react-icons/fa'
import NextList from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const CardLayout = ({
    children,
    title,
    icon,
    buttonHref,
    buttonText,
    buttonIcon
}) => {
    return (
        <Box border='1px solid' borderColor='#97266d' borderRadius='8px'>
            <Box
                bg='#97266d'
                color='white'
                paddingX='20px'
                py='10px'
                borderTopRadius='6px'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Box display='flex' alignItems='center' gap='5px'>
                    {icon && <Icon as={icon} fontSize='16px'/>}
                    <Text fontSize='16px' fontWeight={500}>{title}</Text>
                </Box>
                <Box>
                    {
                        buttonText && (
                            <Box
                                as={NextList}
                                href={buttonHref}
                                display='flex'
                                alignItems='center'
                                gap='5px'
                                cursor='pointer'
                                fontSize='14px'
                                fontWeight={500}
                                bg='white'
                                color='#97266d'
                                px={3}
                                py={2}
                                borderRadius='md'
                                _hover={{ textDecoration: 'none', backgroundColor: '#f3f4f6' }}
                            >
                                {buttonIcon && <Icon as={buttonIcon} fontSize='16px'/>}
                                <Text>{buttonText}</Text>
                            </Box>
                        )
                    }
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default CardLayout