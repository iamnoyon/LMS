import { Box } from '@chakra-ui/react'
import React from 'react'
import { FormProvider } from 'react-hook-form'

const FormWrapper = ({
    children,
    methods,
    onSubmit,
    onError
}) => {
    const { handleSubmit } = methods
    return (
        <FormProvider {...methods}>
            <Box
                as='form'
                onSubmit={handleSubmit(onSubmit, onError)}
                overflow='auto'
            >
                {children}
            </Box>
        </FormProvider>
    )
}

export default FormWrapper