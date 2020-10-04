import { createReducer } from "@reduxjs/toolkit";
import { userHabitsDatesCreate } from "./habitsDatesAction";

const habitsDates = [];

export const usersHabitsDates = createReducer(habitsDates, {
  [userHabitsDatesCreate]: (state, { payload }) => [...state, ...payload],
});
