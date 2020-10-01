import { lazy } from "react";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const LogIn = lazy(() =>
  import("./components/logIn/logIn" /* webpackChunkName: "logIn" */)
);
const SignUp = lazy(() =>
  import("./components/signUp/signUp" /* webpackChunkName: "signUp" */)
);
const CheckListPage = lazy(() =>
  import(
    "./components/checkListPage/checkListPage" /* webpackChunkName: "checkListPage" */
  )
);
const ProfilePage = lazy(() =>
  import(
    "./components/profilePage/profilePage" /* webpackChunkName: "profilePage" */
  )
);
const AchievementsPage = lazy(() =>
  import(
    "./components/achievementsPage/achievementsPage" /* webpackChunkName: "achievementsPage" */
  )
);
const NotificationsPage = lazy(() =>
  import(
    "./components/notificationsPage/notificationsPage" /* webpackChunkName: "notificationsPage" */
  )
);
const ChooseAvatarPage = lazy(() =>
  import(
    "./components/chooseAvatarPage/chooseAvatarPage" /* webpackChunkName: "chooseAvatarPage" */
  )
);
const SubscriptionsPage = lazy(() =>
  import(
    "./components/subscriptionsPage/subscriptionsPage" /* webpackChunkName: "subscriptionsPage" */
  )
);
const PageNotFound = lazy(() =>
  import(
    "./components/pageNotFound/pageNotFound" /* webpackChunkName: "pageNotFound" */
  )
);

export default {
  SubscriptionsPage,
  PageNotFound,
  ChooseAvatarPage,
  NotificationsPage,
  AchievementsPage,
  ProfilePage,
  CheckListPage,
  SignUp,
  LogIn,
  HomePage,
};
