import loginReducer from "./login";
import usersReducer from "./users";
import mapsReducer from "./maps";

import { logger } from "./middlewares";

export const initialState = {
  login: loginReducer.initialState,
  users: usersReducer.initialState,
  maps: mapsReducer.initialState
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    login,
    users,
    maps
  } = state;

  // Receiving current state here
  const currentState = {
    login: loginReducer.reducer(login, action),
    users: usersReducer.reducer(users, action),
    maps: mapsReducer.reducer(maps, action)
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
