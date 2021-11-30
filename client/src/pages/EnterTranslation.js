import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button/Button";

const EnterTranslation = () => {
  const [answer, setAnswer] = useState("");
  const dictionary = useSelector((state) => state.myvocab);
  const [randomWord, setRandomWord] = useState(
    dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const [showAnswer, setShowAnswer] = useState(0); // 0 - card with question, 1 - after answer and don't know
  const [isTrue, setIsTrue] = useState(0); // 0 - false, 1 - true

  const onHandleChange = (event) => {
    event.preventDefault();
    setAnswer(event.target.value);
  };

  const getRandomWord = () => {
    setRandomWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  };

  const questionCard = () => {
    return (
      <article className="card enterGame">
        <h3>{randomWord[2]}</h3>
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
        <h3>{randomWord[2]}</h3>
        <p>{randomWord[0]}</p>
        <Button
          type="button"
          title="Next word"
          onButtonClick={() => {
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
    console.log(isTrue, showAnswer, randomWord);
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
