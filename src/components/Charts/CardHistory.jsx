import React from "react";

const CardHistory = () => {
  const cards = [
    { id: "IN34..........890", amount: "35,874 USDN", time: "Check" },
    { id: "Card 2", amount: "35,874 USDN", time: "2M ago" },
    { id: "Card 3", amount: "35,874 USDN", time: "3M ago" },
    { id: "Card 4", amount: "20,000 USDN", time: "4M ago" },
    { id: "Card 5", amount: "15,000 USDN", time: "5M ago" },
    { id: "Card 6", amount: "50,000 USDN", time: "6M ago" },
  ];

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Card History</h3>
        <button className="text-[9px]  p-2 rounded-full text-[#718096] bg-[#F3F4F6]">
          See All
        </button>
      </div>

      {/* Card List */}
      <div className=" h-60 overflow-y-auto px-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-3 ${
              card.time === "Check" ? "rounded-lg shadow" : ""
            }
           
            `}
          >
            {/* <div className="">
              <div className="font-bold text-gray-800 text-xs">{card.id}</div>
              <div
                className={`text-[9px] ${
                  card.time === "Check"
                    ? "text-purple-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {card.time}
              </div>
            </div>

          
            <div className="text-[10.5px] font-bold text-gray-800">
              {card.amount}
            </div>
            <div>check</div>
             */}

            <div>
              <div className="font-bold text-gray-800 text-xs pb-1">
                {card.id}
              </div>
              {/* <div>1</div> */}
              <div className={`text-[9px] text-[#C7329F]`}>{card.id}</div>
            </div>
            <div className="text-[10.5px] font-bold text-gray-800">
              {card.amount}
            </div>
            <div>
              {/* <button>check</button> */}
              <div
                className={`text-[9px] ${
                  card.time === "Check"
                    ? "text-purple-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {card.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHistory;
