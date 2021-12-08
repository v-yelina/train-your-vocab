import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import CardsGame from "../../pages/CardsGame";
import EnterTranslation from "../../pages/EnterTranslation";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import OneGameStatistic from "../../pages/OneGameStatistic";
import CardGameResults from "../../pages/CardGameResults";
import GamesList from "../../pages/GamesList";
import ChooseOne from "../../pages/ChooseOne";
import Users from "../../pages/Users";
import UserDict from "../../pages/Profile/UserDict";
import UserProfile from "../../pages/Profile/UserProfile";
import UserStatistic from "../../pages/Profile/UserStatistic";

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
      <Route path="/users" element={<Users />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/userstatistic" element={<UserStatistic />} />
      <Route path="/userdictionary" element={<UserDict />} />
    </Routes>
  );
};

export default SwitchPages;
