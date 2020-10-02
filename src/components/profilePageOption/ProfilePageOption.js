import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { BasicInput } from "../BasicInput/BasicInput";
import { ProfileMyCardsPage } from "./profileMyCardsPage/ProfileMyCardsPage";
import "./profilePage.css";
import { ProfilePageHelpInfo } from "./profilePageHelpInfo/ProfilePageHelpInfo";

export const ProfilePageOption = () => {
  return (
    <>
      <div className="ProfilePage-header">
        <h2 className="ProfilePage-mainTitle">Личный кабинет</h2>
      </div>
      <div className="ProfilePage-main">
        <h3 className="ProfilePage-priwetTitle">Личная информация</h3>
        <div className="profilePage-formAvatar-block">
          <Router>
            <form className="profilePage-formBlock">
              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"name"}
                  id={"name"}
                  labelText={"Имя"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"surname"}
                  id={"surname"}
                  labelText={"Фамилия"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"phone"}
                  id={"phone"}
                  labelText={"Телефон"}
                  placeholder={"380__ ___ __ __"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"mail"}
                  id={"mail"}
                  labelText={"E-mail"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"password"}
                  id={"password"}
                  labelText={"Пароль"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>

              <div className="profilePage-inputs">
                <BasicInput
                  forLabel={"password"}
                  id={"password"}
                  labelText={"Повторите пароль"}
                  labelWidth={"125px"}
                  inputWidth={"345px"}
                />
              </div>
              <button className="profilePage-subscription-btn confirmPasword">
                Подтвердить пароль
              </button>
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

              <button type="button" className="profilePage-subscription-btn">
                Изменить подписку
              </button>
            </div>
            <Route path="#" />
          </Router>
        </div>
        <ProfileMyCardsPage />
        <ProfilePageHelpInfo />
      </div>
    </>
  );
};
