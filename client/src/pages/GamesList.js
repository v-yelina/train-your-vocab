import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/parts/GamesListCard/GameCard";

const GamesList = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

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
    [
      "Choose one",
      "https://as2.ftcdn.net/v2/jpg/04/09/90/47/1000_F_409904799_U9mugFVt463EwxxwW3iYLqEnINgpKqLf.jpg",
      "Elementum nisi quis eleifend quam adipiscing. Fermentum posuere urna nec tincidunt praesent. Convallis tellus id interdum velit laoreet id. Porta lorem mollis aliquam ut porttitor. Risus nullam eget felis eget.",
      "/chooseone",
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

  return isAuth ? (
    <section className="gamesListPage">
      <h2>Choose game</h2>
      <div className="gamesList">{renderGames()}</div>
    </section>
  ) : (
    <div className="resultsContainer">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};

export default GamesList;
