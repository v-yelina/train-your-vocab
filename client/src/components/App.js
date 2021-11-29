import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import CardsGame from "./CardsGame";
import Navbar from "./Navbar";
import EnterTranslation from "./EnterTranslation";

export default (props) => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cards" element={<CardsGame />} />
      <Route path="/enter" element={<EnterTranslation />} />
    </Routes>
  </div>
);
