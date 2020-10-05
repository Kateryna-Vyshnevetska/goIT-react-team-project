import React from "react";
import "./counterEconomy.css";
import { useSelector } from "react-redux";
import { getMoney, getTime } from "../../../helpers/saveMoney";

export const CounterEconomy = () => {
  // const guiz = useSelector((state) => state.quizInfo);
  // const array = useSelector((state) => state.userCigarettes.data);

  // const money = getMoney(array, guiz);
  // const time = getTime(array, guiz);

  // const money = getMoney(array, guiz, day);
  // const time = getTime(array, guiz, day);

  return (
    <>
      <div className="leftSideBar-economyContainer">
        <ul className="leftSideBar-economyList">
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>

            <p className="leftSideBar-wallet countEconomy">000 ₴</p>
          </li>
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленное время</p>
            <p className="leftSideBar-sandclock countEconomy">000</p>
          </li>
        </ul>
      </div>
    </>
  );
};
