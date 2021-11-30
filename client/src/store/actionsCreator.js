import { SET_AUTH, SET_ERROR, EMPTY_AUTH, CLEAR_ERROR } from "./actions";
const URL = "http://localhost:8080/api/v1/";

export const doLogin = (login) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}auth/signin`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        const authInfo = {
          isAuth: true,
          userId: data.user.id,
          email: data.user.email,
          username: data.user.username,
          role: data.user.role,
          token: data.accessToken,
        };
        dispatch(setAuth(authInfo));
        localStorage.setItem("authInfo", JSON.stringify(authInfo));
        return;
      }
      dispatch({ type: EMPTY_AUTH });
      localStorage.removeItem("authInfo");
      useError(data.message, dispatch);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const authInReload = () => {
  return async (dispatch) => {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    dispatch(setAuth(authInfo));
  };
};

const useError = (message, dispatch) => {
  dispatch(setError(message));
  setTimeout(() => {
    dispatch({ type: CLEAR_ERROR });
  }, 5000);
};

const setAuth = (data) => {
  return {
    type: SET_AUTH,
    payload: data,
  };
};

const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message,
  };
};
