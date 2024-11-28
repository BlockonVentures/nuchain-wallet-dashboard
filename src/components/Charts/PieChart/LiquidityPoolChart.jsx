import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const LiquidityPoolChart = () => {
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  const pieSeries = analytics?.staking_pool
    ? [
        analytics?.staking_pool?.total_amount,
        analytics?.staking_pool?.user_participation,
        analytics?.staking_pool?.rewards,
      ]
    : []; // Example data: 40% and 60%

  const pieLabels = Object.keys(analytics?.staking_pool); // Labels for the pie chart

  // Options for the Pie Chart
  const pieOptions = {
    chart: {
      type: "pie", // Pie chart type
      height: 280, // Height of the chart
    },
    labels: pieLabels, // Pie chart labels
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: "100%",
          },
        },
      },
    ],
    colors: ["#8712C2", "#EFF4FB", "#8712C24D"], // Customize the colors
    legend: {
      position: "right", // Position of the legend
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`, // Format the tooltip percentage
      },
    },
  };

  return (
    <Chart options={pieOptions} series={pieSeries} type="pie" height={250} />
  );
};

export default LiquidityPoolChart;
