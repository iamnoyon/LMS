import { Button } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

const CustomButton = ({
    children,
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled,
    fontSize = '14px',
    href = '',
    ...props
}) => {
    return (
        <NextLink href={href} passHref>
            <Button
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                isLoading={isLoading}
                disabled={isDisabled}
                fontSize={fontSize}
                {...props}
            >
                {children}
            </Button>
        </NextLink>
    )
}

export default CustomButton