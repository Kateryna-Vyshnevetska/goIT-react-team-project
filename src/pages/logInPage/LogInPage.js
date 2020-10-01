import React from "react";
import styles from "./logInPage.module.css";

const LogInPage = () => {
  return (
    <div>
      <div className={styles.container}>
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
          <label>Логин</label>
          <input type="text"></input>
          <label>Пароль</label>
          <input type="text"></input>
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
        </form>
      </div>
    </div>
  );
};
export default LogInPage;
