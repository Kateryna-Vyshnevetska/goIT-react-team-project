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

export const MainPage = () => {
  const state = useSelector((state) => state);
  const habitsList = userHabits(state);
  const habitsInfo = usersHabitsDates(state);
  const isLoading = useSelector((state) => state.isLoading);
  const notification = notificationType(state);
  const dispatch = useDispatch();

  const notificationArr = checkMessagesForNote(habitsList, habitsInfo);

  useEffect(() => {
    dispatch(getAllUserDataForState(authToken(state)));
  }, [authToken(state)]);

  useEffect(() => {
    notificationArr.length && dispatch(countNotesAction(notificationArr));
  });

  return (
    <>
      {isLoading && <Spinner />}
      <div className="main-container">
        <LeftSideBar />
        {/* {notification.some((el) => el === "success") && <Congratulations />} */}

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
          <PrivateRoute exact path={`/make-it-habit/profile`} component={ProfilePage} />
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
