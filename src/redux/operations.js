import axios from "axios";
import { errors } from "../redux/checkErrors/errorActions";
import { addUserInfo, updateUserAvatar } from "../redux/user/userActions";
import { addUserQuizInfo } from "../redux/quizInfo/quizInfoActions";
import {
  addUserHabits,
  setFalseForHabit,
  setTrueForHabit,
  updateOneUserHabitFromSettings,
  uppdateUserHabits,
} from "../redux/habits/habitsActions";
import { addUserCigarettes } from "../redux/cigarettes/cigarettesActions";
import { addUserAuthToken } from "../redux/authToken/authTokenAction";
import { isAuthCurrentUser } from "../redux/isAuthUser/isAuthUserAction";
import { isLoadingAction } from "../redux/isLoading/isLoadingAction";
import { isFirstModal } from "../redux/flagForFirsModal/flagFirstModalAction";
import { congratulationModal } from "../redux/congratulationModal/CongratulationModalAction";
import { createHabbitDataArr } from "../helpers/createHabbitDataArr";
import {
  userHabitsDatesDelete,
  userHabitsDatesUppdate,
} from "../redux/habitsDates/habitsDatesAction";
import { userHabitsDatesCreate } from "../redux/habitsDates/habitsDatesAction";
import { mainHabitDatesCreate } from "./mainHabitDates/mainHabitDatesAction";
import { createMainHabbitDataArr } from "../helpers/createMainHabitDates";
import { subscriptionAction } from "./subscription/subscriptionAction";
import {
  addPaymentCard,
  updatePaymentData,
} from "./addPatmentCard/addPaymentCardAction";
import SubscriptionModal from "../components/habitChoiceModal/subscriptionModal/SubscriptionModal";

axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

export const getAllUserDataForState = (token) => async (dispatch, getState) => {
  // Получение всей инфы по юзеру, нужно передать сюда токен из стейта
  dispatch(isLoadingAction(true));
  try {
    const { data } = await axios.get("/habits", {
      headers: {
        Authorization: token,
      },
    });
    let count = 0;
    dispatch(
      subscriptionAction({
        plan:
          data.user.subscription === ""
            ? "Текущий план не выбран"
            : data.user.subscription,
      })
    );

    dispatch(addUserCigarettes(data.user.cigarettes));

    dispatch(addUserInfo(data.user));
    dispatch(addUserQuizInfo(data.user.quizInfo));
    dispatch(addUserHabits(data.habits));

    dispatch(updatePaymentData(data.user.payments));

    let arrHabitsDates = data.habits.map((el) => {
      return createHabbitDataArr(el);
    });

    dispatch(userHabitsDatesUppdate(arrHabitsDates));

    let mainHabitDates = createMainHabbitDataArr(
      data.user.cigarettes.startedAt
    );
    dispatch(mainHabitDatesCreate(mainHabitDates));
    dispatch(isAuthCurrentUser(true));

    Object.values(data.user.quizInfo).map((el) =>
      el >= 1 ? (count += 1) : ""
    );
    count === 4 ? dispatch(isFirstModal(false)) : dispatch(isFirstModal(true));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const signUp = (userData) => async (dispatch) => {
  // Регистрация и логин, вовращает токен в стейт
  dispatch(isLoadingAction(true));
  axios
    .post("/auth/registration", userData)
    .then((res) => axios.post("/auth/login", userData))
    .then((res) => {
      dispatch(isAuthCurrentUser(true));
      dispatch(addUserAuthToken(res.data.access_token));
      dispatch(isLoadingAction(false));
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
  dispatch(isLoadingAction(true));
  try {
    const habit = await axios.post("/habits", newHabit, {
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
    const newhabitDates = createHabbitDataArr(habit.data);
    dispatch(userHabitsDatesCreate(newhabitDates));
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
    dispatch(userHabitsDatesDelete(id));
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
    dispatch(userHabitsDatesDelete(habit._id));
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
    dispatch(updateUserAvatar(data.avatar));
    dispatch(addUserInfo(data));
    dispatch(isLoadingAction(false));
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

    dispatch(addUserQuizInfo(data));
    dispatch(isFirstModal(false));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const changeUserPassword = (newPassword, token) => async (dispatch) => {
  dispatch(isLoadingAction(true));
  try {
    axios.post("/auth/updatePassword", newPassword, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const updateSubscriptionLevel = (planName, token) => async (
  dispatch,
  getState
) => {
  dispatch(isLoadingAction(true));

  try {
    const data = await axios.post("/users/updateSubscription", planName, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(subscriptionAction(planName));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const addCardInfo = (cardInfo, token) => async (dispatch) => {
  dispatch(isLoadingAction(true));
  try {
    axios.post("/users/addPayment", cardInfo, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(addPaymentCard(cardInfo));
    dispatch(isLoadingAction(false));
  } catch (error) {
    dispatch(errors(error.message));
  }
};

export const updateDateInUserHabit = (type, id, indexOfDate, token) => async (
  dispatch,
  getState
) => {
  dispatch(isLoadingAction(true));

  if (type === "done") {
    dispatch(setTrueForHabit({ id, indexOfDate }));
  } else if (type === "missed") {
    dispatch(setFalseForHabit({ id, indexOfDate }));
  }
  const serchHabit = getState().userHabits.find((el) =>
    el._id === id ? el : ""
  );

  const habit = {
    id: serchHabit._id,
    name: serchHabit.name,
    data: serchHabit.data,
  };

  try {
    const { data } = await axios.patch("/habits", habit, {
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
