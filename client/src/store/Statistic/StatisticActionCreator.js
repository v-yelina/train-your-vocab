import {ADD_BUILD_WORD, ADD_CHOOSE_ONE, ADD_ENTER_TRANSLATION, ADD_LEARNED_WORDS, FETCH_STATISTIC} from "../actions";
const URL = "http://localhost:8080/api/v1/";

export const updateStatisticByUser = (newStat) => {
    return async (dispatch) => {
        try {
            console.log('try to fetch')
            console.log(newStat)
            const response = await fetch(`${URL}statistic/${newStat.statistic.userId}`, {
                method: "PUT",
                body: JSON.stringify({
                        userId: newStat.statistic.userId,
                        choose_one_count: newStat.statistic.choose_one_count,
                        enter_translation_count: newStat.statistic.enter_translation_count,
                        build_word_count: newStat.statistic.build_word_count,
                        learned_words_count: newStat.statistic.learned_words_count,
                        isActive: newStat.statistic.isActive,
                    }
                ),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // const data = await response.json();
            // if (response.status === 200) {
            //     console.log('try to dispatch')
            //
            //     const statistic = {
            //         userId: data.userId,
            //         choose_one_count: data.choose_one_count,
            //         enter_translation_count: data.enter_translation_count,
            //         build_word_count: data.build_word_count,
            //         learned_words_count: data.learned_words_count,
            //         isActive: data.isActive,
            //     };
            //     dispatch(updateStatistic(data))
            //     return true;
            // }
        } catch (err) {
            console.log(err.message);
        }
    };
};

// const updateStatistic = (data) => {
//     return {
//         type: UPDATE_STATISTIC,
//         payload: data,
//     };
// }

export const getUserStatistic = (data) => {
    return {
        type: FETCH_STATISTIC,
        payload: data.statistic,
    };
}

export const addResultsInStatistic = (game) => {
    return {
        type: chooseGame(game),
    }
}

const chooseGame = (game) => {
    switch (game) {
        case 'build_word':
            return ADD_BUILD_WORD;
        case 'choose_one':
            return ADD_CHOOSE_ONE;
        case 'enter_translation':
            return ADD_ENTER_TRANSLATION;
        default: return 'No such a game'
    }
}

export const addLearnedWordsInStatistic = (wordsCount) => {
    return {
        type: ADD_LEARNED_WORDS,
        payload: wordsCount
    }
}
