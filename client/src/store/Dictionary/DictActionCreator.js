import { FETCH_DICTIONARY } from "../actions";

const URL = "http://localhost:8080/api/v1/";

export const getAllWords = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}dictionary`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(fetchDictionary(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const fetchDictionary = (data) => {
  return {
    type: FETCH_DICTIONARY,
    payload: data,
  };
};
