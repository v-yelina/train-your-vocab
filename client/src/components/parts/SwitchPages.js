import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import CardsGame from "../../pages/CardsGame";
import EnterTranslation from "../../pages/EnterTranslation";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import OneGameStatistic from "../../pages/OneGameStatistic";
import CardGameResults from "../../pages/CardGemeResults";
import GamesList from "../../pages/GamesList";
import ChooseOne from "../../pages/ChooseOne";

const SwitchPages = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/cards" element={<CardsGame />} />
      <Route path="/enter" element={<EnterTranslation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/onegamestat" element={<OneGameStatistic />} />
      <Route path="/cardgameresults" element={<CardGameResults />} />
      <Route path="/gameslist" element={<GamesList />} />
      <Route path="/chooseone" element={<ChooseOne />} />
    </Routes>
  );
};

export default SwitchPages;
