import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const TransactionsChart = () => {
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  const pieSeries = analytics?.staking_pool
    ? [
        analytics?.staking_pool?.total_amount,
        analytics?.staking_pool?.user_participation,
        analytics?.staking_pool?.rewards,
      ]
    : [];

  const pieLabels = ["ETH", "BTC", "BNB", "SOL", "ADA", "XRP"];
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
    colors: ["#C7329F", "#8712C2", "#872168"], // Customize the colors
    legend: {
      // show: false,
      position: "right", // Position of the legend
      fontSize: "9px",
    },
    stroke: {
      width: 0, // Removes the border line between the segments
    },
  };

  return (
    <div className="flex items-center justify-center h-[260px] w-full p-4">
      <Chart
        options={pieOptions}
        series={pieSeries}
        type="pie"
        height="100%"
        width={"100%"}
        data-testid="liduidityPool-chart"
      />
    </div>
  );
};

export default TransactionsChart;
