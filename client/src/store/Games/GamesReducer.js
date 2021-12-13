import {
  ADD_WRONG_ANSWER,
  ADD_RIGHT_ANSWER,
  EMPTY_CURRENT_GAME,
  ADD_WORD_IN_VOCAB,
  CLEAR_NEW_WORDS,
  ADD_NEW_WORD,
  GET_RANDOM_WORD,
  ADD_COUNT,
  CLEAR_COUNTER,
  ADD_GAME_TITLE, FETCH_DICTIONARY, FETCH_USER_DICTIONARY, ADD_WORD_IN_USER_DICT,
} from "../actions";

const emptyCurrentGame = {
  gameTitle: "",
  wrongAnswers: [],
  rightAnswers: [],
};

const initialState = {
  counter: 0,
  myvocab: [],
  currentGame: emptyCurrentGame,
  uservocab: [],
  newWords: 0,
  randomWord: null,
};

export const GamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DICTIONARY:
      return {
        ...state,
        myvocab: payload,
      }

    case FETCH_USER_DICTIONARY:
      return {
        ...state,
        uservocab: payload,
      }

    case GET_RANDOM_WORD:
      return {
        ...state,
        randomWord: payload,
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

    case ADD_GAME_TITLE:
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          gameTitle: payload,
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

    case ADD_COUNT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case CLEAR_COUNTER:
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};
