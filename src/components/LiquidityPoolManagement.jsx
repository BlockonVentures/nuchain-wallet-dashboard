import React from "react";
import Arrow from "../assets/images/circular-arrow.png";
import LiquidityPoolTransactionChart from "./Charts/BarChart/LiquidityPoolTransactionChart";
import PoolTable from "./PoolTable";
import TransactionsChart from "./Charts/PieChart/TransactionsChart";

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
              Total Value Locked
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
            <div className="text-gray-500 text-[10.5px]">Pool Balance</div>
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
            <div className="text-gray-500 text-[10.5px]">Liquid Providers</div>
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
              Pool Utilization Rate
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
              Real Time Transaction
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
            <div className="text-gray-500 text-[10.5px]">Active Swap Rate</div>
            <p className="mb-0 text-lg font-bold">3504</p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 gap-3">
        {/* Placeholder for chart */}
        <PoolTable transactions={transactionsData} />
        <div className="grid lg:grid-cols-[70%_30%] gap-2 lg:mr-2 ">
          <LiquidityPoolTransactionChart />
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-bold">Transactions</h3>
            <TransactionsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPoolManagement;
