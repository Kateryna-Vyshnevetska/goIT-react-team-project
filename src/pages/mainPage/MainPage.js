import React from "react";
import { LeftSideBar } from "../../components/leftSideBar/LeftSideBar";
import { CheckListPage } from "../checkListPage/CheckListPage";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
import { Redirect, Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../components/privateRoute/PrivateRoute";
import { AchievementsPage } from "../achievementsPage/AchievementsPage";

import "../checkListPage/checkListPage.css";

export const MainPage = () => {
  const match = useRouteMatch();
  console.log(match.path);
  return (
    <>
      <div className="main-container">
        <LeftSideBar />
        {/* <Switch>
          <PrivateRoute
            path={`${match.path}/check-list`}
            component={CheckListPage}
          />
          <PrivateRoute
            path={`${match.path}/achievements`}
            component={AchievementsPage}
          />
        </Switch> */}

        <CheckListPage />
        <RightSideBar />
      </div>
    </>
  );
};
