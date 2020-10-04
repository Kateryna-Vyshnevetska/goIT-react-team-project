import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./userData.css";
import { logOut } from "../../../redux/operations";
import FindAvatarById from "../../../helpers/FindAvatarById";

export const UserData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const clickTologOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className="leftSideBar-userData">
        <Link to="/make-it-habit/profile" className="leftSideBar-user-link">
          <div className="leftSideBar-user-avatar">{FindAvatarById()}</div>
          <p className="leftSideBar-user-name">
            {userInfo.firstName && userInfo.lastName
              ? `${userInfo.firstName} ${userInfo.lastName}`
              : "NickName"}
          </p>
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
