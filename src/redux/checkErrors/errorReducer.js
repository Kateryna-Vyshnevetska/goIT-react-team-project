import { createReducer } from "@reduxjs/toolkit";
import { errors } from "./errorActions";
import { addUserInfo } from "../user/userActions";
import { addUserQuizInfo } from "../quizInfo/quizInfoActions";
import { addUserHabits, uppdateUserHabits } from "../habits/habitsActions";
import { addUserCigarettes } from "../cigarettes/cigarettesActions";

export const errorReducer = createReducer("", {
  [errors]: (_, { payload }) => payload,
  [addUserInfo]: (_) => "",
  [addUserQuizInfo]: (_) => "",
  [addUserHabits]: (_) => "",
  [addUserCigarettes]: (_) => "",
  [uppdateUserHabits]: (_) => "",
});
