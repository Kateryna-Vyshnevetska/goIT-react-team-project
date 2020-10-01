import React, { Suspense, useEffect } from "react";
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
import { modalBackDrop } from "./modalBackDrop/ModalBackDrop";
import InterviewModal from "./interviewModal/InterviewModal";

import CustomHabitModal from "./Modals/CustomHabitModal/CustomHabitModal";
import HabitTemplateModal from "./Modals/HabitTemplateModal/HabitTemplateModal";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
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
import RegisterPage from "../pages/registerPage/RegisterPage";
import LogInPage from "../pages/logInPage/LogInPage";

export function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authToken);
  // dispatch(signUp({ email: "olivka@gmail.com", password: "qwerty123" }));
  // dispatch(
  //   createHabitAndGetAllHabits(
  //     {
  //       name: "new",
  //       planningTime: "new",
  //       iteration: "some",
  //     },
  //     token
  //   )
  // );

  // const [modalShow, setModalShow] = useState(false);

  // const close = () => {
  //   setModalShow((prev) => !prev);
  // };

  return (
    <>
      {/* <CustomHabitModal /> */}
      {/* <LogInPage /> */}
      {/* <RegisterPage /> */}

      {/* <LeftSideBar/>
      <CustomHabitModal /> */}
      {/* <HomePage /> */}
      {/* <CheckListPage /> */}
      {/* <button onClick={() => setModalShow(true)}>InterviewModal</button>
      {modalShow && <InterviewModal close={close} />} */}
      {/* <CustomHabitModal /> */}
      {/* <HabitTemplateModal /> */}
      <HomePage />
      {/* <CheckListPage /> */}
      {/* <Suspense fallback={<Spinner />}> */}
      {/* <Switch> */}
      {/* <PublicRoute exact path="/" /* component={HomePage} */}
      {/* <PublicRoute path="/logIn" /*  component={LogIn}  */
      /*/}
          {/* <PublicRoute path="/signUp" /*  component={SignUp}  */
      /*/}


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
