import { combineReducers } from "redux";

import { errorReducer } from "./checkErrors/errorReducer";
import { userInfo } from "./user/userReducers";
import { quizInfo } from "./quizInfo/quizInfoReducers";
import { userHabits } from "./habits/habitsReducers";
import { userCigarettes } from "./cigarettes/cigarettesReducers";
import { authToken } from "./authToken/authTokenReducer";
import { isAuthUser } from "./isAuthUser/isAuthUserReducer";

export const rootReducer = combineReducers({
  isAuthUser,
  authToken,
  userInfo,
  quizInfo,
  userHabits,
  userCigarettes,
  errors: errorReducer,
});
