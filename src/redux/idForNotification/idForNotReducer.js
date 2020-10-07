import { createReducer } from "@reduxjs/toolkit";
import { idNot } from "./idForNotAction";

const idNotesState = [];

export const countOfNotification = createReducer(idNotesState, {
  [idNot]: (state, { payload }) => payload,
});
