import { createReducer } from "@reduxjs/toolkit";
import { mainHabitDatesCreate } from "./mainHabitDatesAction";

const habitsDates = {};

export const mainHabitDates = createReducer(habitsDates, {
  [mainHabitDatesCreate]: (state, { payload }) => payload,
});
