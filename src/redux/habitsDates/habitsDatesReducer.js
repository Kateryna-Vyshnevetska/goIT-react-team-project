import { createReducer } from "@reduxjs/toolkit";
import {
  userHabitsDatesCreate,
  userHabitsDatesUppdate,
} from "./habitsDatesAction";

const habitsDates = [];

export const usersHabitsDates = createReducer(habitsDates, {
  [userHabitsDatesCreate]: (state, { payload }) => [...state, payload],

  // [...state, payload]
  [userHabitsDatesUppdate]: (state, { payload }) => habitsDates, // {
  //   if (state.habitId !== payload.habitId) {
  //     [...state, ...payload];
  //   } else {
  //     return;
  //   }
  // },
});
