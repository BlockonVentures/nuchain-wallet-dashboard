import React, { useState } from "react";
import DoubleArrow from "../assets/images/double-arrow.png";
import CheckCircle from "../assets/images/CheckCircle.png";
import WrongIcon from "../assets/images/WrongIcon.png";
import User from "../assets/images/user.png";
import Clock from "../assets/images/clock.png";
import Chevrons from "../assets/images/chevrons-up-down.png";

const PoolTable = ({ transactions }) => {
  return (
    <div className="py-4 pr-5 overflow-x-auto bg-white rounded-md shadow-md pl-7">
      <div className="flex justify-between mb-8">
        <div className="text-[22px] font-bold text-[#1F2937] flex justify-center items-center">
          Pool Creation and Configuration
        </div>
      </div>

      <div className="overflow-x-auto border-0 table_scroll">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="flex items-center gap-2 px-2 py-2 font-semibold text-left text-[#1F2937] text-base">
                Token Pair
                {/* <button className="w-4 h-4 ">
                  <img src={DoubleArrow} alt="DoubleArrow" />
                </button> */}
              </th>
              <th className="font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
                Initial Liquidity
              </th>
              <th className="flex items-center gap-2 px-2 py-2  font-semibold text-left text-[#1F2937] text-base">
                Pool Ratio
                {/* <button className="w-4 h-4 ">
                  <img src={DoubleArrow} alt="DoubleArrow" />
                </button> */}
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
                Reward Structure
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
                Min Liquidity
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
                Max Liquidity
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
                Slippage Tolerance
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.length > 0 ? (
              transactions?.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                  data-testid="dataTransactionTable"
                >
                  <td className="gap-2 px-2 py-2">
                    <p className="mb-0 text-lg font-medium text-[#868686]">
                      #{item?.id}
                    </p>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize mb-0 text-lg font-medium text-[#868686]">
                        23 September
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize text-lg font-medium mb-0 text-[#868686]">
                        {item?.recipient}
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="mb-0">
                      <div
                        className={`py-2 text-lg font-medium flex text-[#868686]`}
                      >
                        +${item?.amount || 0}
                      </div>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className={`font-normal flex mb-0`}>
                      <div
                        className={` 
                      
                        text-lg font-medium flex text-[#868686]`}
                      >
                        {/* {item?.status === "Active" ? (
                          <img src={CheckCircle} alt="CheckCircle" />
                        ) : (
                          <div className="flex w-6 h-6 mr-1">
                            <img src={WrongIcon} alt="WrongIcon" />
                          </div>
                        )} */}
                        {item?.status}
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <h1 data-testid="noDataTransactionTable">
                    {" "}
                    No data avialibile
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* <div className="mt-4 text-center">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default PoolTable;
