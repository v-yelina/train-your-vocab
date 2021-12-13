import React, {useEffect} from "react";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import {ADD_NEW_WORD, ADD_WORD_IN_VOCAB} from "../../store/actions";
import {getRandomWord} from "../../store/actionsCreator";
import SideNavbar from "../../components/parts/SideNavbar/SideNavbar";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";
import {addNewWordInDictionary, addNewWordsInDictionary} from "../../store/Dictionary/UserDictActionsCeator";

const CardsGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.auth.auth.isAuth);
    const vocab = useSelector((state) => state.games.myvocab);
    const [translation, setTranslation] = useState(false);
    const randomWord = useSelector((state) => state.games.randomWord);
    const [counter, setCounter] = useState(0); // count number of attempts
    const userId = useSelector((state) => state.auth.auth.userId);

    useEffect(() => {
        dispatch(getRandomWord())
    }, [])


    const add_new_word = () => {
        dispatch({
            type: ADD_NEW_WORD,
        });
    };

    const isGameFinished = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        } else {
            setCounter(0);
            navigate("/cardgameresults");
        }
    };

    const picUrl =
        "https://image.freepik.com/free-vector/successful-businessman-celebrating-victory_1150-39772.jpg";

    const flip = () => {
        const element = document.getElementsByClassName("cardGame")[0];
        if (translation) {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(360deg)";
        }
    };
    const onClickHandler = () => {
        flip();
        translation ? setTranslation(false) : setTranslation(true);
    };

    const onClickAlreadyKnow = () => {
        dispatch(getRandomWord(vocab));
        isGameFinished();
        setTranslation(false);
    };

    const onClickLearn = () => {
        dispatch(addNewWordInDictionary(userId, randomWord.id));
        add_new_word();
        dispatch(getRandomWord(vocab));
        isGameFinished();
        setTranslation(false);
    };

    const renderCardContent = () => {

        if (randomWord) {
            return translation ? (
                <div className="cardContent" onClick={() => onClickHandler()}>
                    <h3 className="targetWord">{randomWord.translation}</h3>
                    <img src={picUrl} alt="Word"/>
                </div>
            ) : (
                <div className="cardContent" onClick={() => onClickHandler()}>
                    <h3 className="targetWord">{randomWord.word}</h3>
                    <img
                        src="https://image.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
                        alt="Word"
                    />
                    <h4 className="transcriptedWord">{randomWord.transcription}</h4>
                </div>
            );
        } else {
            return <div className='unauthorized'>Something is wrong</div>;
        }
    };

    return isAuth ? (
        <article className="gamePageContent">
            <SideNavbar/>
            <div className="card cardGame">
                {renderCardContent()}
                <div className="buttons">
                    <Button
                        type="button"
                        title="Already know"
                        onButtonClick={() => {
                            onClickAlreadyKnow();
                        }}
                        className="btn-green"
                    />
                    <Button
                        type="button"
                        title="Learn"
                        onButtonClick={() => {
                            onClickLearn();
                        }}
                        className="btn-beige"
                    />
                </div>
            </div>
        </article>
    ) : (
        <UnauthorizedError/>
    );
};

export default CardsGame;
