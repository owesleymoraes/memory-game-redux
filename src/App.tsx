import React from "react";
import { Home } from "./components/Home";
import GlobalStyles from "./GlobalStyles";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};
