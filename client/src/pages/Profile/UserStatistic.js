import React from "react";
import { useSelector } from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import Button from "../../components/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import '../styles/UserStatistic.css'

const UserStatistic = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);
  const loggedInUser = useSelector((state) => state.user.current_user)
    const navigate = useNavigate();

  if (loggedInUser) {
    return isAuth ? (
        <section className="gamesListPage">
          <h2>My Statistic</h2>
          <div className='statisticInfo'>
            <div className='labels'>
              <span>Enter Translation:</span>
              <span>Choose one:</span>
              <span>Build word:</span>
              <span>Played games:</span>
              <span>Learned words:</span>
            </div>
            <div className='info'>
              <span>{loggedInUser.statistic.enter_translation_count}</span>
              <span>{loggedInUser.statistic.choose_one_count}</span>
              <span>{loggedInUser.statistic.build_word_count}</span>
              <span>{loggedInUser.statistic.enter_translation_count + loggedInUser.statistic.choose_one_count + loggedInUser.statistic.build_word_count}</span>
              <span>{loggedInUser.statistic.learned_words_count}</span>
            </div>
            <div className='buttons'>
              <Button
                  type="button"
                  title="My profile"
                  onButtonClick={() => {
                    navigate("/userprofile");
                  }}
                  className="btn-login"
              />
              <Button
                  type="button"
                  title="My dictionary"
                  onButtonClick={() => {
                    navigate("/userdictionary");
                  }}
                  className="btn-beige"
              />
            </div>
          </div>

        </section>
    ) : (
        <UnauthorizedError/>
    );
  } else {
    return <div className='unauthorized'>Something is wrong</div>;
  }
};

export default UserStatistic;
