"use client"
import React from 'react'
import BarChart from '@/components/common/Charts/BarChart'
import PieChart from '@/components/common/Charts/PieChart'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import StakCard from '@/components/common/StakCard/StakCard'
import { FaChartLine, FaDollarSign, FaUserPlus, FaUsers } from 'react-icons/fa'

const Dashboard = () => {
    const stats = [
        { id: 1, title: 'Total Users', value: '1,234', icon: FaUsers, bgColor: 'red.500' },
        { id: 2, title: 'Active Sessions', value: '567', icon: FaChartLine, bgColor: 'blue.500' },
        { id: 3, title: 'New Signups', value: '89', icon: FaUserPlus, bgColor: 'green.500' },
        { id: 4, title: 'Revenue', value: '$12,345', icon: FaDollarSign, bgColor: 'pink.500' },
        { id: 5, title: 'Revenue', value: '$12,345', icon: FaDollarSign, bgColor: 'purple.500' },
    ];
    return (
        <Box p={4} display="flex" flexDirection="column" gap={6}>
            <Box display="grid" gridTemplateColumns="24% 24% 24% 24%" gap={4}>
                {
                    stats.map(item => (
                        <StakCard key={item.id} item={item} />
                    ))
                }
            </Box>
            <Grid gridTemplateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem colSpan={6} bg="white" p={4} boxShadow="md" borderRadius="lg">
                    <PieChart />
                </GridItem>
                <GridItem colSpan={6} bg="white" p={4} boxShadow="md" borderRadius="lg">
                    <BarChart />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Dashboard