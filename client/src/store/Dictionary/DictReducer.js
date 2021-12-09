import { FETCH_DICTIONARY, FETCH_USER_DICTIONARY } from "../actions";

const initialState = {
  dictionary: [],
  user_dictionary: [],
  errors: {
    isError: false,
    message: "",
  },
};

export const DictionaryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DICTIONARY:
      return { ...state, dictionary: payload };
    case FETCH_USER_DICTIONARY:
      return { ...state, user_dictionary: [...state.user_dictionary, payload] };
    default:
      return state;
  }
};
