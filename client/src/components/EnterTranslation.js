import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const EnterTranslation = () => {
  const dictionary = useSelector((state) => state.myvocab);
  const [randomWord, setRandomWord] = useState(
    dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const [showAnswer, setShowAnswer] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  let answer = "";

  const getRandomWord = () => {
    setRandomWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
  };

  const onClickCheck = () => {
    setShowAnswer(1);
    return (
      <div className={answer === randomWord[0] ? "rightAnswer" : "wrongAnswer"}>
        <h3>{randomWord[2]}</h3>
        <p>{randomWord[0]}</p>
        <button
          className="btn"
          onClick={() => {
            setRandomWord(getRandomWord());
            setShowAnswer(0);
          }}
        >
          Next word
        </button>
      </div>
    );
  };

  const onClickDontKnow = () => {
    setShowAnswer(2);
    getRandomWord();
    return (
      <div>
        <h3>{randomWord[2]}</h3>
        <p>{randomWord[0]}</p>
        <button
          className="btn"
          onClick={() => {
            setRandomWord(getRandomWord());
            setShowAnswer(0);
          }}
        >
          Next word
        </button>
      </div>
    );
  };

  // const renderCard = () {
  //   return showAnswer === 0 ? <article className="card cardGame">
  //     <h3>{randomWord[2]}</h3>
  //     <img
  //       src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
  //       alt="Word"
  //     />
  //     <input type="text" />
  //     <div className="buttons">
  //       <button
  //         className="btn"
  //         onClick={() => {
  //           onClickDontKnow();
  //         }}
  //       >
  //         Don't know
  //       </button>
  //       <button
  //         className="btn"
  //         onClick={() => {
  //           onClickCheck();
  //         }}
  //       >
  //         Check
  //       </button>
  //     </div>
  //   </article> : showAnswer =
  // }

  return (
    <article className="card cardGame">
      <h3>{randomWord[2]}</h3>
      <img
        src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
        alt="Word"
      />
      <input type="text" />
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            onClickDontKnow();
          }}
        >
          Don't know
        </button>
        <button
          className="btn"
          onClick={() => {
            onClickCheck();
          }}
        >
          Check
        </button>
      </div>
    </article>
  );
};
export default EnterTranslation;
