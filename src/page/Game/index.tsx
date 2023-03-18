import React from "react";
import { Board } from "./components/Board";
import { Cards } from "./components/Cards";

export const Game: React.FC = () => {
  
  return (
    <Board>
      <Cards />;
    </Board>
  );
};
