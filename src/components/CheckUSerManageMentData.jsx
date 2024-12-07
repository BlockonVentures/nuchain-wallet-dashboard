import React from "react";
import arrow_circle from "../assets/images/circular-arrow-1.png";
import wallet1 from "../assets/images/wallet-1.png";
import transaction from "../assets/images/transaction-1.png";
import ventilation from "../assets/images/ventilation-2.png";

import ETHEREUM from "../assets/images/ETHEREUM-Symbol.png";
import BITCOIN from "../assets/images/BITCOIN-Symbol.png";
import TETHER from "../assets/images/TETHER-Symbol.png";
import SOLANA from "../assets/images/SOLANA-Symbol.png";
import POLYGON from "../assets/images/POLYGON-Symbol.png";
import USDCOIN from "../assets/images/USDCOIN-Symbol.png";
export const CheckUSerManageMentData = () => {
  return (
    <div data-testid="checkuserManagemantData">
      <div className="flex flex-col gap-6 p-6">
        {/* Account Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="bg-white flex gap-2 items-center  shadow-md  rounded-[15px] p-4 text-center">
            <div className="h-[57px] w-[57px] bg-[#F4F7FE]  rounded-full flex items-center justify-center">
              <img
                className="h-[24.5px] w-[24.5px]"
                src={arrow_circle}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#718096] font-medium text-[14.52px]  mb-0">
                Account Address
              </p>
              <h3 className="text-[#2B3674] font-bold text-start text-[24.89px] leading-[33.19px] tracking-[-0.02em]">
                07jh...iu948
              </h3>
            </div>
          </div>
          <div className="bg-white flex gap-2 items-center  shadow-md  rounded-[15px] p-4 text-center">
            <div className="h-[57px] w-[57px] bg-[#F4F7FE]  rounded-full flex items-center justify-center">
              <img className="h-[24.5px] w-[24.5px]" src={wallet1} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#718096] font-medium text-[14.52px]  mb-0">
                No. Of Cards
              </p>
              <h3 className="text-[#2B3674] font-bold text-start text-[24.89px] leading-[33.19px] tracking-[-0.02em]">
                5
              </h3>
            </div>
          </div>
          <div className="bg-white flex gap-2 items-center  shadow-md  rounded-[15px] p-4 text-center">
            <div className="h-[57px] w-[57px] bg-[#F4F7FE]  rounded-full flex items-center justify-center">
              <img className="h-[24.5px] w-[24.5px]" src={transaction} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#718096] font-medium text-[14.52px]  mb-0">
                Total USDN
              </p>
              <h3 className="text-[#2B3674] font-bold text-start text-[24.89px] leading-[33.19px] tracking-[-0.02em]">
                642
              </h3>
            </div>
          </div>
          <div className="bg-white flex gap-2 items-center  shadow-md  rounded-[15px] p-4 text-center">
            <div className="h-[57px] w-[57px] bg-[#F4F7FE]  rounded-full flex items-center justify-center">
              <img className="h-[24.5px] w-[24.5px]" src={ventilation} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[#718096] font-medium text-[14.52px]  mb-0">
                Staked Amount
              </p>
              <h3 className="text-[#2B3674] font-bold text-start text-[24.89px] leading-[33.19px] tracking-[-0.02em]">
                1000
              </h3>
            </div>
          </div>
        </div>

        {/* Holdings and Overall Data */}
        <div className="flex gap-3 lg:flex-row md:flex-col sm:flex-col">
          {/* Holdings */}
          <div className="bg-white lg:min-w-[488px] shadow-md rounded-[20px] p-6">
            <h3 className="font-bold text-[24.89px] leading-[33.19px] tracking-[-0.02em] mb-4">
              Holdings
            </h3>
            <div className="space-y-4">
              {[
                {
                  img: ETHEREUM,
                  name: "Ethereum",
                  value: "59.47 ETH",
                  usd: "$79,379.2",
                  change: "+0.75%",
                },
                {
                  img: BITCOIN,
                  name: "Bitcoin",
                  value: "0.259 BTC",
                  usd: "$5,036.9",
                  change: "-1.75%",
                },
                {
                  img: TETHER,
                  name: "Tether",
                  value: "1938.47 USDT",
                  usd: "$1,939.19",
                  change: "+0.06%",
                },
                {
                  img: SOLANA,
                  name: "Solana",
                  value: "257.93 SOL",
                  usd: "$8,573.58",
                  change: "+0.38%",
                },
                {
                  img: POLYGON,
                  name: "Polygon",
                  value: "148.54 MATIC",
                  usd: "$4,937.46",
                  change: "-1.36%",
                },
                {
                  img: USDCOIN,
                  name: "USD Coin",
                  value: "193.49 USDC",
                  usd: "$193.58",
                  change: "-0.02%",
                },
              ].map((asset, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center border-b border-[#EEEEEE]"
                >
                  <div className="w-[50px] h-[50px] ">
                    <img className="h-full w-full" src={asset.img} alt="" />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-[16.71px] leading-[25.07px] mb-0">
                        {asset.name}
                      </p>
                      <div className="flex gap-2">
                        <p className="text-[#838383] font-normal text-[12.53px] leading-[20.89px] mb-0">
                          {asset.usd}
                        </p>
                        <span
                          className={`text-sm ${
                            asset.change.startsWith("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {asset.change}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <p className="font-semibold text-[16.71px] leading-[25.07px] mb-0 text-end">
                        {asset.value}
                      </p>
                      <p className="text-[#838383] font-normal text-[12.53px] leading-[20.89px] mb-0 text-end">
                        {asset.usd}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Data */}
          <div className="bg-white shadow-md rounded-[20px] p-6 w-full">
            <h3 className="font-bold text-[24.89px] leading-[33.19px] tracking-[-0.02em] mb-4">
              Overall Data
            </h3>
            <div className="space-y-3">
              {[
                { label: "Total Transaction", value: "100" },
                { label: "No. Of Swapped Amount", value: "1000" },
                { label: "No. Of Assets", value: "100" },
                { label: "Holdings Amount", value: "635474 USDN" },
                { label: "Total Staked Amount", value: "6000 USDN" },
                { label: "Total Unstaked Amount", value: "283656 USDN" },
              ].map((data, index) => (
                <div className="flex items-center justify-between border-b border-[#EEEEEE] p-2">
                  <p className="font-semibold text-[15.6px] leading-[23.4px] mb-0">
                    {data.label}
                  </p>
                  <p className="text-[#2B3674] font-semibold text-[14.94px] leading-[30.99px] tracking-[-0.02em] mb-0">
                    {data.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
