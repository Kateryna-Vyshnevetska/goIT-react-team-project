import { createReducer } from "@reduxjs/toolkit";
import { countNotesAction } from "./notificationAction";

const notesState = [];

export const countOfNotification = createReducer(notesState, {
  [countNotesAction]: (state, { payload }) => payload,
});
