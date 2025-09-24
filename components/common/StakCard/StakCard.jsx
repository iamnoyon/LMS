"use client"
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaClock, FaEthereum } from 'react-icons/fa'

const StakCard = ({ item }) => {
    return (
        <Box height="80px" bg={item.bgColor} boxShadow="md" borderRadius="lg" px={3}>
            <Grid templateColumns="repeat(12, 1fr)" py={2}>
                <GridItem colSpan={4}>
                    <Icon as={item.icon} fontSize="28px" />
                </GridItem>
                <GridItem colSpan={8} textAlign="right" justifyContent="space-between">
                    <Flex direction="column" justify="space-between">
                        <Text fontWeight={600}>{item.title}</Text>
                        <Text fontWeight={500}>{item.value}</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default StakCard