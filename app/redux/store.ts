import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todoReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
