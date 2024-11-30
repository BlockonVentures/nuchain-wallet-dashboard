import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAnalyticsThunk } from "../thunks/AnalyticsThunk";

// Thunk to fetch analytics
export const fetchAnalytics = createAsyncThunk(
  "/fetchAnalytics",
  fetchAnalyticsThunk
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    analytics: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        console.log("fulfilles", action.payload);
        state.analytics = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default analyticsSlice.reducer;
