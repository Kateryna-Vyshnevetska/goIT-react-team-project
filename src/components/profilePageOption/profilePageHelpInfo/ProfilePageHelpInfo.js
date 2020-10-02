import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./profilePageHelpInfo.css";

export const ProfilePageHelpInfo = () => {
  return (
    <>
      <div className="ProfilePageHelpInfo-infoContainer">
        <Router>
          <div className="ProfilePageHelpInfo-infoImg"></div>
          <div className="ProfilePageHelpInfo-infoSecondBlock">
            <p className="ProfilePageHelpInfo-infoText">
              Напишите нам, если у Вас возникли вопросы:
            </p>
            <p className="ProfilePageHelpInfo-infoMail">info@dishi.com</p>
            <Link to="#" className="ProfilePageHelpInfo-infoIconLink">
              <div className="ProfilePageHelpInfo-infoIconTelegram"></div>
            </Link>
          </div>
          <Route path="#" />
        </Router>
      </div>
    </>
  );
};
