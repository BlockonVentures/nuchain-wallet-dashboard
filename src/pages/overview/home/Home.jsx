import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalytics } from "../../../features/reducers/AnalyticsSlice";
import { fetchAnalyticsThunk } from "../../../features/thunks/AnalyticsThunk";

const Home = () => {
  const dispatch = useDispatch();
  const { analytics, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalyticsThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("analytics", analytics);
  return <div>Home</div>;
};

export default Home;
