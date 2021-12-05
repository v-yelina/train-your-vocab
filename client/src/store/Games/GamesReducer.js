import {
  ADD_WRONG_ANSWER,
  ADD_RIGHT_ANSWER,
  EMPTY_CURRENT_GAME,
  ADD_WORD_IN_VOCAB,
  CLEAR_NEW_WORDS,
  ADD_NEW_WORD,
  GET_RANDOM_WORD,
} from "../actions";
import { myvocab } from "../../myvocab";

const emptyCurrentGame = {
  wrongAnswers: [],
  rightAnswers: [],
};

const initialState = {
  myvocab: [...myvocab],
  currentGame: emptyCurrentGame,
  uservocab: [],
  newWords: 0,
  randomWord: myvocab[Math.floor(Math.random() * myvocab.length)],
};

export const GamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_WORD:
      return {
        ...state,
        randomWord: payload,
      };

    case ADD_RIGHT_ANSWER:
      console.log(state);
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          rightAnswers: [...state.currentGame.rightAnswers, payload],
        },
      };

    case ADD_WRONG_ANSWER:
      console.log(state);
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          wrongAnswers: [...state.currentGame.wrongAnswers, payload],
        },
      };

    case EMPTY_CURRENT_GAME:
      return {
        ...state,
        currentGame: emptyCurrentGame,
      };

    case ADD_WORD_IN_VOCAB:
      return {
        ...state,
        uservocab: [...state.uservocab, payload],
      };

    case ADD_NEW_WORD:
      return {
        ...state,
        newWords: state.newWords + 1,
      };

    case CLEAR_NEW_WORDS:
      return {
        ...state,
        newWords: 0,
      };

    default:
      return state;
  }
};
