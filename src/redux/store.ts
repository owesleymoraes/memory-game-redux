import sliceSpinCard from "./sliceSpinCard";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    spinCardStore: sliceSpinCard,
  },
});

export default store;
