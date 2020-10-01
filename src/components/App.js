import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage";
import PrivateRoute from "./privateRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";
import { PageNotFound } from "../pages/pageNotFound/PageNotFound";
import { CheckListPage } from "../pages/checkListPage/CheckListPage";
import { BasicInput } from "./BasicInput/BasicInput";
import CustomButton from "./CustomButton/CustomButton";
import LogInPage from "../pages/logInPage/LogInPage";
// import {
//   SubscriptionsPage,
//   PageNotFound,
//   ChooseAvatarPage,
//   NotificationsPage,
//   AchievementsPage,
//   ProfilePage,
//   CheckListPage,
//   SignUp,
//   LogIn,
//   HomePage,
// } from "../routes";
import RegisterPage from "../pages/registerPage/RegisterPage";

export function App() {
  return (
    <>
      {/* <RegisterPage /> */}
      <LogInPage />
      {/* <HomePage /> */}
      {/* <CheckListPage /> */}
      {/* <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute path="/logIn" component={LogInPage} />
          <PublicRoute path="/signUp" component={RegisterPage} />
          <PrivateRoute path="/checkListPage/" component={CheckListPage} />

          <PrivateRoute path="/profilePage" component={ProfilePage} />

          <PrivateRoute path="/achievementsPage" component={AchievementsPage} />
          <PrivateRoute
            path="/notificationsPage"
            component={NotificationsPage}
          />
          <PrivateRoute
            path="/subscriptionsPage"
            component={SubscriptionsPage}
          />
          <PrivateRoute path="/chooseAvatarPage" component={ChooseAvatarPage} />
          <PrivateRoute path="/pageNotFound" component={PageNotFound} />
        </Switch>
      </Suspense> */}
    </>
  );
}
