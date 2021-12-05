import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { UsersReducer } from "./Users/UsersReducer";
import { GamesReducer } from "./Games/GamesReducer";
import { EnterTranslationReducer } from "./Games/EnterTranslationReducer";

export const reducer = combineReducers({
  auth: AuthReducer,
  user: UsersReducer,
  games: GamesReducer,
  enterTranslation: EnterTranslationReducer,
});
