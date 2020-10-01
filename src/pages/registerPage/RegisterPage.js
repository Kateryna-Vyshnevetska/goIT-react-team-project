import React from "react";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={require("../../images/logIn/logo.svg")}
          alt="logo"
          className={styles.logo}
        />

        <form className={styles.form}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
          <p className={styles.text}>
            Введите свои данные, чтобы <br /> продолжить использовать наше
            приложение
          </p>
          <BasicInput
            placeholder="Введите свой E-mail"
            type="text"
            forLabel="E-mail"
            id="e-mail"
            labelText="E-mail"
            name="e-mail"
            labelWidth="120px"
            inputWidth="345px"
            marginBottom="15px"
          />
          <BasicInput
            placeholder="Введите свой пароль"
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
            <button className={styles.logInButton}>Зарегистрироваться</button>
            <button className={styles.buttonGoogle}>
              Войти с помощью Google
            </button>
            <button className={styles.buttonFacebook}>
              Войти с помощью Facebook
            </button>
            <button className={styles.registerButton}>Вход</button>
            <p className={styles.formText}>
              By signing up you agree to our Terms & Conditions
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
