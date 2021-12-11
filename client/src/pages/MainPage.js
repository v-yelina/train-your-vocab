import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Button from "../components/ui/Button/Button";
import "./styles/MainPage.css";
import {getAllWords} from "../store/Dictionary/DictActionCreator";


const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.auth.auth.isAuth);

    useEffect(()=>{
        dispatch(getAllWords())
    },[])


    const renderButtons = () => {
        return isAuth ? (<div>
                <Button
                    type="button"
                    title="Play games"
                    onButtonClick={() => {
                        navigate("/gameslist");
                    }}
                    className="btn-login btn-play"
                />
            </div>
        ) : (
            <div className="buttons">
                <Button
                    type="button"
                    title="Login"
                    onButtonClick={() => {
                        navigate("/login");
                    }}
                    className="btn-login"
                />
                <Button
                    type="button"
                    title="Create account"
                    onButtonClick={() => {
                        navigate("/registration");
                    }}
                    className="btn-beige"
                />

            </div>
        );
    };

    return (
        <div>
            <article className="appIntroduction">
                <img
                    src="https://image.freepik.com/free-vector/students-learning-foreign-language-with-vocabulary_74855-11070.jpg"
                    alt="Words learning"
                    className="mainpage-img"
                />
                <h3>Learn New English Words Faster</h3>
                <p>
                    Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
                    tincidunt id aliquet risus feugiat in. Auctor augue mauris augue neque
                    gravida in fermentum et. Feugiat in fermentum urna.
                </p>
                <span className="freepic">
          Images from &nbsp;
                    <a href="https://www.freepik.com/">Freepik</a>
        </span>
                {renderButtons()}
            </article>
        </div>
    );
};

export default MainPage;
