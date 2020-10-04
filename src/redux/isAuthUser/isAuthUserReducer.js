import { createReducer } from "@reduxjs/toolkit";
import { isAuthCurrentUser } from "./isAuthUserAction";

const userCigarettesState = false;

export const isAuthUser = createReducer(userCigarettesState, {
  [isAuthCurrentUser]: (state, { payload }) => payload,
});
