import React from "react";
import "./counterEconomy.css";

export const CounterEconomy = (money, hours, minutes) => {
  return (
    <>
      <div className="leftSideBar-economyContainer">
        <ul className="leftSideBar-economyList">
          <li>
            <p className="leftSideBar-economyTitle">Сэкономленные деньги</p>
            {/* <p className="leftSideBar-wallet countEconomy">
              {money}₴
            </p> */}
          </li>
          <li>
            <p className="leftSideBar-economyTitle">Сэкономленное время</p>
            {/* <p className="leftSideBar-sandclock countEconomy">
              {hours}ч{minutes}мин
            </p> */}
          </li>
        </ul>
      </div>
    </>
  );
};
