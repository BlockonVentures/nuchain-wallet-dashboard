import React, { useState } from "react";
import Chart from "react-apexcharts";

const LiquidityPoolTransactionChart = () => {
  const [selectedOption, setSelectedOption] = useState("Weekly"); // Default selection

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
    },
    fill: {
      type: "gradient", // Enable gradient fill
      gradient: {
        shade: "light",
        type: "vertical", // Vertical gradient
        shadeIntensity: 0.5,
        gradientToColors: ["#40095C08"], // Target gradient color
        inverseColors: false,
        opacityFrom: 1, // Starting opacity (100%)
        opacityTo: 0.03, // Ending opacity (3%)
        stops: [0, 100], // Start and end positions for gradient
      },
    },

    colors: ["#8712C2"], // Gradient purple color
    plotOptions: {
      bar: {
        // borderRadius: 5,
        // borderRadiusApplication: "end", // Rounds the top edges only
        columnWidth: "8%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["01", "02", "03", "04", "05", "06", "07"],
      axisBorder: {
        show: false, // Removes the x-axis border line
      },
      axisTicks: {
        show: false, // Removes the ticks on the x-axis
      },

      labels: {
        style: {
          colors: "#9CA3AF", // Set the label color (the numbers on the x-axis)
          fontSize: "13.76px", // Optional: Change font size of x-axis labels
          fontWeight: 500, // Optional: Set font weight
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF", // Set the label color (the numbers on the x-axis)
          fontSize: "13.76px", // Optional: Change font size of x-axis labels
          fontWeight: 500, // Optional: Set font weight
        },
      },
    },
    // grid: {
    //   show: false,
    //   borderColor: "#f1f1f1",
    // },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => `${value} Visitors`,
      },
    },
  };

  const chartData = {
    series: [
      {
        name: "Visitors",
        data: [1.2, 2.3, 2.8, 3.4, 2.1, 3.0, 2.6],
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg p-[18px] rounded-lg w-full">
      {/* Header Section */}
      {/* <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-[10.5px] font-semibold text-[#A3AED0]">
            Transaction Volumes
          </div>
          <div className="text-[25.5px] font-bold">
            {"2.579"}
            <span className="text-[10.5px] text-[#01B574]">Visitors</span>
          </div>
        </div>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="border border-gray-300 rounded-md px-3 py-1 text-[#718096] text-[10.5px] font-normal focus:outline-none focus:ring-1"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div> */}
      <div className="text-[#2B3674] text-xl font-semibold">
        Liquidity Pool Transaction
      </div>

      {/* Chart */}
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="bar"
        height={260}
      />
    </div>
  );
};

export default LiquidityPoolTransactionChart;
