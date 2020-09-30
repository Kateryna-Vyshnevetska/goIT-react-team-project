import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute  from "./privateRoute/PrivateRoute";
import  PublicRoute  from "./publicRoute/PublicRoute";
// import {
//   SubscriptionsPage,
//   PageNotFound,
//   ChooseAvatarPage,
//   NotificationsPage,
//   AchievementsPage,
//   ProfilePage,
//   DailyResultModal,
//   HabitTemplateModal,
//   HabitChoiceModal,
//   CustomHabitModal,
//   CongratulationModal,
//   InterviewModal,
//   CheckListPage,
//   SignUp,
//   LogIn,
//   HomePage,
// } from "../routes";

export function App() {
  return (
    <>
      <Suspense fallback={<h2>Загружаем...</h2>}>
        <Switch>
          <PublicRoute exact path="/" /* component={HomePage} */ />
          <PublicRoute path="/logIn" /*  component={LogIn}  */ />
          <PublicRoute path="/signUp" /*  component={SignUp}  */ />

          <PrivateRoute
            path="/checkListPage/" /*  component={CheckListPage}  */
          />

          <PrivateRoute
            path="/checkListPage/interviewModal" /*  component={InterviewModal}  */
          />
          <PrivateRoute
            path="/checkListPage/congratulationModal" /*  component={CongratulationModal}  */
          />
          <PrivateRoute
            path="/checkListPage/customHabitModal" /*  component={CustomHabitModal}  */
          />
          <PrivateRoute
            path="/checkListPage/habitChoiceModal" /*  component={HabitChoiceModal}  */
          />
          <PrivateRoute
            path="/checkListPage/habitTemplateModal" /*  component={HabitTemplateModal}  */
          />
          <PrivateRoute
            path="/checkListPage/dailyResultModal" /*  component={DailyResultModal}  */
          />

          <PrivateRoute path="/profilePage" /*  component={ProfilePage}  */ />
          <PrivateRoute
            path="/achievementsPage" /*  component={AchievementsPage}  */
          />
          <PrivateRoute
            path="/notificationsPage" /*  component={NotificationsPage}  */
          />
          <PrivateRoute
            path="/subscriptionsPage" /*  component={SubscriptionsPage}  */
          />
          <PrivateRoute
            path="/chooseAvatarPage" /*  component={ChooseAvatarPage}  */
          />
          <PrivateRoute path="/pageNotFound" /*  component={PageNotFound}  */ />

         

         
        </Switch>
      </Suspense>
    </>
  );
}
