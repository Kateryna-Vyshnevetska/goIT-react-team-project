import { createReducer } from "@reduxjs/toolkit";
import { addUserInfo } from "./userActions";
import { updateUserAvatar } from "./userActions";

const userState = {
  firstName: "",
  lastName: "",
  email: "",
  registerData: "",
  avatar: "",
  phone: "",
};

export const userInfo = createReducer(
  { ...userState },
  {
    [addUserInfo]: (state, { payload }) => ({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      registerData: payload.registerData,
      avatar: payload.avatar,
      phone: payload.phone,
    }),
    [updateUserAvatar]: (state, { payload }) => ({
      ...state,
      avatar: payload,
    }),
  }
);
