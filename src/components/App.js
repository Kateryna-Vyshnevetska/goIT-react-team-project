import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isAuthUser } from "../redux/selectors";
import { CheckStartPage } from "../helpers/checkStartPage";
import { HomePage } from "../pages/homePage/HomePage";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { MainPage } from "../pages/mainPage/MainPage";

export function App() {
  const state = useSelector((state) => state);
  const [page, setPage] = useState(false);

  useEffect(() => {
    setPage(CheckStartPage(isAuthUser(state)));
  }, [state]);

  return (
    <>
      {isAuthUser(state) ? (
        <Switch>
          <PrivateRoute path="/make-it-habit" component={MainPage} />
          <Redirect to="/make-it-habit/check-list" />
        </Switch>
      ) : (
        <HomePage />
      )}
    </>
  );
}
