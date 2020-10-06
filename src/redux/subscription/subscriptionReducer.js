import { createReducer } from "@reduxjs/toolkit";
import { subscriptionAction } from "./subscriptionAction";

const subscriptionState = {
  plan: "",
};

export const subscriptionLevel = createReducer(subscriptionState, {
  [subscriptionAction]: (state, { payload }) => payload,
});
