import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import Chart from "react-apexcharts";

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
      toolbar: {
        show: false,
      },
    },
    strokeWidth: 2,
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
    markers: {
      size: 4,
      shape: "circle",
      colors: ["#8712C2"],
      strokeColors: ["#fff", "red"],
      strokeOpacity: 1,
      strokeWidth: 2,
      hover: {
        size: 5,
      },
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
    <div>
      {/* <h3 style={{ marginBottom: "10px", color: "#7D7D7D" }}>
        User Registration
      </h3> */}

      <Chart options={options} series={series} type="area" height={260} />
    </div>
  );
};

export default UserRegistrationChart;
