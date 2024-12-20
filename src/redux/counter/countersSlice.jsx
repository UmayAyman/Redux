import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
        state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1;
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload;
    },
    multiply: (state) => {
        state.value *=2
    }
    },
});

export const { increment, decrement, multiply, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;


//slice means you want to store particular thing and want to write functions related to that