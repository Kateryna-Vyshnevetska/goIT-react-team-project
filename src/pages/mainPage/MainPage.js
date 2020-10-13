import React, { useEffect } from "react";
import { LeftSideBar } from "../../components/leftSideBar/LeftSideBar";
import { CheckListPage } from "../checkListPage/CheckListPage";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "../../components/privateRoute/PrivateRoute";
import { AchievementsPage } from "../achievementsPage/AchievementsPage";
import { Notifiacation } from "../notification/Notification";
import { ProfilePage } from "../profilePage/ProfilePage";
import "../checkListPage/checkListPage.css";
import { Spinner } from "../../ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserDataForState } from "../../redux/operations";
import { authToken, userHabits, usersHabitsDates } from "../../redux/selectors";
import { AvatarsPage } from "../avatarsPage/AvatarsPage";
import { SubscriptionsPage } from "../subscriptionsPage/SubscriptionsPage";
import { checkMessagesForNote } from "../../helpers/checkNotifications";
import { countNotesAction } from "../../redux/notificationPage/notificationAction";

import Congratulations from "../../components/congratsModal/Congratulations";
import { notificationType } from "../../redux/selectors";
import { object } from "yup";
import FindHabitById from "../../helpers/FindHabitById";

export const MainPage = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const habits = userHabits(state);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const stateNotesArr = useSelector((state) => state.countOfNotification);
  let notificationArr = checkMessagesForNote(habitsList, habitsInfo);

  useEffect(() => {
    dispatch(getAllUserDataForState(authToken(state)));
  }, [authToken(state)]);

  useEffect(() => {
    notificationArr = checkMessagesForNote(habitsList, habitsInfo);
  }, [notificationArr]);

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("habitsId");
    const habitsStorage = JSON.parse(dataFromStorage);
    // const notification = checkMessagesForNote(habitsList, habitsInfo);
    // let flag = 0;
    if (habitsStorage) {
      return;
      // const idOld = habitsStorage.map((el) => el._id);
      // const idNew = notification.map((el) => el.id);
      // if (idOld.length === 0) {
      //   const arrOfhabitDone = [];
      //   notification.forEach((el) =>
      //     arrOfhabitDone.push(FindHabitById(habits, el.id))
      //   );
      //   localStorage.setItem("habitsId", JSON.stringify(arrOfhabitDone));
      // }
      // for (let i = 0; i < idNew.length; i++) {
      //   if (idNew[i] === idOld[i]) {
      //     flag += 1;
      //   }
      // }
      // if (flag === idOld.length) {
      //   dispatch(countNotesAction());
      // } else if (idOld.length !== idNew.length) {
      //   dispatch(countNotesAction(notification));
      // }
    } else {
      // dispatch(countNotesAction(notificationArr));
      localStorage.setItem("habitsId", JSON.stringify([]));
    }
  }, [notificationArr.length]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="main-container">
        <LeftSideBar />

        <Switch>
          <PrivateRoute
            exact
            path={`/make-it-habit/check-list`}
            component={CheckListPage}
          />
          <PrivateRoute
            exact
            path={`/make-it-habit/achievements`}
            component={AchievementsPage}
          />
          <PrivateRoute
            exact
            path={`/make-it-habit/notification`}
            component={Notifiacation}
          />
          <PrivateRoute
            exact
            path={`/make-it-habit/profile`}
            component={ProfilePage}
          />
          <PrivateRoute
            exact
            path={`/make-it-habit/change-avatar`}
            component={AvatarsPage}
          />

          <PrivateRoute
            exact
            path={`/make-it-habit/subscription`}
            component={SubscriptionsPage}
          />
          <Redirect to="/make-it-habit/check-list" />
        </Switch>

        <RightSideBar />
      </div>
    </>
  );
};
