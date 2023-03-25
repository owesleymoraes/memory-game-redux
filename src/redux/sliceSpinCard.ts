import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./store";

interface CardProps {
  id: number;
  key: number;
  nameCard: string;
  spin: boolean;
  hasCardMatch: boolean;
}

interface SpinCard {
  count: number;
  listCards: CardProps[];
  arrayCard: number[];
}

const INITIAL_STATE: SpinCard = {
  arrayCard: [],
  count: 0,
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
      let index = 0;
      const cards = state.listCards.slice();
      index = cards.findIndex((key) => key.key === action.payload);

      const keyCardSelected = cards
        .filter((cardChange) => {
          return cardChange.key === cards[index].key;
        })
        .map((k) => k.key)
        .toString()
        .split(",");

      const keyCardSpin = Number(keyCardSelected.shift());

      if (keyCardSpin === cards[index].key && cards[index].spin === true) {
        cards[index].spin = !cards[index].spin;

        // armazena o index da carta selecionada = 1
        state.arrayCard[state.count] = index;
        state.count++;
      }

      if (state.count === 2) {
        state.count = 0;
      }
    },

    reverseTheCards: (state) => {
      const cards = state.listCards.slice();
      if (state.arrayCard.length === 2) {
        if (cards[state.arrayCard[0]].id === cards[state.arrayCard[1]].id) {
        } else {
          cards[state.arrayCard[0]].spin = !cards[state.arrayCard[0]].spin;
          cards[state.arrayCard[1]].spin = !cards[state.arrayCard[1]].spin;
          
        }
      }
    },
  },
});

//reducer
export default sliceSpinCard.reducer;
export const { changeSpinCard, reverseTheCards } = sliceSpinCard.actions;

export const useSpinCard = (state: any) => {
  return state.spinCardStore as SpinCard;
};
