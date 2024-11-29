import React, { useState } from "react";
import DoubleArrow from "../assets/images/double-arrow.png";
import CheckCircle from "../assets/images/CheckCircle.png";
import WrongIcon from "../assets/images/WrongIcon.png";
import User from "../assets/images/user.png";
import Clock from "../assets/images/clock.png";
import Chevrons from "../assets/images/chevrons-up-down.png";

const TransactionTable = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [filter, setFilter] = useState("All Time");

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "All Time") {
      setFilteredTransactions(transactions);
    } else if (selectedFilter === "Last Week") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);

      const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= lastWeek;
      });

      setFilteredTransactions(filteredTransactions);
    } else if (selectedFilter === "Last Month") {
      // Implement filtering logic for the last month
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-x-auto pl-7 pr-5 py-4">
      <div className="flex justify-between mb-8">
        <div className="text-xs font-bold text-[#1F2937] flex justify-center items-center">
          Transactions
        </div>
        <select
          //   className="border border-gray-300 rounded px-4 py-2 text-[10.5px] text-[#868686]"
          className="appearance-none  rounded px-3 py-2 text-xs text-[#868686] bg-white bg-no-repeat bg-right bg-[length:12px_16px] focus:outline-none"
          value={filter}
          onChange={handleFilterChange}
          style={{
            backgroundImage: `url(${Chevrons})`, // Replace with your double-arrow icon
          }}
        >
          <option value="All Time">All Time</option>
          <option value="Last Week">Weekly</option>
          <option value="Last Month">Monthly</option>  
          {/* Add more filter options as needed */}
        </select>
      </div>

      <div className="overflow-x-auto border-0 table_scroll">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="flex items-center gap-2 px-4 py-2 text-left font-semibold text-gray-700">
                Card{" "}
                <button className="w-4 h-4 ">
                  <img src={DoubleArrow} alt="DoubleArrow" />
                </button>
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Date
              </th>
              <th className="flex items-center gap-2 px-4 py-2 text-left font-semibold text-gray-700">
                Recipient
                <button className="w-4 h-4 ">
                  <img src={DoubleArrow} alt="DoubleArrow" />
                </button>
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">
                  <p className="mb-0 text-[9px] font-normal">#{item?.id}</p>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-1">
                      <img src={Clock} alt="clock" />
                    </div>
                    <p className="capitalize mb-0 text-[9px] font-normal">
                      23 September
                    </p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2">
                      <img src={User} alt="user" />
                    </div>
                    <p className="capitalize text-[9px] font-normal mb-0">
                      {item?.recipient}
                    </p>
                  </div>
                </td>
                <td className="px-2 py-2 ">
                  <p className="mb-0">
                    <div
                      className={` ${"success_text_para capitalize text-green-500 "} py-2 text-[14px] flex`}
                    >
                      +${item?.amount || 0}
                    </div>
                  </p>
                </td>
                <td className="">
                  <p className={`  px-2 py-2  font-normal flex mb-0`}>
                    <div
                      className={` ${
                        item?.status === "Active"
                          ? "success_text_para capitalize text-green-500  py-2"
                          : "text-[#868686]"
                      } text-[14px] flex`}
                    >
                      {item?.status === "Active" ? (
                        <img src={CheckCircle} alt="CheckCircle" />
                      ) : (
                        <div className="w-6 h-6 flex mr-1">
                          <img src={WrongIcon} alt="WrongIcon" />
                        </div>
                      )}
                      {item?.status}
                    </div>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default TransactionTable;
