import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: 0,
  },
  reducers: {
    balanceAdded: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { balanceAdded } = balanceSlice.actions;

export default balanceSlice.reducer;
