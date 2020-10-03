import { createReducer } from "@reduxjs/toolkit";
import { isLoadingAction } from "./isLoadingAction";

const isLoadingState = false;

export const isLoading = createReducer(isLoadingState, {
  [isLoadingAction]: (state, { payload }) => payload,
});
