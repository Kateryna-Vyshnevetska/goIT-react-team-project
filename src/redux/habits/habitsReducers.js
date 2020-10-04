import { createReducer } from "@reduxjs/toolkit";
import { addUserHabits, updateOneUserHabitFromSettings, uppdateUserHabits } from "./habitsActions";

const userHabitsState = [];

export const userHabits = createReducer(userHabitsState, {
  [addUserHabits]: (state, { payload }) => payload,
  [uppdateUserHabits]: (state, { payload }) => payload,
  [updateOneUserHabitFromSettings]: (state, { payload }) => state.map(el => el._id === payload._id ? el = payload: el)  ,
});
