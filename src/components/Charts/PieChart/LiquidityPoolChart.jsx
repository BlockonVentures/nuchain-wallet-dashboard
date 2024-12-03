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

  const pieLabels = ["ETH", "BTC", "BNB", "SOL", "ADA", "XRP", "ATOM", "DOGE"];
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
<<<<<<< HEAD
        legend: {
          fontSize: "12px",
          markers: {
            width: 8, // Smaller marker size for legend
            height: 8,
          },
        },
=======
        // legend: {
        //   fontSize: "12px",
        //   markers: {
        //     width: 8, // Smaller marker size for legend
        //     height: 8,
        //   },
        // },
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
      },
    ],
    colors: ["#C7329F", "#8712C2", "#872168"], // Customize the colors
    legend: {
<<<<<<< HEAD
=======
      show: false,
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
      position: "right", // Position of the legend
      fontSize: "9px",
    },
    stroke: {
      width: 0, // Removes the border line between the segments
    },
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center w-full p-4">
=======
    <div className="flex items-center justify-center h-[260px] w-full p-4">
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
      <Chart
        options={pieOptions}
        series={pieSeries}
        type="pie"
        height="100%"
<<<<<<< HEAD
        width={"95%"}
        data-testid="liduidityPool-chart"
=======
        width={"100%"}
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
      />
    </div>
  );
};

export default LiquidityPoolChart;
