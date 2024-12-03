import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Add the missing import statement for rootReducer

export const store = configureStore({
  reducer: rootReducer,
});
export default store;
