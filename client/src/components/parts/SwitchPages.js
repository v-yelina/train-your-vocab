import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import CardsGame from "../../pages/CardsGame";
import EnterTranslation from "../../pages/EnterTranslation";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

const SwitchPages = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cards" element={<CardsGame />} />
      <Route path="/enter" element={<EnterTranslation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default SwitchPages;
