import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { updateUserInfo } from "../../redux/operations";
import { changeUserPassword } from "../../requests/requests";
import { useForm } from "react-hook-form";
import { BasicInput } from "../BasicInput/BasicInput";
import { ProfileMyCardsPage } from "./profileMyCardsPage/ProfileMyCardsPage";
import "./profilePage.css";
import { ProfilePageHelpInfo } from "./profilePageHelpInfo/ProfilePageHelpInfo";
import FindAvatarById from "../../helpers/FindAvatarById";

export const ProfilePageOption = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const authToken = useSelector((state) => state.authToken);
  const avatarById = useSelector((state) => state.userInfo.avatar);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key].length === 0) {
        delete data[key];
      }
    }
    dispatch(updateUserInfo(data, authToken));
  };

  // const handleSubmitPass = (ev) => {
  //   ev.preventDefault();

  //   // dispatch(changeUserPassword({ password, confirmPassword }, authToken));
  // };

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
                  minLength: 2,
                })}
                forLabel={"name"}
                id={"name"}
                name="firstName"
                labelText={"Имя"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.firstName}
              />
              <p>{errors.firstName && "Минимально 2 символа"}</p>
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 2,
                })}
                name="lastName"
                forLabel={"surname"}
                id={"surname"}
                labelText={"Фамилия"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.lastName}
              />
              <p>{errors.lastName && "Минимально 2 символа"}</p>
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 11,
                  maxLength: 11,
                  pattern: /[0-9]/,
                })}
                name="phone"
                forLabel={"phone"}
                id={"phone"}
                labelText={"Телефон"}
                placeholder={"380__ ___ __ __" || userInfo.phone}
                labelWidth={"125px"}
                inputWidth={"345px"}
              />
              <p>{errors.phone && "В вашем номере должно быть 11 цифр"}</p>
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                register={register({
                  minLength: 11,
                  pattern: /[@]/,
                })}
                name="email"
                forLabel={"mail"}
                id={"mail"}
                labelText={"E-mail"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.email}
              />
            </div>
            <button
              type="Submit"
              className="profilePage-subscription-btn confirmPasword email"
            >
              Подтвердить изменения
            </button>

            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"password"}
                id={"password"}
                labelText={"Пароль"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                // handleChange={({ target: { value } }) => setPassword(value)}
              />
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"password"}
                id={"password"}
                labelText={"Повторите пароль"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                // handleChange={({ target: { value } }) =>
                //   setConfirmPassword(value)
                // }
              />
            </div>
            <button
              type="Submit"
              className="profilePage-subscription-btn confirmPasword"
            >
              Изменить пароль
            </button>
          </form>
          <div className="profilePage-AvatarBlock">
            <Link
              to="/make-it-habit/change-avatar"
              className="profilePage-AvatarLink"
            >
              {FindAvatarById(avatarById)}
            </Link>
            <Link
              to="/make-it-habit/change-avatar"
              className="profilePage-AvatarTextLink"
            >
              <p className="profilePage-AvatarText">Выбрать другой аватар</p>
            </Link>
            <div className="profilePage-subscriptionArea">
              <span className="profilePage-subscriptionText">sdddwg</span>
            </div>

            <button type="Submit" className="profilePage-subscription-btn">
              <Link
                to="/make-it-habit/subscription"
                className="profilePage-AvatarTextLink"
              >
                Изменить подписку
              </Link>
            </button>
          </div>
          <Route path="#" />
        </div>
        <ProfileMyCardsPage />
        <ProfilePageHelpInfo />
      </div>
    </>
  );
};
