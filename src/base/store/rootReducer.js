import { combineReducers } from "redux";

import AnalyticsSlice from "../../features/reducers/AnalyticsSlice";

const rootReducer = combineReducers({
  // home:HomeSlice,
  // wallet:walletSlice,
  analytics: AnalyticsSlice,
  // information:InformationSlice
});

export default rootReducer;
