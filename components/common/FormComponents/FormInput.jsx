"use client"
import { Box, FormControl, Icon, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Fa500Px } from 'react-icons/fa'

const FormInput = ({
    label,
    name,
    type = 'text',
    remarks,
    style,
}) => {
    const { control, formState: { errors }, setValue } = useFormContext()
    return (
        <FormControl>
            <Box style={{ ...style }}>
                <Box>
                    {
                        label && (
                            <Box as='label' fontSize='16px'>{label}</Box>
                        )
                    }
                    {
                        remarks && (<Box as='span' fontSize='18px' color='red' ml={1} fontWeight={600}>*</Box>)
                    }
                </Box>
                <Box>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                type={type}
                                value={field.value || ''}
                                onChange={e => {
                                    const value = type === 'number' && e.target.value !== '' ? +e.target.value : e.target.value.toString()
                                    setValue(name, value)
                                }}
                            />
                        )}
                    />
                </Box>
            </Box>
        </FormControl>
    )
}

export default FormInput