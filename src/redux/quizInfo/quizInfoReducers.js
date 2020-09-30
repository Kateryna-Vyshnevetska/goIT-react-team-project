import { createReducer } from "@reduxjs/toolkit";
import { addUserQuizInfo } from "./quizInfoActions";

const quizInfoState = {
  cigarettePackPrice: "",
  cigarettePerDay: "",
  cigarettePerTime: "",
  smokeYears: "",
};

export const quizInfo = createReducer(
  { ...quizInfoState },
  {
    [addUserQuizInfo]: (state, { payload }) => ({ ...payload }),
  }
);
