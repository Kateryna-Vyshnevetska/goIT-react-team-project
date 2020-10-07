import { createReducer } from "@reduxjs/toolkit";
import { countNotesAction } from "./notificationAction";

const notesState = [];

export const statusOfNotification = createReducer(notesState, {
  [countNotesAction]: (state, { payload }) => payload,
});
