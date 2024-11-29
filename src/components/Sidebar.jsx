import React from "react";
import Logo from "../assets/images/Logo.png";
import home from "../assets/images/home.png";
import liquidityPool from "../assets/images/liquidity-pool.png";
import paymentGateway from "../assets/images/payment-gateway.png";
import profile from "../assets/images/profile.png";
import stakingPool from "../assets/images/staking-pool.png";
import transactionManagement from "../assets/images/transaction-management.png";
import userManagement from "../assets/images/user-management.png";

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-[26%] bg-white shadow-lg h-screen">
      {/* Logo Section */}
      <div className="p-4 flex items-center mb-7">
        <img src={Logo} alt="logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Menu */}
      <ul className="space-y-6 pl-0 px-4">
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          {/* <span className="material-icons-outlined mr-3 text-purple-700">
            dashboard
          </span> */}
          <span className="w-5 h-5">
            <img src={home} alt="home" />
          </span>

          <span className="ml-1 text-[#8712C2] text-xs font-bold">
            Dashboard
          </span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={liquidityPool} alt="home" />
          </span>
          <span className="ml-1">Liquidity Pool</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={transactionManagement} alt="home" />
          </span>
          <span className="ml-1">Transaction Management</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={userManagement} alt="home" />
          </span>
          <span className="ml-1">User Management</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={paymentGateway} alt="home" />
          </span>
          <span className="ml-1">Payment Gateway</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={stakingPool} alt="home" />
          </span>
          <span className="ml-1">Staking Pool</span>
        </li>
        <li className="text-[#6F7074] text-[11.25px] flex items-center  rounded-lg cursor-pointer transition-all duration-200">
          <span className="w-5 h-5">
            <img src={profile} alt="home" />
          </span>
          <span className="ml-1">Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
