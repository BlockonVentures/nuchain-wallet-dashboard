import React from "react";
import Arrow from "../assets/images/circular-arrow.png";
import UserRegistrationChart from "./Charts/AreaChart/UserRegistrationChart";
import ExchangeRateChart from "./Charts/AreaChart/ExchangeRateChart";
import TransactionVolumeChart from "./Charts/BarChart/TransactionVolumeChart";
import CardHistory from "./Charts/CardHistory";
import TransactionTable from "./TransactionTable";
import LiquidityPoolChart from "./Charts/PieChart/LiquidityPoolChart";
import StakingPoolChart from "./Charts/PieChart/StakingPoolChart";

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
    <div className=" space-y-5 mx-3">
      <div className="grid xl:grid-col-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-items-center place-items-center gap-y-5">
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg  ">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg  ">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg ">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg ">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg ">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md p-2 rounded-lg">
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
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">
            New User Registration Trends
          </h3>
          {/* Placeholder for chart */}
          <div className="bg-gray-100 rounded-lg">
            <UserRegistrationChart />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <div className="bg-white shadow-md p-6 rounded-lg"> */}
          <TransactionVolumeChart />
          {/* </div> */}
          <CardHistory />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Exchange Rate Trends</h3>
          {/* <h3 className="text-lg font-bold mb-4">Exchange Rate Trends</h3> */}
          {/* Placeholder for chart */}
          <div className=" bg-gray-100 rounded-lg">
            <ExchangeRateChart />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Liquidity Pool</h3>
            <LiquidityPoolChart />
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Staking Pool Statistics</h3>
            <StakingPoolChart />
          </div>
        </div>
      </div>

      {/* jjjj */}
      <div className="grid  grid-cols-[75%_25%] gap-4">
        <TransactionTable transactions={transactionsData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <div className="bg-white shadow-md p-6 rounded-lg"> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
