import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import Chart from "react-apexcharts";

const ExchangeRateChart = () => {
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  const rawData = analytics?.exchange_rate?.data || [];
  const maxValue = Math.max(...rawData);
  const percentageData = rawData.map((value) => (value / maxValue) * 100);

  const series = [
    {
      name: "Total Revenue",
      data: percentageData,
    },
  ];

  const options = {
    chart: {
      height: 280,
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
    grid: {
      show: false,
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
      size: 0,
      colors: ["#FFFFFF"],
      strokeColors: ["#8E44AD"],
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex];
        return `<div style="font-size: 12px; color: #8E44AD;">
                  ${value.toFixed(2)}%</div>`;
      },
    },
    xaxis: {
      categories: analytics?.exchange_rate?.categories || [],
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
      curve: "smooth",
    },
  };

  return (
    <div className="bg-white">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ExchangeRateChart;
