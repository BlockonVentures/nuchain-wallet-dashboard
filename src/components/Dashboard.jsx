import React from "react";
import Arrow from "../assets/images/circular-arrow.png";
import UserRegistrationChart from "./Charts/AreaChart/UserRegistrationChart";

const Dashboard = () => {
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
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Exchange Rate Trends</h3>
          {/* Placeholder for chart */}
          <div className=" bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
