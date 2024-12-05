import React, { useState } from "react";
import Clock from "../assets/images/clock.png";

const AssetHistory = ({ assets }) => {
  const [filter, setFilter] = useState("All Time");
  //   const [filteredTransactions, setFilteredTransactions] =
  //     useState(transactions);

  //   const onFilterChange = (e) => {
  //     const selectedFilter = e.target.value;
  //     setFilter(selectedFilter);

  //     // Filter logic based on the selected filter
  //     if (selectedFilter === "All Time") {
  //       setFilteredTransactions(transactions);
  //     } else if (selectedFilter === "Last Week") {
  //       setFilteredTransactions(
  //         transactions.filter((transaction) => isLastWeek(transaction.dateTime))
  //       );
  //     } else if (selectedFilter === "Last Month") {
  //       setFilteredTransactions(
  //         transactions.filter((transaction) => isLastMonth(transaction.dateTime))
  //       );
  //     }
  //   };

  return (
    <div className="py-4 pr-5 overflow-x-auto bg-white rounded-md shadow-md pl-7 my-2">
      <div className="flex justify-between mb-8">
        <div className="text-xs font-bold text-[#1F2937] flex justify-center items-center">
          Asset History
        </div>
        <select
          className="rounded px-3 py-2 text-xs text-[#868686] focus:outline-none"
          value={filter}
          //   onChange={onFilterChange}
        >
          <option value="All Time">All Time</option>
          <option value="Last Week">Weekly</option>
          <option value="Last Month">Monthly</option>
        </select>
      </div>

      <div className="overflow-x-auto border-0 table_scroll">
        <table className="min-w-full border-collapse table-auto">
          <thead className="bg-white sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 font-semibold text-left text-gray-700">
                Token
              </th>
              <th className="px-4 py-2 font-semibold text-left text-gray-700">
                Date/Time
              </th>
              <th className="px-4 py-2 font-semibold text-left text-gray-700">
                Amount
              </th>
              <th className="px-4 py-2 font-semibold text-left text-gray-700">
                Type
              </th>
              <th className="px-4 py-2 font-semibold text-left text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assets && assets.length > 0 ? (
              assets.map((item) => (
                <tr
                  key={item.card}
                  className="border-t"
                  data-testid="dataTransactionTable"
                >
                  <td className="px-4 py-2">
                    <p className="mb-0 text-[13px] text-[#15162B] font-medium">
                      {item?.token}
                    </p>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-1">
                        <img src={Clock} alt="clock" />
                      </div>
                      <p className="capitalize mb-0 text-[13px] font-normal text-[#868686]">
                        {item?.dateTime}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <p className="capitalize text-[13px] text-[#15162B] font-medium mb-0">
                      ${item?.amount}
                    </p>
                  </td>
                  <td className="px-4 py-2">
                    <p className="py-2 text-[13px] text-[#000000] font-medium flex">
                      {item?.type}
                    </p>
                  </td>
                  <td className="">
                    <div className="px-4 py-2 font-normal flex mb-0">
                      <div
                        className={`${
                          item?.status === "Success"
                            ? "capitalize text-green-500 py-2"
                            : "text-[#EB6825] flex items-center justify-center p-[3px] px-[8px] gap-[8px] rounded-[12px] bg-[#EB68250D] mb-0"
                        } text-[14px] flex`}
                      >
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
                    No data available
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetHistory;
