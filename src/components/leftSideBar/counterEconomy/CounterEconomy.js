import React from "react";
import "./counterEconomy.css";

export const CounterEconomy = (money, hours, minutes) => {
  return (
    <>
      <div className="leftSideBar-economyContainer">
        <ul className="leftSideBar-economyList">
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>
            <p className="leftSideBar-wallet countEconomy">1200,0 ₴</p>
          </li>
          <li className="leftSideBar-item">
            <p className="leftSideBar-economyTitle">Сэкономленное время</p>
            <p className="leftSideBar-sandclock countEconomy">02ч 00мин</p>
          </li>
        </ul>
      </div>
    </>
  );
};
