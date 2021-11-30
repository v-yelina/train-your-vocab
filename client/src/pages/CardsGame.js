import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button/Button";

const CardsGame = () => {
  const dictionary = useSelector((state) => state.myvocab);
  const [translation, setTranslation] = useState(false);
  const [randomWord, setRandomWord] = useState(
    dictionary[Math.floor(Math.random() * dictionary.length)]
  );

  const onClickButton = (e) => {
    e.preventDefault();
  };

  const getRandomWord = () => {
    setRandomWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  };

  const picUrl =
    "https://image.freepik.com/free-vector/hand-painted-sun_23-2147510442.jpg";

  const flip = () => {
    const element = document.getElementsByClassName("cardGame")[0];
    if (translation) {
      getRandomWord();
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(360deg)";
    }
  };
  const onClickHandler = () => {
    flip();
    translation ? setTranslation(false) : setTranslation(true);
  };
  const renderCardContent = () => {
    return translation ? (
      <div className="cardContent" onClick={() => onClickHandler()}>
        <h3>{randomWord[2]}</h3>
        <img src={picUrl} alt="Word" />
      </div>
    ) : (
      <div className="cardContent" onClick={() => onClickHandler()}>
        <h3>{randomWord[0]}</h3>
        <img
          src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
          alt="Word"
        />
      </div>
    );
  };

  return (
    <article className="card cardGame">
      {renderCardContent()}
      <div className="buttons">
        <Button
          type="button"
          title="Already know"
          onButtonClick={() => {
            onClickButton();
          }}
          className="btn-green"
        />
        <Button
          type="button"
          title="Learn"
          onButtonClick={() => {
            onClickButton();
          }}
          className="btn-beige"
        />
      </div>
    </article>
  );
};

export default CardsGame;
