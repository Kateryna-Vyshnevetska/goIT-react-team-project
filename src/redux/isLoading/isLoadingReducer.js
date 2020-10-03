import { createReducer } from "@reduxjs/toolkit";
import { isLoadingAction } from "./isLoadingAction";

const isLoadingState = true;

export const isLoading = createReducer(isLoadingState, {
  [isLoadingAction]: (state, { payload }) => payload,
});
