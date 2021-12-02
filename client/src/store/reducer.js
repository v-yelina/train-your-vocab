import {
  SET_AUTH,
  SET_ERROR,
  EMPTY_AUTH,
  CLEAR_ERROR,
  ADD_WRONG_ANSWER,
  ADD_RIGHT_ANSWER,
  EMPTY_CURRENT_GAME,
  ADD_WORD_IN_VOCAB,
  CLEAR_NEW_WORDS,
  ADD_NEW_WORD,
} from "./actions";
import { myvocab } from "../myvocab";

const emptyAuth = {
  isAuth: false,
  userId: null,
  email: "",
  username: "",
  role: "",
};

const emptyCurrentGame = {
  wrongAnswers: [],
  rightAnswers: [],
};

const initialState = {
  auth: emptyAuth,
  users: [],
  errors: {
    isError: false,
    message: "",
  },
  myvocab: [...myvocab],
  currentGame: emptyCurrentGame,
  uservocab: [],
  newWords: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        auth: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        errors: {
          isError: true,
          message: payload,
        },
      };

    case EMPTY_AUTH:
      return {
        ...state,
        auth: emptyAuth,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        errors: {
          isError: false,
          message: "",
        },
      };

    case ADD_RIGHT_ANSWER:
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          rightAnswers: [...state.currentGame.rightAnswers, payload],
        },
      };

    case ADD_WRONG_ANSWER:
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
        currentGame: EMPTY_CURRENT_GAME,
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
