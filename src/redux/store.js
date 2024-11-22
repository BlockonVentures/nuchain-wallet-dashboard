import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

// Configure the store with reducers
export const store = configureStore({
  reducer: {
   auth: authReducer,
  }
});