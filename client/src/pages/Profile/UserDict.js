import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import {useNavigate} from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import '../styles/UserDict.css'
import {getOneUser} from "../../store/Users/UserActionCreator";

const UserDict = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.auth.isAuth);
    const loggedInUser = useSelector((state) => state.user.current_user)
    const navigate = useNavigate();
    const vocab = useSelector((state) => state.games.myvocab);
    const userId = useSelector((state) => state.auth.auth.userId);

    useEffect(() => {
        dispatch(getOneUser(userId));
    }, []);

    const findWordById = (id) => {
        return vocab.find(word => word.id === id)
    }


    const renderDict = () => {
        return loggedInUser.dict.map(item => <div className='userWord' key={item.wordId}><span
            className='word'>{findWordById(item.wordId).word}</span><span
            className='transcription'>{findWordById(item.wordId).transcription}</span><span
            className='translation'>{findWordById(item.wordId).translation}</span></div>)
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
                            title="My profile"
                            onButtonClick={() => {
                                navigate("/userprofile");
                            }}
                            className="btn-login"
                        />
                        <Button
                            type="button"
                            title="My statistic"
                            onButtonClick={() => {
                                navigate("/userprofile");
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
