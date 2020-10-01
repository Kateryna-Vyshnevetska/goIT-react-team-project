import React from "react";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <img
        src={require("../../images/logIn/logo.svg")}
        alt="logo"
        className={styles.logo}
      />

      <form className={styles.form}>
        <h1 className={styles.title}>Добро пожаловать!</h1>
        <p className={styles.text}>
          Введите свои данные, чтобы продолжить использовать наше приложение
        </p>
        <label>E-mail</label>
        <input type="text" placeholder="Введите свой E-mail"></input>
        <label>Пароль</label>
        <input type="text" placeholder="Придумайте пароль"></input>
        <button className={styles.registerButton}>Зарегистрироваться</button>
        <button className={styles.buttonGoogle}>Войти с помощью Google</button>
        <button className={styles.buttonFacebook}>
          Войти с помощью Facebook
        </button>
        <button className={styles.logInButton}>Вход</button>
        <p className={styles.formText}>
          By signing up you agree to our Terms & Conditions
        </p>
      </form>
    </div>
  );
};
export default RegisterPage;
