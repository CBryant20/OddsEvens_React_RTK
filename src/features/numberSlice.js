import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedNumberBank: [],
  storedOdds: [],
  storedEvens: [],
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    addNumber: (state, { payload }) => {
      state.storedNumberBank.push(payload);
    },
    sortOne: (state) => {
      const nums = state.storedNumberBank.shift();
      if (nums % 2 === 0) {
        state.storedEvens.push(nums);
      } else {
        state.storedOdds.push(nums);
      }
    },
    sortAll: (state) => {
      for (const nums of state.storedNumberBank) {
        if (nums % 2 === 0) {
          state.storedEvens.push(nums);
        } else {
          state.storedOdds.push(nums);
        }
      }
      state.storedNumberBank = [];
    },
  },
});

export const { addNumber, sortOne, sortAll } = numberSlice.actions;

export const selectedNumBank = (store) => store.number.storedNumberBank;
export const selectOdds = (store) => store.number.storedOdds;
export const selectEvens = (store) => store.number.storedEvens;

const numberReducer = numberSlice.reducer;
export default numberReducer;
