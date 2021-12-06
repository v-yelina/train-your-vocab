import React from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/parts/GamesListCard/GameCard";

const GamesList = () => {
  const navigate = useNavigate();
  const games = [
    [
      "Cards Game",
      "https://image.freepik.com/free-photo/language-communication-message-written_53876-127905.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "/cards",
    ],
    [
      "Enter Translation",
      "https://image.freepik.com/free-vector/cartoon-tiny-people-having-international-communication-online-flat-illustration_74855-16818.jpg",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "/enter",
    ],
  ];

  const renderGames = () => {
    return games.map((game) => (
      <GameCard
        key={game[0]}
        gameTitle={game[0]}
        imgUrl={game[1]}
        description={game[2]}
        onButtonClick={() => {
          navigate(game[3]);
        }}
      />
    ));
  };

  return (
    <section className="gamesListPage">
      <h2>Games List</h2>
      <div className="gamesList">{renderGames()}</div>
    </section>
  );
};

export default GamesList;
