import { createReducer } from "@reduxjs/toolkit";
import { addUserCigarettes } from "./cigarettesActions";

const userCigarettesState = {
  startedAt: "",
  data: [],
};

export const userCigarettes = createReducer(userCigarettesState, {
  [addUserCigarettes]: (state, { payload }) => payload,
});
