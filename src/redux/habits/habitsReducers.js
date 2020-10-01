import { createReducer } from "@reduxjs/toolkit";
import { addUserHabits, uppdateUserHabits } from "./habitsActions";

const userHabitsState = [];

export const userHabits = createReducer(userHabitsState, {
  [addUserHabits]: (state, { payload }) => payload,
  [uppdateUserHabits]: (state, { payload }) => payload,
});
