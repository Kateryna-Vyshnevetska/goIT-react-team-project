import React, { useState, useEffect } from "react";
import { UserData } from "./userData/UserData";
import { CounterEconomy } from "./counterEconomy/CounterEconomy";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { HabitsBar } from "./habitsBar/HabitsBar";
import "./leftSideBar.css";
import InterviewModal from "../interviewModal/InterviewModal";
import { useSelector, useStore } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import CheckPrevDaySigs from "../checkPrevDaySigs/CheckPrevDaySigs";
import { authToken, userCigarettes } from "../../redux/selectors";
export const LeftSideBar = () => {
  const firstModalForUser = useSelector((state) => state.firstModalForUser);
  const [modalShow, setModalShow] = useState(firstModalForUser);
  const [modalPrevCheckShow, setmodalPrevCheckShow] = useState(false);
  const state = useSelector((state) => state);
  const store = useStore();
  const currentDay = store.getState().currentDay;
  const mainHabitDateArr = store.getState().mainHabitDates;
  const data = userCigarettes(state);
  const token = authToken(state);

  useEffect(() => {
    console.log(data);
    console.log(mainHabitDateArr);
    if (mainHabitDateArr.length > 0) {
      let arr = userCigarettes(state).data.slice();
      const nowTime = new Date();
      const nowTimeMoment = moment(nowTime).format("MMM Do YY");
      Object.values(mainHabitDateArr).forEach((element) => {
        const mainDatesMoment = moment(element).format("MMM Do YY");
        if (mainDatesMoment.includes(nowTimeMoment)) {
          console.log(data);
          let idx = mainHabitDateArr.indexOf(element);
          if (arr[idx - 1] === null) {
            setmodalPrevCheckShow(true);
          }
        }
      });
    }
  }, [data]);

  const close = () => {
    setModalShow((prev) => false);
  };
  const closeModalPrevCheckShow = () => {
    setmodalPrevCheckShow((prev) => false);
  };

  return (
    <>
      {firstModalForUser && <InterviewModal close={close} />}
      {modalPrevCheckShow && (
        <CheckPrevDaySigs close={closeModalPrevCheckShow} />
      )}

      <section className="leftSideBar">
        <div className="leftSideBar-block">
          <Link to="/" className="logo-wrapper">
            <div className="logo-block">
              <img
                className="imageLogoLeftSideBar"
                src={require("../../images/homePage/main-logo.svg")}
                alt="Логотип кампании"
              />
            </div>
          </Link>
          <UserData />
          <CounterEconomy />
          <NavigationBar />
          <HabitsBar />
        </div>
      </section>
    </>
  );
};
