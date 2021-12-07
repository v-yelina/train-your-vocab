import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CURRENT_GAME } from "../store/actions";
import QuestionCardChooseOne from "../components/parts/GamesCards/QuestionCardChooseOne";
import AnswerCardEnterTranslation from "../components/parts/GamesCards/AnswerCardEnterTranslation";
import SideNavbar from "../components/parts/SideNavbar/SideNavbar";

const ChooseOne = () => {
  const dispatch = useDispatch();
  const showAnswer = useSelector((state) => state.enterTranslation.showAnswer);
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

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

  return isAuth ? (
    <article className="gamePageContent">
      <SideNavbar />
      {renderCard()}
    </article>
  ) : (
    <div className="resultsContainer">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};

export default ChooseOne;
