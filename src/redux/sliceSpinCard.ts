import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./store";

interface CardProps {
  id: number;
  key: number;
  nameCard: string;
  spin: boolean;
  hasCardMatch: boolean;
}

interface SpinCard {
  spinCard: boolean;
  listCards: CardProps[];
}

const INITIAL_STATE: SpinCard = {
  spinCard: true,
  listCards: [
    { id: 1, key: 1, nameCard: "carta 01", spin: true, hasCardMatch: false },
    { id: 2, key: 2, nameCard: "carta 02", spin: true, hasCardMatch: false },
    { id: 3, key: 3, nameCard: "carta 03", spin: true, hasCardMatch: false },
    { id: 1, key: 4, nameCard: "carta 01", spin: true, hasCardMatch: false },
    { id: 2, key: 5, nameCard: "carta 02", spin: true, hasCardMatch: false },
    { id: 3, key: 6, nameCard: "carta 03", spin: true, hasCardMatch: false },
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
      const otherIndex = cards.findIndex((c) => !c.spin && !c.hasCardMatch);

      if (index > -1) {
        if(!cards[index].spin){
          return state
        }
        if (otherIndex > -1) {
          if (cards[index].id === cards[otherIndex].id) {
            cards[index].spin = !cards[index].spin;
            cards[index].hasCardMatch = true;
            cards[otherIndex].hasCardMatch = true;
          } else {
            cards[otherIndex].spin = !cards[otherIndex].spin;
          }
        } else {
          cards[index].spin = !cards[index].spin;
        }
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

export function asyncShowCard(): AppThunk {
  return async function (dispatch) {};
}
