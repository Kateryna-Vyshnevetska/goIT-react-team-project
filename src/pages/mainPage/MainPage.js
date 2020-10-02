import React, { Suspense } from "react";
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
        <Suspense fallback={<h2>Loading...</h2>}>
          <LeftSideBar />
        </Suspense>

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
        </Switch>

        <RightSideBar />
      </div>
    </>
  );
};
