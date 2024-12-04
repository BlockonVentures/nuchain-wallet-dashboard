import React from "react";
import Arrow from "../assets/images/circular-arrow.png";
import UserRegistrationChart from "./Charts/AreaChart/UserRegistrationChart";
import ExchangeRateChart from "./Charts/AreaChart/ExchangeRateChart";
import TransactionVolumeChart from "./Charts/BarChart/TransactionVolumeChart";
import CardHistory from "./Charts/CardHistory";
import TransactionTable from "./TransactionTable";
import LiquidityPoolChart from "./Charts/PieChart/LiquidityPoolChart";
import StakingPoolChart from "./Charts/PieChart/StakingPoolChart";
import PoolStatusCard from "./PoolStatusCard";

const Dashboard = () => {
  const transactionsData = [
    {
      id: "TX12345",
      date: "2023-11-28",
      recipient: "Alice",
      amount: 64554,
      status: "Pending",
    },
    {
      id: "TX12345",
      date: "2023-11-28",
      recipient: "Alice",
      amount: 64554,
      status: "Active",
    },
    {
      id: "TX12345",
      date: "2023-11-28",
      recipient: "Alice",
      amount: 64554,
      status: "Active",
    },
    // ... other transactions
  ];

  return (
    <div className="mx-3 space-y-5 ">
      <div className="grid grid-cols-2 gap-2 xl:grid-col-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-items-center place-items-center gap-y-5">
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          {/* Image */}
          <div className="flex justify-center items-center w-[42px] h-[42px] bg-purple-100 rounded-full flex-shrink-0">
            <img
              src={Arrow}
              alt="Circulation Icon"
              className="h-[18px] w-[18px] " // Properly constrain image size
            />
          </div>
          {/* Text */}
          <div className="ml-2">
            <div className="text-gray-500 text-[10.5px]">
              Total USDN Circulation
            </div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid gap-3 xl:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-bold">
            New User Registration Trends
          </h3>
          {/* Placeholder for chart */}
          <div className="bg-gray-100 rounded-lg">
            <UserRegistrationChart />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* <div className="p-6 bg-white rounded-lg shadow-md"> */}
          <TransactionVolumeChart />
          {/* </div> */}
          <CardHistory />
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-bold">Exchange Rate Trends</h3>
          {/* <h3 className="mb-4 text-lg font-bold">Exchange Rate Trends</h3> */}
          {/* Placeholder for chart */}
          <div className="bg-gray-100 rounded-lg ">
            <ExchangeRateChart />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-bold">Liquidity Pool</h3>
            <LiquidityPoolChart />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-bold">Staking Pool Statistics</h3>
            <StakingPoolChart />
          </div>
        </div>
      </div>

      <div className="grid  lg:grid-cols-[70%_28%] md gap-4 mb-4">
        <TransactionTable transactions={transactionsData} />

        {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-1"> */}
        {/* <div className="p-6 bg-white rounded-lg shadow-md"> */}
        <PoolStatusCard />
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
