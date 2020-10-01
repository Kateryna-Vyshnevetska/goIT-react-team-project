import React from "react";
import logo from "../../images/leftSideBar/logo.png";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";

export const LeftSideBar = () => {
  return (
    <>
      <section className="leftSideBar">
        <div className="leftSideBar-block">
          <div className="logo-block">
            <img src={logo} alt="logo" width="145" className="imageLogo" />
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