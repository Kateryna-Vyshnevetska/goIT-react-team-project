import React, { useEffect } from "react";
import logo from "../../images/leftSideBar/logo.png";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";
import { getAllUserDataForState } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/selectors";

export const LeftSideBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserDataForState(authToken(state)));
  }, []);
  return (
    <>
      <section className="leftSideBar">
        <div className="leftSideBar-block">
          <div className="logo-block">
            <img
              src={logo}
              alt="logo"
              width="145"
              className="imageLogoLeftSideBar"
            />
          </div>
          <UserData />
          <CounterEconomy />
          <NavigationBar />
          <HabitsBar />
        </div>
      </section>
    </>
  );
};
