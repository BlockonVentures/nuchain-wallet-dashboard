import React from "react";
import Fire from "../assets/images/fire.png";

const PoolStatusCard = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-full 
    
    
    "
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
        <div className="w-10 h-10 flex justify-center items-center bg-[#FEEFEE] rounded-xl p-2">
          <img src={Fire} alt="Icon" />
        </div>
        <div className=" md:mt-0 md:ml-4">
          <div className="text-xs md:text-sm font-bold text-[#A3AED0]">
            Pool Status
          </div>
          <div className="text-sm md:text-base font-bold text-[#2B3674]">
            Total Number of Staking
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="text-[15px] font-bold text-[#2B3674] w-4/5 mb-12">
        Total Number of Stakers and Card Holders
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb">
        {/* Holders */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex justify-center items-center bg-[#01B574] rounded-full">
            <img
              src="https://img.icons8.com/material-outlined/24/wallet--v1.png"
              alt="Wallet Icon"
              className="w-4 h-4 text-white"
            />
          </div>
          <span className="text-sm md:text-base font-medium text-[#1B2559]">
            85 Holders
          </span>
        </div>

        {/* Staking */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex justify-center items-center bg-[#FF5E5E] rounded-full">
            <img
              src="https://img.icons8.com/material-outlined/24/stacked-layers.png"
              alt="Staking Icon"
              className="w-4 h-4 text-white"
            />
          </div>
          <span className="text-sm md:text-base font-medium text-[#1B2559]">
            999 Staking
          </span>
        </div>
      </div>

      {/* Avatars */}
      <div className="flex items-center justify-center md:justify-start space-x-[-10px] mb-4 md:mb-6">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/40?text=${index + 1}`}
            alt={`Avatar ${index + 1}`}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
        <div className="w-8 h-8 flex justify-center items-center bg-[#E2E8F0] text-[#1B2559] text-xs font-medium rounded-full border-2 border-white">
          18+
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center md:justify-start">
        <button className="bg-black text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PoolStatusCard;
