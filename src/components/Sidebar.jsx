import React from "react";
import Logo from "../assets/images/Logo.png";

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-1/5 bg-white shadow-md">
      <div className="p-4 text-purple-700 font-bold text-xl">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="space-y-2 p-4">
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Dashboard
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Liquidity Pool
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Transaction Management
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          User Management
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Payment Gateway
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Staking Pool
        </li>
        <li className="text-gray-700 hover:bg-purple-100 p-2 rounded">
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
