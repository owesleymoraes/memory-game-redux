import { createSlice } from "@reduxjs/toolkit";

interface SpinCard {
  spinCard: boolean;
}

const INITIAL_STATE: SpinCard = {
  spinCard: false,
};

const sliceSpinCard = createSlice({
  name: "SpinCard",
  initialState: INITIAL_STATE,
  reducers: {
    //action
    changeSpinCard: (state) => {
      state.spinCard = !state.spinCard;
    },
  },
});

//reducer
export default sliceSpinCard.reducer;
export const { changeSpinCard } = sliceSpinCard.actions;

export const useSpinCard = (state: any) => {
  return state.spinCardStore as SpinCard;
};
