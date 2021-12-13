import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_GAME_TITLE, EMPTY_CURRENT_GAME } from "../../store/actions";
import QuestionCardBuildWord from "../../components/parts/GamesCards/QuestionCardBuildWord";
import SideNavbar from "../../components/parts/SideNavbar/SideNavbar";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import AnswerCard from "../../components/parts/GamesCards/AnswerCard";
import {getRandomWord} from "../../store/actionsCreator";
import {getUserStatistic} from "../../store/Statistic/StatisticActionCreator";
import {getOneUser} from "../../store/Users/UserActionCreator";

const BuildWord = () => {
  const dispatch = useDispatch();
  const randomWord = useSelector((state) => state.games.randomWord);
  const showAnswer = useSelector((state) => state.enterTranslation.showAnswer);
  const isAuth = useSelector((state) => state.auth.auth.isAuth);
  const user = useSelector((state) => state.user.current_user);
  const userId = useSelector((state) => state.auth.auth.userId);



  useEffect(() => {
    dispatch(getOneUser(userId));
    dispatch({
      type: EMPTY_CURRENT_GAME,
    });
    dispatch(getRandomWord())
    add_game_title();
    dispatch(getUserStatistic(user))
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

  if (randomWord) {
  return isAuth ? (
    <article className="gamePageContent">
      <SideNavbar />
      {renderCard()}
    </article>
  ) : (
    <UnauthorizedError />
  );} else {
    return <div className='unauthorized'>Something is wrong</div>;
  }
};

export default BuildWord;
