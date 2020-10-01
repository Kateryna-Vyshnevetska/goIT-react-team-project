import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import PublicRoute from "../components/publicRoute/PublicRoute";
import { CheckListPage } from "../pages/checkListPage/CheckListPage";
import { HomePage } from "../pages/homePage/HomePage";
import LogInPage from "../pages/logInPage/LogInPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import { MainPage } from "../pages/mainPage/MainPage";

export const CheckStartPage = (isAuthUser) => {
  if (isAuthUser) {
    return (
      <Switch>
        <PrivateRoute path="/make-it-habit" component={MainPage} />
        <Redirect to="/make-it-habit" />
      </Switch>
    );
  }

  return (
    <Switch>
      <PublicRoute restricted path="/login" component={LogInPage} />
      <PublicRoute restricted path="/registration" component={RegisterPage} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};
