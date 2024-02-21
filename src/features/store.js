import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./numberSlice";

const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});

export default store;
