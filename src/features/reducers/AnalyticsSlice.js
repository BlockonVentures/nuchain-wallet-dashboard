import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAnalyticsThunk } from "../thunks/AnalyticsThunk";

// Thunk to fetch analytics

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    analytics: [],
    loading: false,
    loader:{},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.error = action.error.message;
      });
  },
});

export default analyticsSlice.reducer;

