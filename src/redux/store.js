import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./reducers/balanceSlice";

const rootReducer = combineReducers({
  balance: balanceSlice,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
