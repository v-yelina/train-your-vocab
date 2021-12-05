import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import {
  DONT_SHOW_ANSWER,
  EMPTY_ANSWER,
  ADD_RIGHT_ANSWER,
  ADD_WRONG_ANSWER,
} from "../../../store/actions";
import { getRandomWord } from "../../../store/actionsCreator";

const AnswerCardEnterTranslation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isTrue = useSelector((state) => state.enterTranslation.isTrue);
  const randomWord = useSelector((state) => state.games.randomWord);
  const answer = useSelector((state) => state.enterTranslation.answer);
  const vocab = useSelector((state) => state.games.myvocab);

  const [counter, setCounter] = useState(0); // count number of attempts

  const onAddRightAnswer = (word, translation) => {
    dispatch({
      type: ADD_RIGHT_ANSWER,
      payload: [word, translation],
    });
  };

  const onAddWrongAnswer = (word, translation, answer) => {
    dispatch({
      type: ADD_WRONG_ANSWER,
      payload: [word, translation, answer],
    });
  };

  const emptyAnswer = () => {
    dispatch({
      type: EMPTY_ANSWER,
      payload: "",
    });
  };

  const dontShowAnswer = () => {
    dispatch({
      type: DONT_SHOW_ANSWER,
    });
  };

  const onClickNext = (word, translation) => {
    if (counter < 10) {
      setCounter(counter + 1);
      if (isTrue) {
        onAddRightAnswer(word, translation);
        emptyAnswer();
      } else {
        onAddWrongAnswer(word, translation, answer);
        emptyAnswer();
      }
    } else {
      setCounter(0);
      navigate("/onegamestat");
    }
    dispatch(getRandomWord(vocab));
    dontShowAnswer();
    emptyAnswer();
  };

  return (
    <article
      className={`card enterGame ${
        isTrue === false ? "wrongAnswer" : isTrue === true ? "rightAnswer" : ""
      }`}
    >
      <h3 className="targetWord">{randomWord[2]}</h3>
      <p>{randomWord[0]}</p>
      <div className="answerImg">
        <img
          src="https://image.freepik.com/free-vector/check-cross-signs-paint-design_1102-228.jpg"
          alt="answer"
        />
      </div>
      <Button
        type="button"
        title="Next word"
        onButtonClick={() => {
          onClickNext(randomWord[0], randomWord[2]);
        }}
        className="btn-green"
      />
    </article>
  );
};

export default AnswerCardEnterTranslation;
