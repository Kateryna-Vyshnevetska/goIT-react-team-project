import { createReducer } from "@reduxjs/toolkit";
import { isFirstModal } from "./flagFirstModalAction";

const isfirstModal = false;

export const firstModalForUser = createReducer(isfirstModal, {
  [isFirstModal]: (state, { payload }) => payload,
});
