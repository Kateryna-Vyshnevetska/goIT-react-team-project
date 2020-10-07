import React, { useState } from "react";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import styles from "./registerPage.module.css";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/operations";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PasswordInput } from "../../components/BasicInput/PasswordInput/PasswordInput";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { NotificationErrors } from "../../components/notificationErrors/NotificationErrors";

import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const RegisterPage = ({ setregisterOpenPage }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const schema = yup.object().shape({
    email: yup.string().required("Введите email"),
    email: yup
      .string()
      .matches(/[@]/, "Неверный email")
      .required("Введите email"),
    password: yup.string().required("Пароль должен быть от 8 до 16 символов"),

    // password: yup.number().positive().integer().required(),
  });
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => dispatch(signUp(data));
  const message = "Такой пользователь уже существует!";

  return (
    <div className={styles.container}>
      <NotificationErrors message={message} />
      <div className={styles.wrapper}>
        <img
          src={require("../../images/logIn/logo.svg")}
          alt="logo"
          className={styles.logo}
        />

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
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
              forLabel="E-mail"
              id="e-mail"
              labelText="E-mail"
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
              marginBottom="40px"
            />
            <p className={styles.errorMessagePass}>
              {errors.password?.message}
            </p>
          </div>
          <div>
            <input
              className={styles.checkbox}
              type="checkbox"
              value="Отправить"
              id="check"
              name="check"
              onChange={() => setChecked((prev) => !prev)}
            />
            <label htmlFor="check" className={styles.text}>
              Я подтверждаю что мне исполнилось 18 лет!
            </label>
          </div>
          <div className={styles.buttonContaineer}>
            <button
              type="Submit"
              className={styles.logInButton}
              disabled={!checked}
            >
              Зарегистрироваться
            </button>
            <button className={styles.buttonGoogle}>
              Войти с помощью Google
            </button>
            <button className={styles.buttonFacebook}>
              Войти с помощью Facebook
            </button>
            <Link
              to="/"
              className={styles.registerButton}
              onClick={() => setregisterOpenPage(false)}
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
export default RegisterPage;
