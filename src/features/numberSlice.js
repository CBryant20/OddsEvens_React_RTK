import { createSlice } from "@reduxjs/toolkit";


const numberSlice = createSlice({
    name: "number",
    initialState,
    reducer: {
        addNumber: ,
        sortOne: ,
        sortAll: ,
    }
})

export const { addNumber, sortOne, sortAll } = numberSlice.actions;

const numberReducer = numberSlice.reducer;
export default numberReducer;