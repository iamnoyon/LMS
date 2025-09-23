import React from 'react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/next-js'

const Loader = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='80vh'>
      <Image src="/circles.svg" alt="Loading..." width={45} height={45} />
    </Box>
  )
}

export default Loader