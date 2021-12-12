import React from "react";
import {useDispatch, useSelector} from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import {useNavigate} from "react-router-dom";
import Button from "../../components/ui/Button/Button";

const UserDict = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);
  const loggedInUser = useSelector((state) => state.user.current_user)
  const navigate = useNavigate();

  const renderDict = () => {
    return loggedInUser.dict.map(word => <div className='userWord' key='word.word'><span
        className='word'>{word.word}</span><span className='transcription'>{word.transcription}</span><span
        className='translation'>{word.translation}</span></div>)
  }


  if (loggedInUser) {
    return isAuth ? (
        <section className="gamesListPage">
          <h2>My Dictionary</h2>
          <div className='userDictionary'>
            {renderDict()}
            <div className='buttons'>
              <Button
                  type="button"
                  title="My statistic"
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
}

export default UserDict;
