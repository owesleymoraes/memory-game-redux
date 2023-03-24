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
      if (state.count === 2) {
        //condicional para apenas permitir duas cartas sendo abertas
      } else {
        index = cards.findIndex((key) => key.key === action.payload);
      }

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
        const cardsNotSelected = cards
          .filter((c) => c.key !== cards[state.arrayCard[0]].key)
          .filter((c) => c.key != cards[state.arrayCard[1]].key)
          .map((c) => c.key);
        state.count = 0;
      }

      // const otherIndex = cards.findIndex((c) => !c.spin && !c.hasCardMatch);

      // if (index > -1) {
      //   if (!cards[index].spin) {
      //     return state;
      //   }

      //   if (otherIndex > -1) {
      //     if (cards[index].id === cards[otherIndex].id) {
      //       cards[index].spin = !cards[index].spin;
      //       cards[index].hasCardMatch = true;
      //       cards[otherIndex].hasCardMatch = true;
      //     } else {
      //       cards[otherIndex].spin = !cards[otherIndex].spin;
      //     }
      //   } else {
      //     cards[index].spin = !cards[index].spin;
      //   }
      // }
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
