import {
  SET_NEW_ANSWER,
  EMPTY_ANSWER,
  SHOW_ANSWER,
  DONT_SHOW_ANSWER,
  SET_FALSE,
  SET_TRUE,
} from "../actions";

const initialState = {
  isTrue: false,
  answer: "",
  showAnswer: 0,
};

export const EnterTranslationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_NEW_ANSWER:
      return {
        ...state,
        answer: payload,
      };
    case EMPTY_ANSWER:
      return {
        ...state,
        answer: "",
      };

    case SHOW_ANSWER:
      return {
        ...state,
        showAnswer: 1,
      };

    case DONT_SHOW_ANSWER:
      return {
        ...state,
        showAnswer: 0,
      };

    case SET_TRUE:
      return {
        ...state,
        isTrue: true,
      };

    case SET_FALSE:
      return {
        ...state,
        isTrue: false,
      };

    default:
      return state;
  }
};
