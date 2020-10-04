import React from "react";
import { useSelector } from "react-redux";
import avatars from "../avatars";

const FindAvatarById = () => {
  const avatarById = useSelector((state) => state.userInfo.avatar);
  const avatarDefault = avatars.avatar1;

  return (
    <>
      {avatarById === "" ? (
        <img src={avatarDefault} alt="avatar" width="108px" height="108px" />
      ) : (
        <>
          {avatars.map((el) => {
            if (avatarById === el.id) {
              return (
                <img
                  key={el.id}
                  src={el.avatar}
                  alt="avatar"
                  width="108px"
                  height="108px"
                />
              );
            }
          })}
        </>
      )}
    </>
  );
};
export default FindAvatarById;
