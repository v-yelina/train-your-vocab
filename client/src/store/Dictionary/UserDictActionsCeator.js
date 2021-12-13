import {ADD_WORD_IN_USER_DICT, FETCH_USER_DICTIONARY} from "../actions";

const URL = "http://localhost:8080/api/v1/";

export const getWordsByUser = (userId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}userdictionary/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
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

export const addNewWordInDictionary = (userId, wordId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}userdictionary`, {
                method: "POST",
                body: JSON.stringify({userId: userId, wordId: wordId}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (response.status === 200) {
                const word = {
                    userId: data.userId, wordId: data.wordId
                };
                dispatch(addWordInUserDict(word))
                return true;
            }
        } catch (err) {
            console.log(err.message);
        }
    };
};

const addWordInUserDict = (data) => {
    return {
        type: ADD_WORD_IN_USER_DICT,
        payload: data,
    };
}
