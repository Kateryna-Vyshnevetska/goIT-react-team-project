import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./privateRoute/PrivateRoute";
import PublicRoute from "./publicRoute/PublicRoute";
import { PageNotFound } from "../pages/pageNotFound/PageNotFound";
import { LeftSideBar } from "./leftSideBar/LeftSideBar";
import { CheckListPage } from "../pages/checkListPage/CheckListPage";
import { BasicInput } from "./BasicInput/BasicInput";
import CustomButton from "./CustomButton/CustomButton";
import CustomHabitModal from "./Modals/CustomHabitModal/CustomHabitModal";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import AchievementsPage from "../pages/achievementsPage/AchievementsPage";
import {
  createHabitAndGetAllHabits,
  getAllUserDataForState,
  deleteHabitAndGetAllHabits,
  signUp,
} from "../redux/operations";
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

export function App() {
  return (
    <>
      {/* {<AchievementsPage />} */}
      {/* <CustomHabitModal /> */}
      {/* <HomePage /> */}
      {/* <CheckListPage /> */}
      {/* <Suspense fallback={<Spinner />}> */}
      {/* <Switch> */}
      {/* <PublicRoute exact path="/" /* component={HomePage} */}
      {/* <PublicRoute path="/logIn" /*  component={LogIn}  */
      /*/}
          {/* <PublicRoute path="/signUp" /*  component={SignUp}  */
      /*/}

          {/* <PrivateRoute */}
      {/* path="/checkListPage/" /*  component={CheckListPage}  */}
      {/* /> */}

      {/* <PrivateRoute path="/profilePage" /*  component={ProfilePage}  */
      /*/}
          {/* <PrivateRoute */}
      {/* path="/achievementsPage" /*  component={AchievementsPage}  */}
      {/* /> */}
      {/* <PrivateRoute */}
      {/* path="/notificationsPage" /*  component={NotificationsPage}  */}
      {/* /> */}
      {/* <PrivateRoute */}
      {/* path="/subscriptionsPage" /*  component={SubscriptionsPage}  */}
      {/* /> */}
      {/* <PrivateRoute */}
      {/* path="/chooseAvatarPage" /*  component={ChooseAvatarPage}  */}
      {/* /> */}
      {/* <PrivateRoute path="/pageNotFound" /*  component={PageNotFound}  */}
      {/* </Switch> */}
      {/* </Suspense> */}
    </>
  );
}
