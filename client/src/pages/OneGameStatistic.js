import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CircleProgressBar from "../components/parts/CircleProgressBar/CircleProgressBar";
import { EMPTY_CURRENT_GAME } from "../store/actions";

const OneGameStatistic = () => {
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.currentGame);
  const wrongAnswers = [...currentGame.wrongAnswers];
  const rightAnswers = [...currentGame.rightAnswers];
  const percentage =
    (rightAnswers.length / (wrongAnswers.length + rightAnswers.length)) * 100;

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const cleanCurrentGame = () => {
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
  };
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const renderRightAnswers = () => {
    if (!rightAnswers.length) return;
    return rightAnswers.map((answer) => (
      <div key={answer[0]}>
        <span className="word">{answer[0]} - </span>
        <span className="translation">{answer[1]}</span>
      </div>
    ));
  };

  const renderWrongAnswers = () => {
    if (!wrongAnswers.length) return;
    return wrongAnswers.map((answer) => (
      <div key={answer[0]}>
        <span className="word">{answer[0]} - </span>
        <span className="translation">{answer[1]}</span>
      </div>
    ));
  };

  const renderResult = () => {
    return (
      <div className="gameResult">
        <h2>Congratulations!</h2>
        <p>
          You've have {rightAnswers.length} right answers out of{" "}
          {rightAnswers.length + wrongAnswers.length}!{" "}
          <CircleProgressBar percent={percentage} />
        </p>
      </div>
    );
  };

  return (
    <article className="oneGameStat">
      {renderResult()}
      <div className="answerList">
        <div className="wrongAnswers">
          <h4>Your wrong answers:</h4>
          {renderWrongAnswers()}
        </div>

        <div className="rightAnswers">
          <h4>Your right answers:</h4>
          {renderRightAnswers()}
        </div>
      </div>
    </article>
  );
};

export default OneGameStatistic;
