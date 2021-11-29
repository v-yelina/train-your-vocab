import React from "react";
import { useState } from "react";

const Card = () => {
  const [translation, setTranslation] = useState(false);
  const word = "Sun";
  const wordTranslation = "Солнце";
  const picUrl =
    "https://image.freepik.com/free-vector/hand-painted-sun_23-2147510442.jpg";

  const flip = () => {
    const element = document.getElementsByClassName("cardGame")[0];
    if (translation) {
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
        <h3>{wordTranslation}</h3>
        <img src={picUrl} alt="Word" />
      </div>
    ) : (
      <div className="cardContent" onClick={() => onClickHandler()}>
        <h3>{word}</h3>
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
        <button className="btn">Already know</button>
        <button className="btn">Learn</button>
      </div>
    </article>
  );
};

export default Card;
