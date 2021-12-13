import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";
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

  const checkAnswer = () => {
    answer === randomWord.word ? setTrue() : setFalse();
  };

  const onHandleChange = (event) => {
    event.preventDefault();
    addAnswer(event.target.value);
  };

  const showAnswer = () => {
    dispatch({
      type: SHOW_ANSWER,
    });
  };

  return (
    <article className="card enterGame">
      <h3 className="targetWord">{randomWord.translation}</h3>
      <img
        src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
        alt="Word"
      />

      <input
        type="text"
        name="answer"
        value={answer}
        onChange={onHandleChange}
        placeholder="Enter translation here"
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
            checkAnswer();
            showAnswer();
          }}
          className="btn-green"
        />
      </div>
    </article>
  );
};

export default QuestionCardEnterTranslation;
