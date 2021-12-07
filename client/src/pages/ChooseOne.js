import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CURRENT_GAME } from "../store/actions";
import QuestionCardChooseOne from "../components/parts/GamesCards/QuestionCardChooseOne";
import AnswerCardEnterTranslation from "../components/parts/GamesCards/AnswerCardEnterTranslation";
import SideNavbar from "../components/parts/SideNavbar/SideNavbar";

const ChooseOne = () => {
  const dispatch = useDispatch();
  const showAnswer = useSelector((state) => state.enterTranslation.showAnswer);

  useEffect(() => {
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
  }, []);

  const renderCard = () => {
    return showAnswer === 0 ? (
      <QuestionCardChooseOne />
    ) : showAnswer === 1 ? (
      <AnswerCardEnterTranslation />
    ) : (
      <div>There is nothing to display</div>
    );
  };

  return (
    <article className="gamePageContent">
      <SideNavbar />
      {renderCard()}
    </article>
  );
};

export default ChooseOne;
