import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";
import Dashboard from "../../../components/Dashboard";

const Home = () => {
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

  return <Dashboard />;
};

export default Home;
