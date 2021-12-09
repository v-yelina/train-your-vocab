import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_GAME_TITLE, EMPTY_CURRENT_GAME } from "../../store/actions";
import QuestionCardBuildWord from "../../components/parts/GamesCards/QuestionCardBuildWord";
import SideNavbar from "../../components/parts/SideNavbar/SideNavbar";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import AnswerCard from "../../components/parts/GamesCards/AnswerCard";

const BuildWord = () => {
  const dispatch = useDispatch();
  const showAnswer = useSelector((state) => state.enterTranslation.showAnswer);
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  useEffect(() => {
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
    add_game_title();
  }, []);

  const add_game_title = () => {
    dispatch({
      type: ADD_GAME_TITLE,
      payload: "build_word",
    });
  };

  const renderCard = () => {
    return showAnswer === 0 ? (
      <QuestionCardBuildWord />
    ) : showAnswer === 1 ? (
      <AnswerCard />
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
    <UnauthorizedError />
  );
};

export default BuildWord;
