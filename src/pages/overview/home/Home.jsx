import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import Chart from "react-apexcharts";

const Home = () => {
  const dispatch = useDispatch();
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalyticsThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Convert the data into percentages based on the max value

  const rawData = [35000, 37000, 37500, 34000, 36000, 38000];
  const maxValue = Math.max(...rawData);
  const percentageData = rawData.map((value) => (value / maxValue) * 100); // Calculate percentage of max value
  const series = [
    {
      name: "Total Revenue",
      data: percentageData, // Data points for the chart
    },
  ];

  var options = {
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false, // This hides the toolbar
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
      size: 0, // Default size of markers
      colors: ["#FFFFFF"], // Marker colors for each line
      strokeColors: ["#8E44AD"], // Border color of markers
      strokeWidth: 2,
      hover: {
        size: 8, // Marker size on hover
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex];
        return `<div style="font-size: 12px; color: #8E44AD;">
                  ${value.toFixed(2)}%</div>`; // Display the percentage in the tooltip
      },
    },
    xaxis: {
      categories: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
      ],
      tooltip: {
        enabled: false, // Remove the arrow on x-axis labels in the tooltip
      },
      crosshairs: {
        show: false, // Disable the vertical dashed line on hover
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`, // Display percentage on y-axis
      },
    },
    stroke: {
      width: 2, // Increase the stroke width (line thickness)
      curve: "smooth", // Optional: Make the line curve smoothly
    },
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px", color: "#7D7D7D" }}>
        Revenue Metrics from Fees
      </h3>
      <Chart options={options} series={series} type="area" height={250} />
    </div>
  );
};

export default Home;
