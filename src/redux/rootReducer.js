import { combineReducers } from "redux";

import { errorReducer } from "./checkErrors/errorReducer";
import { userInfo } from "./user/userReducers";
import { quizInfo } from "./quizInfo/quizInfoReducers";
import { userHabits } from "./habits/habitsReducers";
import { userCigarettes } from "./cigarettes/cigarettesReducers";
import { authToken } from "./authToken/authTokenReducer";
import { isAuthUser } from "./isAuthUser/isAuthUserReducer";
import { statusOfNotification } from "./notificationPage/notificationReducer";
import { isLoading } from "./isLoading/isLoadingReducer";
import { firstModalForUser } from "./flagForFirsModal/flagFirstModalReducer";
import { usersHabitsDates } from "./habitsDates/habitsDatesReducer";
import { currentDay } from "./currentDay/currentDayReducer";
import { countOfNotification } from "./idForNotification/idForNotReducer";
import { mainHabitDates } from "./mainHabitDates/mainHabitDatesReducer";

import { subscriptionLevel } from "../redux/subscription/subscriptionReducer";
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
  statusOfNotification,
  countOfNotification,
  mainHabitDates,
  subscriptionLevel,
  paymentCard,
  isLoading,
  errors: errorReducer,
});
