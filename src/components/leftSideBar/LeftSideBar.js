import React, { useState } from "react";
import logo from "../../images/leftSideBar/logo.png";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";
import InterviewModal from "../interviewModal/InterviewModal";
import { quizInfo } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const LeftSideBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const state = useSelector((state) => state);
  // let count = 0;
  // Object.values(quizInfo(state)).forEach((el) => (el > 0 ? count++ : ""));
  console.log(Object.values(quizInfo(state)));
  // console.log(count);

  // useEffect(() => {
  //   console.log("effect");
  // }, []);

  const close = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <>
      {modalShow && <InterviewModal close={close} />}
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
