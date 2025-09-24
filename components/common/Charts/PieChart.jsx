"use client"
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
import { Box } from '@chakra-ui/react';

const PieChart = ({
    title='Default Title',
    data=[],
    height='400px',
    width='100%',
    name='Pie Chart'

}) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (!chartInstanceRef.current) {
            chartInstanceRef.current = echarts.init(chartRef.current);
        }

        const option = {
            title: {
                text: title,
                left: "center",
            },
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "horizontal",
                left: "left",
            },
            series: [
                {
                    name: name,
                    type: "pie",
                    radius: "50%",
                    data: [
                        { value: 1048, name: "Search Engine" },
                        { value: 735, name: "Direct" },
                        { value: 580, name: "Email" },
                        { value: 484, name: "Union Ads" },
                        { value: 300, name: "Video Ads" },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        chartInstanceRef.current.setOption(option);
        // Resize chart on window resize
        const handleResize = () => {
            chartInstanceRef.current && chartInstanceRef.current.resize();
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (chartInstanceRef.current) {
                chartInstanceRef.current.dispose();
                chartInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <Box ref={chartRef} style={{ width: "100%", height: "400px" }} />
    )
}

export default PieChart