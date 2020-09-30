import { createReducer } from "@reduxjs/toolkit";
import { addUserHabits } from "./habitsActions";

const userHabitsState = [];

export const userHabits = createReducer(
  { ...userHabitsState },
  {
    [addUserHabits]: (state, { payload }) => payload,
  }
);
