import { createSlice } from "@reduxjs/toolkit";

interface CardProps {
  id: number;
  key: number;
  nameCard: string;
  spin: boolean;
}

interface SpinCard {
  spinCard: boolean;
  listCards: CardProps[];
}

const INITIAL_STATE: SpinCard = {
  spinCard: true,
  listCards: [
    { id: 1, key: 1, nameCard: "carta 01", spin: true },
    { id: 2, key: 2, nameCard: "carta 02", spin: true },
    { id: 3, key: 3, nameCard: "carta 03", spin: true },
  ],
};

const sliceSpinCard = createSlice({
  name: "SpinCard",
  initialState: INITIAL_STATE,
  reducers: {
    //action
    changeSpinCard: (state, action) => {
      const cards = state.listCards.slice();
      const index = cards.findIndex((c) => c.key === action.payload);
      if (index > -1) {
        cards[index].spin = !cards[index].spin;
      }
      
    },
  },
});

//reducer
export default sliceSpinCard.reducer;
export const { changeSpinCard } = sliceSpinCard.actions;

export const useSpinCard = (state: any) => {
  return state.spinCardStore as SpinCard;
};
