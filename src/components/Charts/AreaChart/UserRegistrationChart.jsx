import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import Chart from "react-apexcharts";
import CirclePointer from "../../../assets/images/circle-pointer.png";

const UserRegistrationChart = () => {
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  const series = [
    {
      name: "New User Registrations",
      data: analytics?.user_registration?.data || [],
    },
  ];

  const options = {
    chart: {
      height: 260,
      type: "area",
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: ["#8712C2"],
    dataLabels: {
      enabled: false,
    },
    series: series,
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.6,
        stops: [0, 90, 100],
      },
    },
    annotations: {
      points: analytics?.user_registration?.data?.map((value, index) => ({
        x: analytics?.user_registration?.categories[index],
        y: value,
        image: {
          path: CirclePointer, // Diamond shape image URL
          width: 20,
          height: 20,
        },
        mouseEnter: (e) => console.log("mouseEnter", e, e.x, e.y),
        mouseLeave: (e) => console.log("mouseLeave", e, e.x, e.y),
      })),
    },
    tooltip: {
      enabled: false,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex];
        return `<div style="font-size: 12px; color: #8E44AD;">
                  ${value.toFixed(2)}%</div>`;
      },
    },
    xaxis: {
      categories: analytics?.user_registration?.categories || [],
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
      axisBorder: {
        show: false, // Removes the x-axis border line
      },
      axisTicks: {
        show: false, // Removes the ticks on the x-axis
      },
      labels: {
        style: {
          colors: "#B0BBD5", // Set the label color (the numbers on the x-axis)
          fontSize: "9px", // Optional: Change font size of x-axis labels
          fontWeight: 700, // Optional: Set font weight
        },
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  };

  return (
    <div className="bg-white">
      <Chart
        className={"user_registration_chart"}
        options={options}
        series={series}
        type="area"
        height={260}
         data-testid="UserRegistrationChart"
      />
    </div>
  );
};

export default UserRegistrationChart;
