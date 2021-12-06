import React from "react";
import Button from "../../ui/Button/Button";
import "./GameCard.css";

const GameCard = (props) => {
  return (
    <article className="gameCard">
      <figure>
        <figcaption>{props.gameTitle}</figcaption>
        <img src={props.imgUrl} alt="Elephant at sunset" />
      </figure>
      <p className="gameDescription">{props.description}</p>
      <Button
        type="button"
        title="Let's play"
        onButtonClick={props.onButtonClick}
        className="btn-login"
      />
    </article>
  );
};

export default GameCard;
