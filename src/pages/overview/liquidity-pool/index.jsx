import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import StakingPoolChart from "../../../components/Charts/PieChart/StakingPoolChart";
import UserRegistrationChart from "../../../components/Charts/AreaChart/UserRegistrationChart";
import ExchangeRateChart from "../../../components/Charts/AreaChart/ExchangeRateChart";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import Dashboard from "../../../components/Dashboard";

const LiquidityPool = () => {
  const dispatch = useDispatch();
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalyticsThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!analytics || !analytics.exchange_rate || !analytics.user_registration) {
    return <p>Data not available</p>;
  }

  return <>ddd</>;
};

export default LiquidityPool;
