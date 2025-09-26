"use client"
import FormInput from '@/components/common/FormComponents/FormInput'
import Formpassword from '@/components/common/FormComponents/Formpassword'
import FormWrapper from '@/components/common/FormComponents/Fromwrapper'
import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Fa500Px, FaList } from 'react-icons/fa'

const SignUp = () => {
    const methods = useForm({
        defaultValues: {
            email: '',
        }
    })
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <Box minH='80vh' bg='pink.50' mt={10} boxShadow='md' p={10} borderRadius={10} width='500px'>
                <Text textAlign='center' fontSize='20px' fontWeight={600}>Sign Up</Text>
                <FormWrapper methods={methods} onSubmit={onSubmit}>
                    <Box display='flex' flexDirection='column' gap={2}>
                        <FormInput
                            label='Name'
                            name='name'
                            remarks={true}
                        // style={{ marginBottom: '20px' }}
                        />
                        <FormInput
                            label='Email'
                            name='email'
                            remarks={true}
                        />
                        <Formpassword
                            label='Password'
                            name='password'
                        />
                        <Button type='submit' colorScheme='blue'>Submit</Button>
                    </Box>
                </FormWrapper>
            </Box>
        </Box>
    )
}

export default SignUp