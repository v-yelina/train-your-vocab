import { FETCH_USERS } from "../actions";

const URL = "http://localhost:8080/api/v1/";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("authInfo")).token;

      const response = await fetch(`${URL}users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-oauth-token": token,
        },
      });
      const data = await response.json();
      dispatch(fetchUsers(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

const fetchUsers = (data) => {
  return {
    type: FETCH_USERS,
    payload: data,
  };
};
