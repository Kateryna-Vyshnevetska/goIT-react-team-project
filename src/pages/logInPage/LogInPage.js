import React from "react";
import styles from "./logInPage.module.css";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import { PasswordInput } from "../../components/BasicInput/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const LogInPage = ({ logInOpenPage, setlogInOpenPage }) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().required("Введите email"),
    email: yup
      .string()
      .matches(/[@]/, "Неверный email")
      .required("Введите email"),
    password: yup.string().required("Пароль должен быть от 8 до 16 символов"),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => dispatch(logIn(data));

  return (
    <div className={styles.container}>
      <div>
        <img
          src={require("../../images/logIn/logo.svg")}
          alt="logo"
          className={styles.logo}
        />

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>C возвращением!</h1>
          <p className={styles.text}>
            Введите свои данные, чтобы <br /> продолжить использовать наше
            приложение
          </p>
          <div>
            <BasicInput
              register={register({
                minLength: 11,
                required: true,
                pattern: /[@]/,
              })}
              placeholder="Введите свой E-mail"
              type="text"
              forLabel="Логин"
              id="Логин"
              labelText="Логин"
              name="email"
              labelWidth="120px"
              inputWidth="345px"
              marginBottom="15px"
            />
            <p className={styles.errorMessageEmail}>{errors.email?.message}</p>
          </div>

          <div>
            <PasswordInput
              register={register({
                minLength: 8,
                maxLength: 16,
                required: true,
                pattern: /[0-9A-F]/,
              })}
              placeholder="Введите свой password"
              type="password"
              forLabel="password-input"
              id="password-input"
              labelText="Пароль"
              name="password"
              labelWidth="120px"
              inputWidth="345px"
              marginBottom="30px"
            />
            <p className={styles.errorMessagePass}>
              {errors.password?.message}
            </p>
          </div>
          <div className={styles.buttonContaineer}>
            <button type="Submit" className={styles.logInButton}>
              Войти
            </button>
            <button type="button" className={styles.buttonGoogle}>
              Войти с помощью Google
            </button>
            <button type="button" className={styles.buttonFacebook}>
              Войти с помощью Facebook
            </button>
            <Link
              to="/"
              className={styles.registerButton}
              onClick={() => setlogInOpenPage(false)}
            >
              На главную
            </Link>
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
