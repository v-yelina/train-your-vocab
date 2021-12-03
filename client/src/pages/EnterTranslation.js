import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import {
  ADD_RIGHT_ANSWER,
  ADD_WRONG_ANSWER,
  EMPTY_CURRENT_GAME,
} from "../store/actions";

const EnterTranslation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const dictionary = useSelector((state) => state.games.myvocab);
  const [randomWord, setRandomWord] = useState(
    dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const [showAnswer, setShowAnswer] = useState(0); // 0 - card with question, 1 - after answer and don't know
  const [isTrue, setIsTrue] = useState(0); // 0 - false, 1 - true
  const [counter, setCounter] = useState(0); // count number of attempts

  useEffect(() => {
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
  }, []);

  const onAddRightAnswer = (word, translation) => {
    dispatch({
      type: ADD_RIGHT_ANSWER,
      payload: [word, translation],
    });
  };

  const onAddWrongAnswer = (word, translation) => {
    dispatch({
      type: ADD_WRONG_ANSWER,
      payload: [word, translation],
    });
  };

  const onHandleChange = (event) => {
    event.preventDefault();
    setAnswer(event.target.value);
  };

  const onClickNext = (word, translation) => {
    if (counter < 10) {
      setCounter(counter + 1);
      if (isTrue) {
        // setResult(result + 1);
        onAddRightAnswer(word, translation);
      } else {
        onAddWrongAnswer(word, translation);
      }
    } else {
      setCounter(0);
      navigate("/onegamestat");
    }
  };

  const getRandomWord = () => {
    setRandomWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  };

  const questionCard = () => {
    return (
      <article className="card enterGame">
        <h3 className="targetWord">{randomWord[2]}</h3>
        <img
          src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
          alt="Word"
        />

        {/* Use Field component!!!!!!!!! */}
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
              setShowAnswer(1);
              setIsTrue(0);
            }}
            className="btn-red"
          />
          <Button
            type="button"
            title="Check"
            onButtonClick={() => {
              checkAnswer();
              setShowAnswer(1);
            }}
            className="btn-green"
          />
        </div>
      </article>
    );
  };

  const checkAnswer = () => {
    answer === randomWord[0] ? setIsTrue(1) : setIsTrue(0);
  };

  const answerCard = () => {
    return (
      <article
        className={`card enterGame ${
          isTrue === 0 ? "wrongAnswer" : isTrue === 1 ? "rightAnswer" : ""
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
            // !!!!!!!!!!!!
            // should be one function
            onClickNext(randomWord[0], randomWord[2]);
            getRandomWord();
            setShowAnswer(0);
            setAnswer("");
          }}
          className="btn-green"
        />
      </article>
    );
  };

  const renderCard = () => {
    return showAnswer === 0 ? (
      questionCard()
    ) : showAnswer === 1 ? (
      answerCard()
    ) : (
      <div>There is nothing to display</div>
    );
  };

  return <div>{renderCard()}</div>;
};
export default EnterTranslation;
