import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/countersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

