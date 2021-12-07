import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button/Button";
import { ADD_NEW_WORD, ADD_WORD_IN_VOCAB } from "../store/actions";
import { getRandomWord } from "../store/actionsCreator";
import SideNavbar from "../components/parts/SideNavbar/SideNavbar";

const CardsGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.auth.isAuth);
  const vocab = useSelector((state) => state.games.myvocab);
  const [translation, setTranslation] = useState(false);
  const randomWord = useSelector((state) => state.games.randomWord);
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

  const onClickAlreadyKnow = () => {
    dispatch(getRandomWord(vocab));
    isGameFinished();
    setTranslation(false);
  };

  const onClickLearn = () => {
    add_word_in_vocab(userId, randomWord[0], randomWord[2]);
    add_new_word();
    dispatch(getRandomWord(vocab));
    isGameFinished();
    setTranslation(false);
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

  return isAuth ? (
    <article className="gamePageContent">
      <SideNavbar />
      <div className="card cardGame">
        {renderCardContent()}
        <div className="buttons">
          <Button
            type="button"
            title="Already know"
            onButtonClick={() => {
              onClickAlreadyKnow();
            }}
            className="btn-green"
          />
          <Button
            type="button"
            title="Learn"
            onButtonClick={() => {
              onClickLearn();
            }}
            className="btn-beige"
          />
        </div>
      </div>
    </article>
  ) : (
    <div className="resultsContainer">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};

export default CardsGame;
