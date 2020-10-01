import React from "react";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import styles from "./registerPage.module.css";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const newUser = {};

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(signUp(newUser));
  };

  const handleChange = ({ target: { name, value } }) => {
    newUser[name] = value;
  };
  return (
    <div className={styles.container}>
      <div>
        <img
          src={require("../../images/logIn/logo.svg")}
          alt="logo"
          className={styles.logo}
        />

        <form className={styles.form} onSubmit={handleSubmit}>
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
            name="email"
            labelWidth="120px"
            inputWidth="345px"
            marginBottom="15px"
            handleChange={handleChange}
          />
          <BasicInput
            placeholder="Введите свой пароль"
            type="password  "
            forLabel="Пароль"
            id="Пароль"
            labelText="Пароль"
            name="password"
            labelWidth="120px"
            inputWidth="345px"
            marginBottom="40px"
            handleChange={handleChange}
          />
          <div className={styles.buttonContaineer}>
            <button type="Submit" className={styles.logInButton}>
              Зарегистрироваться
            </button>
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
