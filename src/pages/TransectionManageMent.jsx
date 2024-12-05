import React from 'react'

export const TransectionManageMent = () => {

  const cardTransactions = [
    {
      card: "#124567899654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "$10,987",
      cardAmount: "$64,554",
      status: "Success",
    },
    {
      card: "#124567896548",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "$10,987",
      cardAmount: "$32,554",
      status: "Fail",
    },
    {
      card: "#124567893214",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "$10,987",
      cardAmount: "$36,654",
      status: "Success",
    },
    {
      card: "#124567893654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "$10,987",
      cardAmount: "$45,258",
      status: "Success",
    },
  ];

  const assetHistory = [
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "$10,987",
      type: "Send",
      status: "Success",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "$10,987",
      type: "Receive",
      status: "Fail",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "$10,987",
      type: "Buy",
      status: "Success",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "$10,987",
      type: "Sell",
      status: "Success",
    },
  ];


  return (

       <div className="container" data-testid="Transaction-Management rounded-2xl border-[1.1px] border-solid border-[#ECECEC]">
        
       <div className=" overflow-auto bg-[#FFFFFF] rounded-md shadow-md  mt-[23.09px] ml-[39.58px]" >
      <div className="flex justify-between mb-8">
        <p className="text-[22px] font-bold text-[#1F2937] flex justify-center items-center">
        Card Transaction History
        </p>

        <select name="All Time" id="">
          <option value="">fhfg</option>
          <option value="">fhfg</option>
          <option value="">fhfg</option>
          <option value="">fhfg</option>
        </select>
      </div>

      <div className="overflow-x-auto border-0 table_scroll">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="flex items-center gap-2 px-2 py-2 font-semibold text-left text-[#1F2937] text-base">
                Card
              </th>
              <th className="font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Date/Time
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Top up 
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Card Amount
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cardTransactions && cardTransactions.length > 0 ? (
              cardTransactions?.map((item) => (
                <tr
                  key={item.card}
                  className="border-t"
                >
                  <td className="gap-2 px-2 py-2">
                    <p className="mb-0 text-lg font-medium text-[#868686]">
                      {item?.card}
                    </p>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize mb-0 text-lg font-medium text-[#868686]">
                        {item?.dateTime}
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize text-lg font-medium mb-0 text-[#868686]">
                        {item?.cardAmount}
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="mb-0">
                      <div
                        className={`py-2 text-lg font-medium flex text-[#868686]`}
                      >
                        {item?.type || 0}
                      </div>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                  <span
                    className={`badge ${
                      item.status === "Success" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {item.status}
                  </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <h1 >
                    {" "}
                    No data avialibile
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>





    <div className="py-4 pr-5 mt-4 overflow-x-auto bg-white rounded-md shadow-md pl-7">
      <div className="flex justify-between mb-8">
        <div className="text-[22px] font-bold text-[#1F2937] flex justify-center items-center">
        Asset History
        </div>
      </div>

      <div className="overflow-x-auto border-0 table_scroll">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="flex items-center gap-2 px-2 py-2 font-semibold text-left text-[#1F2937] text-base">
                Token
              </th>
              <th className="font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Date/Time
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Amount
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
             Type
              </th>
              <th className=" font-semibold gap-2 px-2 py-2 text-left text-[#1F2937] text-base">
              Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assetHistory && assetHistory.length > 0 ? (
              assetHistory?.map((item) => (
                <tr
                  key={item.token}
                  className="border-t"
                >
                  <td className="gap-2 px-2 py-2">
                    <p className="mb-0 text-lg font-medium text-[#868686]">
                      {item?.token}
                    </p>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize mb-0 text-lg font-medium text-[#868686]">
                        {item?.dateTime}
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="flex items-center">
                      <p className="capitalize text-lg font-medium mb-0 text-[#868686]">
                        {item?.dateTime}
                      </p>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="mb-0">
                      <div
                        className={`py-2 text-lg font-medium flex text-[#868686]`}
                      >
                        {item?.amount || 0}
                      </div>
                    </div>
                  </td>
                  <td className="gap-2 px-2 py-2">
                    <div className="mb-0">
                      <div
                        className={`py-2 text-lg font-medium flex text-[#868686]`}
                      >
                        {item?.type || 0}
                      </div>
                    </div>
                  </td>

                  
                  <td className="gap-2 px-2 py-2">
                  <span
                    className={`badge ${
                      item.status === "Success" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {item.status}
                  </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <h1 >
                    {" "}
                    No data avialibile
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
