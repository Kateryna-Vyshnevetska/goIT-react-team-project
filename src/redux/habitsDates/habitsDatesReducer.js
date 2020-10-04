import { createReducer } from "@reduxjs/toolkit";
import {
  userHabitsDatesCreate,
  userHabitsDatesUppdate,
  userHabitsDatesDelete,
} from "./habitsDatesAction";

const habitsDates = [];

export const usersHabitsDates = createReducer(habitsDates, {
  [userHabitsDatesCreate]: (state, { payload }) => [payload, ...state],
  [userHabitsDatesUppdate]: (state, { payload }) => payload,
  [userHabitsDatesDelete]: (state, { payload }) => {
    let index;
    state.forEach((el) => {
      if (el.habitId === payload) {
        index = state.indexOf(el);
      }
    });
    state.splice(index, 1);
  },
});
