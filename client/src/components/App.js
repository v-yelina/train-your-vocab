import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import CardsGame from "./CardsGame";
import Navbar from "./Navbar";

export default (props) => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cards" element={<CardsGame />} />
    </Routes>
  </div>
);
