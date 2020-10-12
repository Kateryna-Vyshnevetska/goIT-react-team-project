import React from "react";
import "./counterEconomy.css";
import { useSelector } from "react-redux";
import { getMoney, getTime } from "../../../helpers/saveMoney";

export const CounterEconomy = () => {
  const guiz = useSelector((state) => state.quizInfo);
  const array = useSelector((state) => state.userCigarettes.data);
  const money = getMoney(array, guiz);
  const time = getTime(array, guiz);

  return (
    <>
      <div className="leftSideBar-economyContainer">
        {/* {money === 0 ||
          (time === "00 : 00" && (
            <p className="pleaseDoNotSmoke">
              Постарайтесь курить меньше &#128521;
            </p>
          ))} */}
        <ul className="leftSideBar-economyList">
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>
            <p className="leftSideBar-wallet countEconomy">{money} ₴</p>
          </li>
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленное время</p>
            <p className="leftSideBar-sandclock countEconomy">{time}</p>
          </li>
        </ul>
      </div>
    </>
  );
};
