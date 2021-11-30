import { SET_AUTH, SET_ERROR, EMPTY_AUTH, CLEAR_ERROR } from "./actions";
import { myvocab } from "../myvocab";

const emptyAuth = {
  isAuth: false,
  userId: null,
  email: "",
  username: "",
  role: "",
};

const initialState = {
  auth: emptyAuth,
  users: [],
  myvocab: [...myvocab],
  errors: {
    isError: false,
    message: "",
  },
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

    default:
      return state;
  }
};
