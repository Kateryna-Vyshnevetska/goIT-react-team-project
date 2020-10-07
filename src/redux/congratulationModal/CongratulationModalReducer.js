import { createReducer } from "@reduxjs/toolkit";
import { congratulationModal } from "./CongratulationModalAction";
let modal = false;
export const congratulationModalForUser = createReducer(modal, {
  [congratulationModal]: (_, { payload }) => payload,
});
