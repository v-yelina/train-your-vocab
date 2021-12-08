import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/ui/Button/Button";
import { CLEAR_NEW_WORDS } from "../store/actions";
import { useNavigate } from "react-router-dom";

const CardGameResults = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newWords = useSelector((state) => state.games.newWords);
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  const clear_new_words = () => {
    dispatch({
      type: CLEAR_NEW_WORDS,
    });
  };

  return isAuth ? (
    <div className="resultsContainer">
      <div className="cardGameResults">
        <h3>Hurra!</h3>
        <p>
          You have {newWords} new words in your vocabulary. Do you want to train
          them?
        </p>
        <div className="buttons">
          <Button
            type="button"
            title="Play Again"
            onButtonClick={() => {
              clear_new_words();
              navigate("/cards");
            }}
            className="btn-beige"
          />
          <Button
            type="button"
            title="Train new words"
            onButtonClick={() => {
              clear_new_words();
              navigate("/gameslist");
            }}
            className="btn-login"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="resultsContainer">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};

export default CardGameResults;