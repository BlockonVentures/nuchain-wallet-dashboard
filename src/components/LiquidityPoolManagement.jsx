import React from "react";
import Arrow from "../assets/images/circular-arrow.png";
import LiquidityPoolTransactionChart from "./Charts/BarChart/LiquidityPoolTransactionChart";
import PoolTable from "./PoolTable";

const LiquidityPoolManagement = () => {
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
      <div className="grid xl:grid-col-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center place-items-center gap-y-5 gap-2">
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
              Total Value Locked
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
            <div className="text-gray-500 text-[10.5px]">Pool Balance</div>
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
            <div className="text-gray-500 text-[10.5px]">Liquid Providers</div>
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
              Pool Utilization Rate
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
              Real Time Transaction
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
            <div className="text-gray-500 text-[10.5px]">Active Swap Rate</div>
            <p className="text-lg font-bold mb-0">3504</p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 gap-3">
        {/* Placeholder for chart */}

        <PoolTable transactions={transactionsData} />
        <LiquidityPoolTransactionChart />
      </div>
    </div>
  );
};

export default LiquidityPoolManagement;
