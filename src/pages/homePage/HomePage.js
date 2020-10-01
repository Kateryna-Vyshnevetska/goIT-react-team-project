import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // __RouterContext,
} from "react-router-dom";
import { animated, useTransition } from "react-spring";
import styles from "./homePage.module.css";
import LogInPage from "../logInPage/LogInPage";
import RegisterPage from "../registerPage/RegisterPage";

// function useRouter() {
//   return useContext(__RouterContext);
// }

export const HomePage = () => {
  return (
    <div className={styles.section}>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/registration" component={RegisterPage} />
      </Switch>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            «Курение ослабляет силу мысли и делает неясным её выражение».
          </h1>
          <p className={styles.secondtitle}> Л.Н.Толстой</p>
        </div>
        <div className={styles.logoContainer}>
          <img
            src={require("../../images/homePage/logo.svg")}
            alt="logo"
            className={styles.logo}
          />
          <p className={styles.mainText}>Добро пожаловать!</p>
          <p className={styles.secondText}>
            Войдите или зарегистрируйтесь, чтобы начать использовать наше
            приложение
          </p>
          <Link to="/login" className={styles.logInButton}>
            Войти
          </Link>
          <Link to="/registration" className={styles.registerButton}>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};
