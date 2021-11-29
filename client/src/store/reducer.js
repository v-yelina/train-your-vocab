const initialState = {
  //   isAuth: false,
  //   users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case LOGIN:
    //   return { ...state, isAuth: true };

    // case LOGOUT:
    //   return { ...state, isAuth: false };

    // case FETCH_USERS:
    //   return { ...state, users: payload };

    default:
      return state;
  }
};
