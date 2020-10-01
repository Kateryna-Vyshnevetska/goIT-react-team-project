import React from "react";
import styles from "./logInPage.module.css";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const LogInPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={require("../../images/logIn/logo.svg")}
          alt="logo"
          className={styles.logo}
        />
        <form className={styles.form}>
          <h1 className={styles.title}>C возвращением!</h1>
          <p className={styles.text}>
            Введите свои данные, чтобы <br /> продолжить использовать наше
            приложение
          </p>
          <BasicInput
            type="text"
            forLabel="Логин"
            id="Логин"
            labelText="Логин"
            name="login"
            labelWidth="120px"
            inputWidth="345px"
            marginBottom="15px"
          />
          <BasicInput
            type="password  "
            forLabel="Пароль"
            id="Пароль"
            labelText="Пароль"
            name="passsword"
            labelWidth="120px"
            inputWidth="345px"
            marginBottom="40px"
          />
          <div className={styles.buttonContaineer}>
            <button className={styles.logInButton}>Войти</button>
            <button className={styles.buttonGoogle}>
              Войти с помощью Google
            </button>
            <button className={styles.buttonFacebook}>
              Войти с помощью Facebook
            </button>
            <button className={styles.registerButton}>Регистрация</button>
            <p className={styles.formText}>
              By signing up you agree to our Terms & Conditions
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LogInPage;
