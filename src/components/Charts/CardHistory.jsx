import React from "react";

const CardHistory = () => {
  const cards = [
    { id: "IN34....890", amount: "35,874 USDN", time: "Check" },
    { id: "Card 2", amount: "35,874 USDN", time: "2M ago" },
    { id: "Card 3", amount: "35,874 USDN", time: "3M ago" },
    { id: "Card 4", amount: "20,000 USDN", time: "4M ago" },
    { id: "Card 5", amount: "15,000 USDN", time: "5M ago" },
    { id: "Card 6", amount: "50,000 USDN", time: "6M ago" },
  ];

  return (
<<<<<<< HEAD
    <div className="w-full max-w-md px-3 py-4 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
=======
    <div className="bg-white shadow-lg py-4 px-3 rounded-lg w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        <h3 className="text-lg font-semibold text-gray-800">Card History</h3>
        <button className="text-[9px]  p-2 rounded-full text-[#718096] bg-[#F3F4F6]">
          See All
        </button>
      </div>

      {/* Card List */}
<<<<<<< HEAD
      <div className="px-2 overflow-y-auto h-60">
=======
      <div className=" h-60 overflow-y-auto px-2">
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-3 px-2 ${
              card.time === "Check" ? "rounded-lg shadow" : ""
            }
           
            `}
          >
            <div>
<<<<<<< HEAD
              <div className="pb-1 text-xs font-bold text-gray-800">
                {card.id}
              </div>
              {/* <div>1</div> */}
              <div className={`text-[9px] text-[#C7329F]`} data-testid={card.id}>{card.id}</div>
=======
              <div className="font-bold text-gray-800 text-xs pb-1">
                {card.id}
              </div>
              {/* <div>1</div> */}
              <div className={`text-[9px] text-[#C7329F]`}>{card.id}</div>
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
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
                {card.time === "Check" ? (
                  <button className="p-2 bg-[#15162B] rounded-xl text-[#FFFFFF]">
                    Check
                  </button>
                ) : (
                  card.time
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHistory;
