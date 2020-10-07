import { createReducer } from "@reduxjs/toolkit";
import { addUserAuthToken } from "./authTokenAction";

const authTokenState = "";

export const authToken = createReducer(authTokenState, {
  [addUserAuthToken]: (state, { payload }) => payload,
});
