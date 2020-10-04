import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../../images/avatars/Avatar-1.png";
import "./userData.css";
import { logOut } from "../../../redux/operations";
// import { userInfoEmail } from "../../../redux/selectors";
import FindAvatarById from "../../../helpers/FindAvatarById";

export const UserData = () => {
  const avatarDefault = avatar;
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const avatarById = useSelector((state) => state.userInfo.avatar);
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
