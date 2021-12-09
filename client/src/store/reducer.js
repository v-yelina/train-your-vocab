import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { UsersReducer } from "./Users/UsersReducer";
import { GamesReducer } from "./Games/GamesReducer";
import { EnterTranslationReducer } from "./Games/EnterTranslationReducer";
import { DictionaryReducer } from "./Dictionary/DictReducer";
import { StatisticReducer } from "./Statistic/StatisticReducer";

export const reducer = combineReducers({
  statistic: StatisticReducer,
  auth: AuthReducer,
  user: UsersReducer,
  games: GamesReducer,
  enterTranslation: EnterTranslationReducer,
  dict: DictionaryReducer,
});
