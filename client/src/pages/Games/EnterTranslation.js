import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_GAME_TITLE, EMPTY_CURRENT_GAME } from "../../store/actions";
import QuestionCardEnterTranslation from "../../components/parts/GamesCards/QuestionCardEnterTranslation";
import SideNavbar from "../../components/parts/SideNavbar/SideNavbar";
import AnswerCard from "../../components/parts/GamesCards/AnswerCard";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import {getRandomWord} from "../../store/actionsCreator";
import {getUserStatistic} from "../../store/Statistic/StatisticActionCreator";
import {getOneUser} from "../../store/Users/UserActionCreator";

const EnterTranslation = () => {
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
    add_game_title();
    dispatch(getRandomWord())
    dispatch(getUserStatistic(user))
  }, []);

  const add_game_title = () => {
    dispatch({
      type: ADD_GAME_TITLE,
      payload: "enter_translation",
    });
  };

  const renderCard = () => {
    return showAnswer === 0 ? (
      <QuestionCardEnterTranslation />
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
  );
  } else {
    return <div className='unauthorized'>Something is wrong</div>;
  }
};
export default EnterTranslation;
