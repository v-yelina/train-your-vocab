import React from "react";
import { useSelector } from "react-redux";
import CircleProgressBar from "../components/parts/CircleProgressBar/CircleProgressBar";
import UnauthorizedError from "../components/parts/UnauthorizedError/UnauthorizedError";
import Button from "../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const OneGameStatistic = () => {
  const navigate = useNavigate();
  const currentGame = useSelector((state) => state.games.currentGame);
  const wrongAnswers = [...currentGame.wrongAnswers];
  const rightAnswers = [...currentGame.rightAnswers];
  const percentage =
    (rightAnswers.length / (wrongAnswers.length + rightAnswers.length)) * 100;
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

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

  return isAuth ? (
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
      <div className="buttons">
        <Button
          type="button"
          title="Main page"
          onButtonClick={() => {
            navigate("/");
          }}
          className="btn-beige"
        />
        <Button
          type="button"
          title="Games"
          onButtonClick={() => {
            navigate("/gameslist");
          }}
          className="btn-login"
        />
      </div>
    </article>
  ) : (
    <UnauthorizedError />
  );
};

export default OneGameStatistic;
