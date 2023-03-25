import { useDispatch } from "react-redux";
import sliceSpinCard from "./sliceSpinCard";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    spinCardStore: sliceSpinCard,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
