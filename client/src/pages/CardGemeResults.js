import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/ui/Button/Button";
import { CLEAR_NEW_WORDS } from "../store/actions";
import { useNavigate } from "react-router-dom";

const CardGameResults = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newWords = useSelector((state) => state.games.newWords);

  const clear_new_words = () => {
    dispatch({
      type: CLEAR_NEW_WORDS,
    });
  };

  return (
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
  );
};

export default CardGameResults;
