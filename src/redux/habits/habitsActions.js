import { createAction } from "@reduxjs/toolkit";

export const addUserHabits = createAction("habits/addUserHabits");
export const uppdateUserHabits = createAction("habits/uppdateUserHabits");

export const updateOneUserHabitFromSettings = createAction(
  "habits/updateOneUserHabitFromSettings"
);