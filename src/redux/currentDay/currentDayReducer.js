import { createReducer } from "@reduxjs/toolkit";
import { addCurrentDay } from "./currentDayAction";

const day = "";

export const currentDay = createReducer(day, {
  [addCurrentDay]: (state, { payload }) => payload,
});
