import { combineReducers } from "redux";

import { errorReducer } from "./checkErrors/errorReducer";
import { userInfo } from "./user/userReducers";
import { quizInfo } from "./quizInfo/quizInfoReducers";
import { userHabits } from "./habits/habitsReducers";
import { userCigarettes } from "./cigarettes/cigarettesReducers";
import { authToken } from "./authToken/authTokenReducer";

export const rootReducer = combineReducers({
  authToken,
  userInfo,
  quizInfo,
  userHabits,
  userCigarettes,
  errors: errorReducer,
});
