"use client"
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Box } from "@chakra-ui/react";

const BarChart = ({

}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);

        const option = {
            title:{
                text: 'Bar Chart Example',
                left: 'center',
            },
            tooltip: {
            },
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: "bar",
                    itemStyle: {
                        borderRadius: [5, 5, 0, 0], // rounded bars (optional)
                    },
                },
            ],
        };

        myChart.setOption(option);

        // handle resize
        const handleResize = () => {
            myChart.resize();
        };
        window.addEventListener("resize", handleResize);

        // cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            myChart.dispose();
        };
    }, []);

    return <Box ref={chartRef} w="100%" h="400px" />;
};

export default BarChart;
