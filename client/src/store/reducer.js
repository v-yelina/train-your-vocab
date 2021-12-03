import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { UsersReducer } from "./Users/UsersReducer";
import { GamesReducer } from "./Games/GamesReducer";

export const reducer = combineReducers({
  auth: AuthReducer,
  user: UsersReducer,
  games: GamesReducer,
});
