import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Link,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { AvatarsPage } from "../../pages/avatarsPage/AvatarsPage";
import { logOut, updateUserInfo } from "../../redux/operations";
import { changeUserPassword } from "../../redux/operations";
import { useForm } from "react-hook-form";
import { BasicInput } from "../BasicInput/BasicInput";
import { BasicInputMasked } from "../BasicInput/BasicInputMasked";

import { ProfileMyCardsPage } from "./profileMyCardsPage/ProfileMyCardsPage";
import { ProfilePageHelpInfo } from "./profilePageHelpInfo/ProfilePageHelpInfo";
import { CSSTransition } from "react-transition-group";
import { PasswordInput } from "../../components/BasicInput/PasswordInput/PasswordInput";
import { PasswordInputRepeat } from "./profilePasswordInput/ProfilePasswordInput";
import FindAvatarById from "../../helpers/FindAvatarById";
import { quizInfo } from "../../redux/selectors";

import "./profilePage.css";
import styles from "../../components/BasicInput/PasswordInput/PasswordInput.module.css";
import "../leftSideBar/userData/userData.css";

export const ProfilePageOption = () => {
  const avatarById = useSelector((state) => state.userInfo.avatar);
  const userInfo = useSelector((state) => state.userInfo);
  const authToken = useSelector((state) => state.authToken);
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");

  const [errorPass, setErrorPass] = useState(false);
  const [errorEnter, setErrorEnter] = useState(false);
  const dispatch = useDispatch();

  const subscriptionLevel = useSelector(
    (state) => state.subscriptionLevel.plan
  );

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key].length === 0) {
        delete data[key];
      }
    }
    dispatch(updateUserInfo(data, authToken));
    history.push("/");
  };
  const clickTologOut = () => {
    dispatch(logOut());
  };

  const handleSubmitPass = (ev) => {
    ev.preventDefault();
    const newP = password.split("");
    const newC = confirmPassword.split("");

    let counter = 0;
    for (let i = 0; i < newP.length; i++) {
      console.log(!Number(newC[i]));
      if (newP[i] === newC[i]) {
        console.log(newP[i]);
        console.log(newC[i]);
        counter += 1;
      }
    }
    if (counter === newP.length && counter === newC.length) {
      const change = {
        password,
        confirmPassword,
      };

      dispatch(changeUserPassword(change, authToken));
      history.push("/");
    } else if (password.length < 8 || confirmPassword.length < 8) {
      setErrorEnter(true);
      setErrorPass(false);
    } else {
      setErrorPass(true);
      setErrorEnter(false);
    }
  };

  function handleInputName(value) {
    const valueIn = value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, "");
    setname(valueIn);
  }
  function handleInputLastName(value) {
    const valueIn = value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, "");
    setlastName(valueIn);
  }

  return (
    <>
      <div className="ProfilePage-header">
        <h2 className="ProfilePage-mainTitle">Личный кабинет</h2>
      </div>
      <div className="ProfilePage-main">
        <h3 className="ProfilePage-priwetTitle">Личная информация</h3>
        <div className="profilePage-formAvatar-block">
          <form
            className="profilePage-formBlock"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 3,
                })}
                forLabel={"name"}
                value={name}
                id={"name"}
                name="firstName"
                labelText={"Имя"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.firstName || "Имя"}
                maxLength={"12"}
                handleChange={({ target: { value } }) => handleInputName(value)}
              />
              <p className={styles.errorMessage}>
                {errors.firstName && "Минимально 3 символа"}
              </p>
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 3,
                })}
                name="lastName"
                forLabel={"surname"}
                id={"surname"}
                value={lastName}
                labelText={"Фамилия"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.lastName || "Фамилия"}
                maxLength={"12"}
                handleChange={({ target: { value } }) =>
                  handleInputLastName(value)
                }
              />
              <p className={styles.errorMessage}>
                {errors.lastName && "Минимально 3 символа"}
              </p>
            </div>

            <div className="profilePage-inputs">
              <BasicInputMasked
                register={register({
                  minLength: 12,
                  maxLength: 12,
                  pattern: /[0-9]/,
                })}
                name="phone"
                forLabel={"phone"}
                id={"phone"}
                labelText={"Телефон"}
                placeholder={userInfo.phone || "+38 0_________"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                mask={"380999999999"}
              />
              <p className={styles.errorMessage}>
                {errors.phone && "В вашем номере должно быть 11 цифр"}
              </p>
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 11,
                  pattern: /[@]/,
                })}
                type={"email"}
                name="email"
                forLabel={"mail"}
                id={"mail"}
                labelText={"E-mail"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.email}
              />
              <p className={styles.errorMessage}>
                {errors.email && "Введен неверный email"}
              </p>
            </div>
            <button
              type="Submit"
              className="profilePage-subscription-btn confirmPasword email"
            >
              Подтвердить изменения
            </button>

            <form onSubmit={handleSubmitPass}>
              <div className={styles.profilePageInputs}>
                <PasswordInput
                  register={register({
                    minLength: 8,
                    maxLength: 16,
                    // required: true,
                    pattern: /[0-9A-F]/,
                  })}
                  name="password"
                  forLabel={"password"}
                  labelText={"Пароль"}
                  placeholder="Введите свой пароль"
                  type="password"
                  id="password-input"
                  labelWidth={"120px"}
                  inputWidth={"345px"}
                  marginBottom="40px"
                  handleChange={({ target: { value } }) => setPassword(value)}
                />
                <p className={styles.errorMessagePass}>
                  {errors.password?.message}
                </p>
              </div>
              {errorPass && (
                <p className="errorMessageMask">Пароли не совпадают</p>
              )}
              {errorEnter && (
                <p className="errorMessageMask">
                  Недопустимое количество символов. Минимум 8
                </p>
              )}
              <div className="profilePage-inputs">
                <CSSTransition
                  in={password.length >= 1}
                  timeout={250}
                  unmountOnExit
                  classNames="confirm-password"
                >
                  <PasswordInputRepeat
                    register={register({
                      minLength: 8,
                      maxLength: 16,
                      required: true,
                      pattern: /[0-9A-F]/,
                    })}
                    placeholder="Повторите свой пароль"
                    type="password"
                    name="confirmPassword"
                    forLabel={"password"}
                    id="password-input-repeat"
                    labelText={"Повторите пароль"}
                    labelWidth={"120px"}
                    inputWidth={"345px"}
                    marginBottom="40px"
                    handleChange={({ target: { value } }) =>
                      setConfirmPassword(value)
                    }
                  />
                </CSSTransition>
                <p className={styles.errorMessagePass}>
                  {errors.password?.message}
                </p>
              </div>
              <button
                type="Submit"
                className="profilePage-subscription-btn confirmPasword"
              >
                Изменить пароль
              </button>
            </form>
          </form>
          <div className="profilePage-AvatarBlock">
            <Link
              to="/make-it-habit/change-avatar"
              className="profilePage-AvatarLink"
            >
              <div className="leftSideBar-user-avatar profile">
                {FindAvatarById()}
              </div>
            </Link>
            <p className="profilePage-AvatarText">Выбрать другой аватар</p>

            {/* <div className="profilePage-subscriptionArea">
               <span className="profilePage-subscriptionText">{subscriptionLevel}</span> */}

            <div
              className={
                subscriptionLevel === "Noob"
                  ? "Noob"
                  : subscriptionLevel === "Basic"
                  ? "Basic"
                  : subscriptionLevel === "Standart"
                  ? "Standart"
                  : subscriptionLevel === "Premium"
                  ? "Premium"
                  : subscriptionLevel === "Ultra"
                  ? "Ultra"
                  : subscriptionLevel === "Текущий план не выбран"
                  ? "userData-subscriptionArea"
                  : ""
              }
            >
              <span className="profilePage-subscriptionText">
                {subscriptionLevel}
              </span>
            </div>

            <button type="Submit" className="profilePage-subscription-btn">
              <Link
                to="/make-it-habit/subscription"
                className="profilePage-AvatarTextLink"
              >
                Изменить подписку
              </Link>
            </button>
            <ProfilePageHelpInfo />
          </div>
          <Route path="#" />
        </div>
        <ProfileMyCardsPage />
      </div>
    </>
  );
};
