import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAnalyticsThunk } from "../thunks/AnalyticsThunk";

// Thunk to fetch analytics
<<<<<<< HEAD
=======
export const fetchAnalytics = createAsyncThunk(
  "/fetchAnalytics",
  fetchAnalyticsThunk
);
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    analytics: [],
    loading: false,
<<<<<<< HEAD
    loader:{},
=======
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
<<<<<<< HEAD
      .addCase(fetchAnalyticsThunk.pending, (state) => {
        state.loading = true;
        state.loader[fetchAnalyticsThunk.pending]=true
        state.error = null;
      })
      .addCase(fetchAnalyticsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loader[fetchAnalyticsThunk.pending]=false

        console.log("fulfilles", action.payload);
        state.analytics = action.payload;
      })
      .addCase(fetchAnalyticsThunk.rejected, (state, action) => {
        state.loading = false;
        state.loader[fetchAnalyticsThunk.pending]=false
=======
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
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
        state.error = action.error.message;
      });
  },
});

export default analyticsSlice.reducer;
