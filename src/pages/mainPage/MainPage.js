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
import { authToken } from "../../redux/selectors";
import { AvatarsPage } from "../avatarsPage/AvatarsPage";

export const MainPage = () => {
  const isLoading = useSelector((state) => state.isLoading);
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

          <Redirect to="/make-it-habit/check-list" />
        </Switch>

        <RightSideBar />
      </div>
    </>
  );
};
