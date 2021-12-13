import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";
import {
  SHOW_ANSWER,
  SET_FALSE,
  SET_TRUE,
  SET_NEW_ANSWER,
  ADD_GAME_TITLE,
} from "../../../store/actions";

const QuestionCardEnterTranslation = () => {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.enterTranslation.answer);
  const randomWord = useSelector((state) => state.games.randomWord);
  const vocab = useSelector((state) => state.games.myvocab);
  const [selectedOption, setSelectedOption] = useState("");
  const [shuffledAnswersList, setShuffledAnswersList] = useState([]);

  useEffect(() => {
    setShuffledAnswersList(shuffle(createAnswers()));
  }, []);

  const createAnswers = () => {
    const answersList = [randomWord.translation];
    while (answersList.length < 4) {
      let newAnswer = vocab[Math.floor(Math.random() * vocab.length)].translation;
      if (newAnswer !== randomWord.translation) {
        answersList.push(newAnswer);
      }
    }
    return answersList;
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
      answer === randomWord.translation ? setTrue() : setFalse();
      showAnswer();
    }
  }, [answer]);

  const onFieldChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const showAnswer = () => {
    dispatch({
      type: SHOW_ANSWER,
    });
  };

  const renderAnswers = () => {
    return shuffledAnswersList.map((item, index) => (
      <Field
        key={`answer${index}`}
        id={`answer${index}`}
        name="answers"
        label={item}
        type="radio"
        value={item}
        checked={item === selectedOption}
        onFieldChange={onFieldChange}
      />
    ));
  };

  return (
    <article className="card chooseOneGame">
      <h3 className="targetWord">{randomWord.word}</h3>
      <img
        src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
        alt="Word"
      />

      <form className="answersRadio">{renderAnswers()}</form>
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
            addAnswer(selectedOption);
          }}
          className="btn-green"
        />
      </div>
    </article>
  );
};

export default QuestionCardEnterTranslation;
