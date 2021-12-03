import { FETCH_USERS } from "../actions";

const initialState = {
  list: [],
  errors: {
    isError: false,
    message: "",
  },
};

export const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, list: payload };

    default:
      return state;
  }
};
