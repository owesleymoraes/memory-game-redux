import sliceSpinCard from "./sliceSpinCard";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    spinCardStore: sliceSpinCard,
  },
});

export default store;
