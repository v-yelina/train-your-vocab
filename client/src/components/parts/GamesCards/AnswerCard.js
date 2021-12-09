import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import {
  DONT_SHOW_ANSWER,
  EMPTY_ANSWER,
  ADD_RIGHT_ANSWER,
  ADD_WRONG_ANSWER,
  ADD_COUNT,
  CLEAR_COUNTER,
  ADD_CHOOSE_ONE,
  ADD_BUILD_WORD,
  ADD_ENTER_TRANSLATION,
  ADD_LEARNED_WORDS,
} from "../../../store/actions";
import { getRandomWord } from "../../../store/actionsCreator";

const AnswerCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isTrue = useSelector((state) => state.enterTranslation.isTrue);
  const randomWord = useSelector((state) => state.games.randomWord);
  const answer = useSelector((state) => state.enterTranslation.answer);
  const vocab = useSelector((state) => state.games.myvocab);
  const gameTitle = useSelector((state) => state.games.currentGame.gameTitle);
  const rightAnswers = useSelector(
    (state) => state.games.currentGame.rightAnswers
  );

  const counter = useSelector((state) => state.games.counter); // count number of attempts

  const add_game = () => {
    switch (gameTitle) {
      case "choose_one":
        dispatch({
          type: ADD_CHOOSE_ONE,
        });
      case "build_word":
        dispatch({
          type: ADD_BUILD_WORD,
        });
      case "enter_translation":
        dispatch({
          type: ADD_ENTER_TRANSLATION,
        });
      default:
        return "There isn't such a game name";
    }
  };

  const add_learned_words = () => {
    dispatch({
      type: ADD_LEARNED_WORDS,
      payload: rightAnswers.length,
    });
  };

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

  const addCount = () => {
    dispatch({
      type: ADD_COUNT,
    });
  };

  const clearCounter = () => {
    dispatch({
      type: CLEAR_COUNTER,
    });
  };

  const onClickNext = (word, translation) => {
    if (counter < 10) {
      addCount();
      if (isTrue) {
        onAddRightAnswer(word, translation);
        emptyAnswer();
      } else {
        onAddWrongAnswer(word, translation, answer);
        emptyAnswer();
      }
    } else {
      clearCounter();
      add_game();
      add_learned_words();
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

export default AnswerCard;
