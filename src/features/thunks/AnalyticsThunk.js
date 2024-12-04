import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch users
export const fetchAnalyticsThunk = createAsyncThunk(
  "/fetchAnalytics",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/data");

      return response.data;
    } catch (error) {
      throw Error(error.response?.data?.message || error.message);
    }
  }
);
