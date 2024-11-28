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
    : [];

  const pieLabels = ["a", "b", "c"];
  //   Object.keys(analytics?.staking_pool); // Labels for the pie chart

  // Options for the Pie Chart
  const pieOptions = {
    chart: {
      type: "pie", // Pie chart type
      height: "100%", // Height of the chart (relative to parent container)
    },
    labels: pieLabels, // Pie chart labels
    dataLabels: {
      enabled: false, // Disable percentage labels
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: "100%", // Ensure responsive height for smaller screens
          },
        },
      },
    ],
    colors: ["#8712C2", "#EFF4FB", "#8712C24D"], // Customize the colors
    legend: {
      position: "bottom", // Position of the legend
    },
  };

  return (
    <div className="flex items-center justify-center h-80 w-full p-4">
      <Chart options={pieOptions} series={pieSeries} type="pie" height="100%" />
    </div>
  );
};

export default LiquidityPoolChart;
