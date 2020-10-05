import { combineReducers } from "redux";

import { errorReducer } from "./checkErrors/errorReducer";
import { userInfo } from "./user/userReducers";
import { quizInfo } from "./quizInfo/quizInfoReducers";
import { userHabits } from "./habits/habitsReducers";
import { userCigarettes } from "./cigarettes/cigarettesReducers";
import { authToken } from "./authToken/authTokenReducer";
import { isAuthUser } from "./isAuthUser/isAuthUserReducer";
import { isLoading } from "./isLoading/isLoadingReducer";
import { firstModalForUser } from "./flagForFirsModal/flagFirstModalReducer";
import { usersHabitsDates } from "./habitsDates/habitsDatesReducer";
import { currentDay } from "./currentDay/currentDayReducer";
import { paymentCard } from "./addPatmentCard/addPaymentCardReduser";
export const rootReducer = combineReducers({
  authToken,
  firstModalForUser,
  isAuthUser,
  userInfo,
  quizInfo,
  userHabits,
  userCigarettes,
  usersHabitsDates,
  currentDay,
  isLoading,
  errors: errorReducer,
  paymentCard,
});
