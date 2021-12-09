import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";
import {
  SHOW_ANSWER,
  SET_FALSE,
  SET_TRUE,
  SET_NEW_ANSWER,
  ADD_GAME_TITLE,
} from "../../../store/actions";

const QuestionCardBuildWord = () => {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.enterTranslation.answer);
  const randomWord = useSelector((state) => state.games.randomWord);
  const [shuffledLettersArray, setShuffledLettersArray] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    setShuffledLettersArray(shuffle(createLettersArray()));
  }, []);

  const createLettersArray = () => {
    const lettersArray = randomWord[0].split("");
    for (let i = 0; i < 3; i++) {
      lettersArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    return lettersArray;
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const setTrue = () => {
    dispatch({
      type: SET_TRUE,
    });
  };

  const setFalse = () => {
    dispatch({
      type: SET_FALSE,
    });
  };

  const addAnswer = (value) => {
    dispatch({
      type: SET_NEW_ANSWER,
      payload: value,
    });
  };

  useEffect(() => {
    if (answer) {
      answer === randomWord[0] ? setTrue() : setFalse();
      showAnswer();
    }
  }, [answer]);

  const showAnswer = () => {
    dispatch({
      type: SHOW_ANSWER,
    });
  };

  const onLetterButtonCLickHandler = (letter) => {
    setNewAnswer(newAnswer + letter);
  };

  const renderLetters = () => {
    return shuffledLettersArray.map((item, index) => (
      <Button
        key={item + index}
        type="button"
        title={item}
        onButtonClick={() => {
          onLetterButtonCLickHandler(item);
        }}
        className="btn-beige"
      />
    ));
  };

  return (
    <article className="card buildWordGame">
      <h3 className="targetWord">{randomWord[2]}</h3>
      <img
        src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
        alt="Word"
      />
      <div className="field">
        <p className="field__label">Build a translation from letters below</p>
        <p className="field__input">{newAnswer}</p>
      </div>
      <div className="lettersSet">{renderLetters()}</div>
      <Button
        type="button"
        title="Clean"
        onButtonClick={() => {
          setNewAnswer("");
        }}
        className="btn-login"
      />
      <div className="buttons">
        <Button
          type="button"
          title="Don't know"
          onButtonClick={() => {
            showAnswer();
            setFalse();
          }}
          className="btn-red"
        />
        <Button
          type="button"
          title="Check"
          onButtonClick={() => {
            addAnswer(newAnswer);
          }}
          className="btn-green"
        />
      </div>
    </article>
  );
};

export default QuestionCardBuildWord;
