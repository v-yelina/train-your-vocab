import {
  FETCH_STATISTIC,
  ADD_BUILD_WORD,
  ADD_CHOOSE_ONE,
  ADD_ENTER_TRANSLATION,
  ADD_LEARNED_WORDS,
} from "../actions";

const initialState = {
  statistic: [
    {
      userId: 1,
      choose_one_count: 0,
      enter_translation_count: 0,
      build_word_count: 0,
      learned_words: 0,
    },
  ], // [{userId, choose_one_count, enter_translation_count,build_word_count, learned_words_count}, {...}]
  errors: {
    isError: false,
    message: "",
  },
};

export const StatisticReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STATISTIC:
      return { ...state, statistic: payload };
    case ADD_CHOOSE_ONE:
      return {
        ...state,
        statistic: {
          ...state.statistic,
          choose_one_count: state.statistic.choose_one_count + 1,
        },
      };
    case ADD_ENTER_TRANSLATION:
      return {
        ...state,
        statistic: {
          ...state.statistic,
          enter_translation_count: state.statistic.enter_translation_count + 1,
        },
      };
    case ADD_BUILD_WORD:
      return {
        ...state,
        statistic: {
          ...state.statistic,
          build_word_count: state.statistic.build_word_count + 1,
        },
      };
    case ADD_LEARNED_WORDS:
      return {
        ...state,
        statistic: {
          ...state.statistic,
          learned_words: state.statistic.learned_words + payload,
        },
      };
    default:
      return state;
  }
};
