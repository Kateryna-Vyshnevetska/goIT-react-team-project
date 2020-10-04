import React from "react";
import { useSelector } from "react-redux";
import avatars from "../avatars";

const FindAvatarById = ({ avatarId }) => {
  const avatarById = useSelector((state) => state.userInfo.avatar);
  const avatarDefault = avatars.avatar1;

  return (
    <>
      {avatarId === "" ? (
        <img src={avatarDefault} alt="avatar" />
      ) : (
        <>
          {avatars.map((el) => {
            if (avatarById === el.id) {
              return <img key={el.id} src={el.avatar} alt="avatar" />;
            }
          })}
        </>
      )}
    </>
  );
};
export default FindAvatarById;
