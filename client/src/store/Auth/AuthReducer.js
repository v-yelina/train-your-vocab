import { CLEAR_ERROR, EMPTY_AUTH, SET_AUTH, SET_ERROR } from "../actions";

const emptyAuth = {
  isAuth: false,
  userId: null,
  email: "",
  username: "",
  role: "",
};

const initialState = {
  auth: emptyAuth,
  errors: {
    isError: false,
    message: "",
  },
};

export const AuthReducer = (state = initialState, { type, payload }) => {
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

    default:
      return state;
  }
};
