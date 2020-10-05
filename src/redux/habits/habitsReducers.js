import { createReducer } from "@reduxjs/toolkit";
import {
  addUserHabits,
  setFalseForHabit,
  setTrueForHabit,
  updateOneUserHabitFromSettings,
  uppdateUserHabits,
} from "./habitsActions";

const userHabitsState = [];

export const userHabits = createReducer(userHabitsState, {
  [addUserHabits]: (state, { payload }) => payload,
  [uppdateUserHabits]: (state, { payload }) => payload,
  [updateOneUserHabitFromSettings]: (state, { payload }) =>
    state.map((el) => (el._id === payload._id ? (el = payload) : el)),
  [setTrueForHabit]: (state, { payload }) => {
    let index;
    state.forEach((el) => {
      if (el._id === payload.id) {
        index = state.indexOf(el);
      }
    });

    state[index].data[payload.indexOfDate] = true;
  },

  [setFalseForHabit]: (state, { payload }) => {
    let index;
    state.forEach((el) => {
      if (el._id === payload.id) {
        index = state.indexOf(el);
      }
    });

    state[index].data[payload.indexOfDate] = false;
  },
});
