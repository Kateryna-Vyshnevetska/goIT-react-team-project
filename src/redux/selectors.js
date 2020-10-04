import { createSelector } from "reselect";
// Как вызывать селекторы в своем файле

// import { useSelector } from 'react-redux';
// import { то-что-нужно } from '../selectors';
// const state = useSelector(state => state);
// то-что-нужно(state);

export const authToken = (state) => state.authToken;
export const isAuthUser = (state) => state.isAuthUser;
export const userInfo = (state) => state.userInfo;
export const userInfoEmail = (state) => state.userInfo.email;
export const quizInfo = (state) => state.quizInfo;
export const userHabits = (state) => state.userHabits;
export const usersHabitsDates = (state) => state.usersHabitsDates;
export const userCigarettes = (state) => state.userCigarettes;

export const checkFirstModal = createSelector([quizInfo], (items) => {
  return Object.values(items).map((el) => el !== 0);
  // return items.filter((el) =>
  //   el.name.toLowerCase().includes(filter.toLowerCase())
  // );
});

export const getConstAmountOfCigarettesPerDay = (state) => {
  return state.quizInfo.cigarettePerDay;
};
export const getCigarettePackPrice = (state) => {
  return state.quizInfo.cigarettePackPrice;
};
export const getCurrentAmountOfCigarettes = (state) => {
  const cig = state.cigarettes.data.filter((el) => el !== null);
  return cig[cig.length - 1];
};
export const allCigarettes = (state) => {
  const cig = state.cigarettes.data.filter((el) => el !== null);
  return cig;
};
export const getTimeForOneCigarette = (state) =>
  state.quizInfo.cigarettePerTime;
