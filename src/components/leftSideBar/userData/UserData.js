import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../../images/avatars/Avatar-1.png";
import "./userData.css";
import { logOut } from "../../../redux/operations";
import { userInfoEmail } from "../../../redux/selectors";

export const UserData = () => {
  const dispatch = useDispatch();
  const clickTologOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className="leftSideBar-userData">
        <Link to="/make-it-habit/profile" className="leftSideBar-user-link">
          <div className="leftSideBar-user-avatar">
            <img alt="avatar" src={avatar} className="avatar" />
          </div>
          <p className="leftSideBar-user-name">NickName</p>
        </Link>
        <button
          type="button"
          onClick={clickTologOut}
          className="leftSideBar-user-button"
        >
          Logout
        </button>
      </div>
    </>
  );
};
