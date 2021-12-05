import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CURRENT_GAME } from "../store/actions";
import QuestionCardEnterTranslation from "../components/parts/GamesCards/QuestionCardEnterTranslation";
import AnswerCardEnterTranslation from "../components/parts/GamesCards/AnswerCardEnterTranslation";

const EnterTranslation = () => {
  const dispatch = useDispatch();
  const showAnswer = useSelector((state) => state.enterTranslation.showAnswer);

  useEffect(() => {
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
  }, []);

  const renderCard = () => {
    return showAnswer === 0 ? (
      <QuestionCardEnterTranslation />
    ) : showAnswer === 1 ? (
      <AnswerCardEnterTranslation />
    ) : (
      <div>There is nothing to display</div>
    );
  };

  return <div>{renderCard()}</div>;
};
export default EnterTranslation;
