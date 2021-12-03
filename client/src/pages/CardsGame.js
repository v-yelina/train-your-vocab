import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/ui/Button/Button";
import { ADD_NEW_WORD, ADD_WORD_IN_VOCAB } from "../store/actions";
import { useNavigate } from "react-router-dom";

const CardsGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dictionary = useSelector((state) => state.games.myvocab);
  const [translation, setTranslation] = useState(false);
  const [randomWord, setRandomWord] = useState(
    dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const [counter, setCounter] = useState(0); // count number of attempts

  const userId = 1;

  const add_word_in_vocab = (userId, word, translation) => {
    dispatch({
      type: ADD_WORD_IN_VOCAB,
      payload: [userId, word, translation],
    });
  };

  const add_new_word = () => {
    dispatch({
      type: ADD_NEW_WORD,
    });
  };

  const isGameFinished = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
      navigate("/cardgameresults");
    }
  };

  const getRandomWord = () => {
    setRandomWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  };

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
        <h3 className="targetWord">{randomWord[2]}</h3>
        <img src={picUrl} alt="Word" />
      </div>
    ) : (
      <div className="cardContent" onClick={() => onClickHandler()}>
        <h3 className="targetWord">{randomWord[0]}</h3>
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
            getRandomWord();
            isGameFinished();
          }}
          className="btn-green"
        />
        <Button
          type="button"
          title="Learn"
          onButtonClick={() => {
            add_word_in_vocab(userId, randomWord[0], randomWord[2]);
            add_new_word();
            getRandomWord();
            isGameFinished();
          }}
          className="btn-beige"
        />
      </div>
    </article>
  );
};

export default CardsGame;
