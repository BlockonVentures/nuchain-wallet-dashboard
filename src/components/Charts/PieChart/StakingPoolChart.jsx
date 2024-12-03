import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const StakingPoolChart = () => {
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  const pieSeries = analytics?.staking_pool
    ? [
        analytics?.staking_pool?.total_amount,
        analytics?.staking_pool?.user_participation,
        analytics?.staking_pool?.rewards,
      ]
    : []; // Example data

  const pieLabels = [
    "Total Amount Staked",
    "User Participation Rates",
    "Rewards Distribution",
  ];

  const pieOptions = {
    chart: {
      type: "pie", // Pie chart type
      height: 250, // Height of the chart
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
            height: "100%",
          },
        },
      },
    ],
    colors: ["#8712C2", "#EFF4FB", "#8712C24D"], // Customize the colors
    legend: {
      show: false, // Hide default legend
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`, // Format the tooltip percentage
      },
    },
    stroke: {
      width: 0, // Removes the border line between the segments
    },
  };

  return (
    <div className="staking-pool-chart flex flex-col items-center  h-full w-full pb-4">
      {/* Chart Component */}

      <Chart
        options={pieOptions}
        series={pieSeries}
        type="pie"
        height={250}
        width={"60%"}
      />

      {/* Custom Legend / Labels */}

      <div
        className="flex justify-around w-full mt-20 text-center rounded-lg shadow py-4 overflow-auto 
        px-3 flex-nowrap gap-3
    
      "
      >
        <div className="flex flex-col">
          <div className="relative">
            <div className=" pl-4 text-[#A3AED0] ml-1 text-[8.25px] font-medium bullet1 text-left text-nowrap">
              Total Amount <br /> Staked
            </div>
          </div>
          <span className=" text-lg font-bold text-[#2B3674] text-[13.5px]">
            {analytics?.staking_pool?.total_amount || "0"}%
          </span>
        </div>

        <div className="flex flex-col ">
          <div className="relative">
            <div className=" pl-4 text-[#A3AED0] ml-1 text-[8.25px] font-medium bullet2 text-left text-nowrap">
              User Participation <br /> Rates
            </div>
          </div>
          <span className=" text-lg font-bold text-[#2B3674] text-[13.5px]">
            {analytics?.staking_pool?.user_participation || "0"}%
          </span>
        </div>
        <div className="flex flex-col ">
          <div className="relative">
            <div className=" pl-4 text-[#A3AED0] ml-1 text-[8.25px] font-medium bullet3 text-left text-nowrap">
              Rewards <br /> Distribution
            </div>
          </div>
          <span className=" text-lg font-bold text-[#2B3674] text-[13.5px]">
            {analytics?.staking_pool?.rewards || "0"}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StakingPoolChart;
