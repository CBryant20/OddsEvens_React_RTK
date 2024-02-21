import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    input: "",
    storedNumberBank: [],
    storedOdds: [],
    storedEvens: [],
  },
  reducer: {
    addNumber: (state, { payload }) => {
      payload = +state.input;
      state.storedNumberBank.push(payload);
      state.input = "";
    },
    sortOne: (state, { payload }) => {
      payload = state.storedNumberBank.shift();
      if (payload % 2 === 0) {
        state.storedEvens.push(payload);
      } else {
        state.storedOdds.push(payload);
      }
    },
    sortAll: (state, { payload }) => {
      while (state.storedNumberBank.length) {
        if (payload % 2 === 0) {
          state.storedEvens.push(payload);
        } else {
          state.storedOdds.push(payload);
        }
      }
    },
  },
});

export const { addNumber, sortOne, sortAll } = numberSlice.actions;

const numberReducer = numberSlice.reducer;
export default numberReducer;
