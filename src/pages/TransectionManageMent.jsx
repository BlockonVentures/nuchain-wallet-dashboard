import React, { useState } from "react";
import CardHistory from "../components/Charts/CardHistory";
import Chevrons from "../assets/images/chevrons-up-down.png";
import DoubleArrow from "../assets/images/double-arrow.png";
import Clock from "../assets/images/clock.png";
import CheckCircle from "../assets/images/CheckCircle.png";
import WrongIcon from "../assets/images/WrongIcon.png";
import User from "../assets/images/user.png";
import CardTransactionHistory from "../components/CardTransactionHistory";
import AssetHistory from "../components/AssetHistory";

export const TransectionManageMent = () => {
  const transactions = [
    {
      card: "124567899654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "64,554",
      status: "Success",
    },
    {
      card: "124567896548",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "32,554",
      status: "Fail",
    },
    {
      card: "124567893214",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "36,654",
      status: "Success",
    },
    {
      card: "124567893654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "45,258",
      status: "Success",
    },
    {
      card: "124567899654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "64,554",
      status: "Success",
    },
    {
      card: "124567896548",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "32,554",
      status: "Fail",
    },
    {
      card: "124567893214",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "36,654",
      status: "Success",
    },
    {
      card: "124567893654",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      topUp: "10,987",
      cardAmount: "45,258",
      status: "Success",
    },
  ];

  const assetHistory = [
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "10,987",
      type: "Send",
      status: "Success",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "10,987",
      type: "Receive",
      status: "Fail",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "10,987",
      type: "Buy",
      status: "Success",
    },
    {
      token: "ETH/USDT",
      dateTime: "41 secs ago (Nov-27-2024 12:49:47 PM UTC)",
      amount: "10,987",
      type: "Sell",
      status: "Success",
    },
  ];
  const [filter, setFilter] = useState("All Time");
  return (
    <div
      className="container"
      data-testid="Transaction-Management "
    >
      <CardTransactionHistory transactions={transactions} />

      <AssetHistory assets={assetHistory} />
    </div>
  );
};
