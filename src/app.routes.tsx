import React from "react";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoute: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
