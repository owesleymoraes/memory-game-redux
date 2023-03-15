import React from "react";
import { AppRoute } from "./app.routes";
import { Home } from "./components/Home";
import GlobalStyles from "./GlobalStyles";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoute />
    </>
  );
};
