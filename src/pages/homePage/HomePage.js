import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./homePage.module.css";
import LogInPage from "../logInPage/LogInPage";
import RegisterPage from "../registerPage/RegisterPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./homePage.css";

export const HomePage = () => {
  const [logInOpenPage, setlogInOpenPage] = useState(false);
  const [registerOpenPage, setregisterOpenPage] = useState(false);
  return (
    <div className={styles.section}>
//       <Switch>
//         <CSSTransition
//           in={logInOpenPage}
//           timeout={2000}
//           classNames="title-contacts"
//           unmountOnExit
//         >
//           <Route exact path="/login" component={LogInPage} />
//         </CSSTransition>
//         <CSSTransition
//           in={registerOpenPage}
//           timeout={2000}
//           classNames="title-contacts"
//           unmountOnExit
//         >
//           <Route exact path="/registration" component={RegisterPage} />
//         </CSSTransition>
//       </Switch>

      {/* <Switch>
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/registration" component={RegisterPage} />
      </Switch> */}

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
          <Link
            to="/login"
            className={styles.logInButton}
            onClick={() => setlogInOpenPage((logInOpenPage) => !logInOpenPage)}
          >
            Войти
          </Link>
          <Link
            to="/registration"
            className={styles.registerButton}
            onClick={() =>
              setregisterOpenPage((registerOpenPage) => !registerOpenPage)
            }
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};
