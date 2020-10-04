import React from "react";

import "./avatarsPage.css";
import avatars from "../../avatars";
import { useDispatch, useSelector } from "react-redux";
// import { updateUserAvatar } from "../../redux/user/userActions";
import { updateUserInfo } from "../../redux/operations";
export const AvatarsPage = () => {
  const token = useSelector((state) => state.authToken);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(updateUserInfo({ avatar: id }, token));
  };
  return (
    <div className="avatar-list-section">
      <div className="avatar-container">
        <div className="avatar-header">
          <h2 className="avatar-header-title">Выбрать другой аватар</h2>
        </div>
        <ul className="avatar-list">
          {avatars.map((elem) => {
            return (
              <li
                key={elem.id}
                className="avatar-item"
                onClick={() => {
                  handleClick(elem.id);
                }}
              >
                <img
                  src={elem.avatar}
                  id={elem.id}
                  alt="avatar1"
                  className="avatars-img"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
