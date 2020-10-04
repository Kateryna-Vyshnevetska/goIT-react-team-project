import React, { useState } from "react";
import logo from "../../images/leftSideBar/logo.png";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";
import InterviewModal from "../interviewModal/InterviewModal";
// import { quizInfo } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const LeftSideBar = () => {
  const firstModalForUser = useSelector((state) => state.firstModalForUser);
  const [modalShow, setModalShow] = useState(firstModalForUser);

  const close = () => {
    setModalShow((prev) => false);
  };

  return (
    <>
      {firstModalForUser && <InterviewModal close={close} />}
      <section className="leftSideBar">
        <div className="leftSideBar-block">
          <div className="logo-block"></div>
          <UserData />
          <CounterEconomy />
          <NavigationBar />
          <HabitsBar />
        </div>
      </section>
    </>
  );
};
