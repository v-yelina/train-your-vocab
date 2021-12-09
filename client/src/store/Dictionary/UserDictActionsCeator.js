import { FETCH_USER_DICTIONARY } from "../actions";

const URL = "http://localhost:8080/api/v1/";

export const getWordsByUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}dictionary/:${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(fetchUserDictionary(userId, data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const fetchUserDictionary = (userId, data) => {
  return {
    type: FETCH_USER_DICTIONARY,
    payload: [userId, data],
  };
};
