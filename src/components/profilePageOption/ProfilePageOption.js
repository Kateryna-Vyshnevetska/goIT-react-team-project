import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { updateUserInfo } from "../../redux/operations";
import { changeUserPassword } from "../../requests/requests";
import { BasicInput } from "../BasicInput/BasicInput";
import { ProfileMyCardsPage } from "./profileMyCardsPage/ProfileMyCardsPage";
import "./profilePage.css";
import { ProfilePageHelpInfo } from "./profilePageHelpInfo/ProfilePageHelpInfo";

export const ProfilePageOption = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const authToken = useSelector((state) => state.authToken);

  const dispatch = useDispatch();

  const newDataForUser = {};
  const newPass = {};

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(updateUserInfo(newDataForUser, authToken));
  };

  const handleSubmitPass = (ev) => {
    ev.preventDefault();
    console.log(newPass);
    // dispatch(changeUserPassword(newPass, authToken));
  };

  return (
    <>
      <div className="ProfilePage-header">
        <h2 className="ProfilePage-mainTitle">Личный кабинет</h2>
      </div>
      <div className="ProfilePage-main">
        <h3 className="ProfilePage-priwetTitle">Личная информация</h3>
        <div className="profilePage-formAvatar-block">
          <form className="profilePage-formBlock" onSubmit={handleSubmit}>
            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"name"}
                id={"name"}
                labelText={"Имя"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.firstName}
                handleChange={({ target: { value } }) =>
                  (newDataForUser.firstName = value)
                }
              />
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"surname"}
                id={"surname"}
                labelText={"Фамилия"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.lastName}
                handleChange={({ target: { value } }) =>
                  (newDataForUser.lastName = value)
                }
              />
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"phone"}
                id={"phone"}
                labelText={"Телефон"}
                placeholder={"380__ ___ __ __" || userInfo.phone}
                labelWidth={"125px"}
                inputWidth={"345px"}
                handleChange={({ target: { value } }) =>
                  (newDataForUser.phone = value)
                }
              />
            </div>

            <div className="profilePage-inputs">
              <BasicInput
                forLabel={"mail"}
                id={"mail"}
                labelText={"E-mail"}
                labelWidth={"125px"}
                inputWidth={"345px"}
                placeholder={userInfo.email}
                handleChange={({ target: { value } }) =>
                  (newDataForUser.email = value)
                }
              />
            </div>
            <button
              type="Submit"
              className="profilePage-subscription-btn confirmPasword email"
            >
              Подтвердить изменения
            </button>

            <form onSubmit={handleSubmitPass}>
              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"password"}
                  id={"password"}
                  labelText={"Пароль"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                  handleChange={({ target: { value } }) =>
                    (newPass.password = value)
                  }
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"password"}
                  id={"password"}
                  labelText={"Повторите пароль"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                  handleChange={({ target: { value } }) =>
                    (newPass.confirmPassword = value)
                  }
                />
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
            <Link to="#" className="profilePage-AvatarLink">
              <img alt="avatar" className="profilePage-Avatar" />
            </Link>
            <Link to="#" className="profilePage-AvatarTextLink">
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
