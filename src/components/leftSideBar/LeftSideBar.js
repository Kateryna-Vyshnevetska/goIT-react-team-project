import React, { Suspense, useEffect, useState } from "react";
import logo from "../../images/leftSideBar/logo.png";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";
import { getAllUserDataForState } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { authToken, quizInfo } from "../../redux/selectors";
import InterviewModal from "../interviewModal/InterviewModal";

export const LeftSideBar = () => {
  const state = useSelector((state) => state);
  const [modalShow, setModalShow] = useState(false);

  // let count = 0;
  // Object.values(quizInfo(state)).forEach((el) => (el > 0 ? count++ : ""));
  // console.log(Object.values(quizInfo(state)));
  // console.log(count);

  const close = () => {
    setModalShow((prev) => !prev);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserDataForState(authToken(state)));
  }, []);
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
