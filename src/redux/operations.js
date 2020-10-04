import axios from "axios";
import { errors } from "../redux/checkErrors/errorActions";
import { addUserInfo, updateUserAvatar } from "../redux/user/userActions";
import { addUserQuizInfo } from "../redux/quizInfo/quizInfoActions";
import {
  addUserHabits,
  updateOneUserHabitFromSettings,
  uppdateUserHabits,
} from "../redux/habits/habitsActions";
import { addUserCigarettes } from "../redux/cigarettes/cigarettesActions";
import { addUserAuthToken } from "../redux/authToken/authTokenAction";
import { isAuthCurrentUser } from "../redux/isAuthUser/isAuthUserAction";
import { isLoadingAction } from "../redux/isLoading/isLoadingAction";
import { isFirstModal } from "../redux/flagForFirsModal/flagFirstModalAction";
import { createHabbitDataArr } from "../helpers/createHabbitDataArr";
import { userHabitsDatesUppdate } from "../redux/habitsDates/habitsDatesAction";
axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

export const getAllUserDataForState = (token) => async (dispatch) => {
  // Получение всей инфы по юзеру, нужно передать сюда токен из стейта
  dispatch(isLoadingAction(true));
  try {
    const { data } = await axios.get("/habits", {
      headers: {
        Authorization: token,
      },
    });
    let count = 0;
    console.log(data);
    dispatch(addUserInfo(data.user));
    dispatch(addUserQuizInfo(data.user.quizInfo));
    dispatch(addUserHabits(data.habits));
    data.habits.forEach((el) => {
      dispatch(createHabbitDataArr(el));
    });
    dispatch(addUserCigarettes(data.user.cigarettes));
    dispatch(isAuthCurrentUser(true));
    dispatch(isLoadingAction(false));

    Object.values(data.user.quizInfo).map((el) =>
      el >= 1 ? (count += 1) : ""
    );
    count === 4 ? dispatch(isFirstModal(false)) : dispatch(isFirstModal(true));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const signUp = (userData) => async (dispatch) => {
  // Регистрация и логин, вовращает токен в стейт
  axios
    .post("/auth/registration", userData)
    .then((res) => axios.post("/auth/login", userData))
    .then((res) => {
      dispatch(isAuthCurrentUser(true));
      dispatch(addUserAuthToken(res.data.access_token));
    })
    .catch((error) => dispatch(errors(error)));
};

export const logOut = () => (dispatch) => {
  dispatch(isAuthCurrentUser(false));
  dispatch(addUserAuthToken({}));
  dispatch(addUserInfo({}));
  dispatch(addUserQuizInfo({}));
  dispatch(addUserHabits([]));
  dispatch(addUserCigarettes([]));
};

export const logIn = (userData) => async (dispatch) => {
  // Вход существующего юзера, возвращает токен в стейт
  dispatch(isLoadingAction(true));
  axios
    .post("/auth/login", userData)
    .then((res) => {
      dispatch(isAuthCurrentUser(true));
      dispatch(addUserAuthToken(res.data.access_token));
      dispatch(getAllUserDataForState(res.data.access_token));
      dispatch(isLoadingAction(false));
    })
    .catch((error) => dispatch(errors(error)));
};

export const createHabitAndGetAllHabits = (newHabit, token) => async (
  dispatch
) => {
  // Операция для создания новой привычки и сразу обновления привычек в стейт

  //  формат объекта newHabit
  // {
  //    name: "andrewHabit",
  //    planningTime: "andrewHabit",
  //    iteration: "andrewHabit ",
  //  }
  dispatch(isLoadingAction(true));
  try {
    await axios.post("/habits", newHabit, {
      headers: {
        Authorization: token,
      },
    });
    const { data } = await axios.get("/habits", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(uppdateUserHabits(data.habits));
    dispatch(isLoadingAction(false));
    dispatch(userHabitsDatesUppdate());

    data.habits.forEach((el) => {
      dispatch(createHabbitDataArr(el));
    });
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const deleteHabitAndGetAllHabits = (id, token) => async (dispatch) => {
  dispatch(isLoadingAction(true));
  try {
    await axios.delete(`/habits/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { data } = await axios.get("/habits", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(uppdateUserHabits(data.habits));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const updateOneUserHabitFromChecklistPage = (newHabit, token) => async (
  dispatch,
  getState
) => {
  dispatch(isLoadingAction(true));

  try {
    const { data } = await axios.patch("/habits", newHabit, {
      headers: {
        Authorization: token,
      },
    });

    dispatch(updateOneUserHabitFromSettings(data.updatedHabit));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const deleteOneHabitFromUpdateModal = (habit, token) => async (
  dispatch
) => {
  dispatch(isLoadingAction(true));
  try {
    await axios.delete(`/habits/${habit._id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { data } = await axios.get("/habits", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(uppdateUserHabits(data.habits));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const updateUserInfo = (newData, token) => async (dispatch) => {
  dispatch(isLoadingAction(true));

  try {
    const { data } = await axios.patch("/users", newData, {
      headers: {
        Authorization: token,
      },
    });
    console.log("data", data);
    dispatch(updateUserAvatar(data.avatar));
    dispatch(addUserInfo(data));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const updateQuizeInfo = (newInfo, token) => async (dispatch) => {
  dispatch(isLoadingAction(true));
  try {
    const { data } = await axios.post(`/users/updateQuizInfo`, newInfo, {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);

    dispatch(addUserQuizInfo(data));
    dispatch(isFirstModal(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const changeUserPassword = (newPassword, token) => async (dispatch) => {
  try {
    axios.post("/auth/updatePassword", newPassword, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    dispatch(errors(error.message));
  }
};
