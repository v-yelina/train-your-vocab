import {FETCH_ONE_USER, FETCH_USERS} from "../actions";

const initialState = {
  list: [],
  errors: {
    isError: false,
    message: "",
  },
  current_user: null
};

export const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, list: payload };

    case FETCH_ONE_USER:
      return { ...state, current_user: payload };

    default:
      return state;
  }
};
