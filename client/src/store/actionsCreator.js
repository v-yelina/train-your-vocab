import {
  SET_AUTH,
  SET_ERROR,
  EMPTY_AUTH,
  CLEAR_ERROR,
  GET_RANDOM_WORD,
} from "./actions";
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

export const doRegistration = (newUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}auth/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        dispatch(doLogin({ email: newUser.email, password: newUser.password }));
        return true;
      }
      const data = await response.json();
      dispatch({ type: EMPTY_AUTH });
      localStorage.removeItem("authInfo");
      useError(data.message, dispatch);
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const doLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("authInfo");
    dispatch({ type: EMPTY_AUTH });
  };
};

export const authInReload = () => {
  return async (dispatch) => {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    dispatch(setAuth(authInfo));
  };
};

export const getRandomWord = (vocab) => {
  return (dispatch, getState) => {
    let newRandom = getState().games.myvocab[Math.floor(Math.random() * getState().games.myvocab.length)];
    dispatch({
      type: GET_RANDOM_WORD,
      payload: newRandom,
    });
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
// Fill database dictionary with words from myvocab file
export const fillDict = () => {
  return async () => {
    try{
      const response = await fetch(`${URL}dictionary/filldata`)
      const data = response.json();
      console.log(data)
    } catch (e) {
      console.log(e.message)
    }
  }
}
