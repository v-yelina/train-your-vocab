import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CardsGame from "../pages/CardsGame";
import Navbar from "./Navbar";
import EnterTranslation from "../pages/EnterTranslation";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export default (props) => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cards" element={<CardsGame />} />
      <Route path="/enter" element={<EnterTranslation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </div>
);
