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
export const userCigarettes = (state) => state.userCigarettes;

// export const getFilteredContacts = createSelector(
//   [StateFilter, StateAllContacts],
//   (filter, items) => {
//     return items.filter((el) =>
//       el.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
