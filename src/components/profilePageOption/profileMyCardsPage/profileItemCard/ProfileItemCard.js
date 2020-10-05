import React from "react";
import "./profileItemCard.css"
import { useSelector } from "react-redux";

export const ProfileItemCard = ({ number, timeExpiration }) => {
    const correctNumber = number.split("");
    correctNumber.splice(4, 0, " ")
    correctNumber.splice(9, 0, " ");
    correctNumber.splice(14, 0, " ");
    const correctData = timeExpiration.split("")
    correctData.splice(2, 0, "/")
  return (
    <>
      <li>
        <div className="ProfileItemCard-cardBlock">
          <h4 className="ProfileItemCard-cardName">Моя карта</h4>
          <p className="ProfileItemCard-cardNamber">{correctNumber}</p>
          <div className="ProfileItemCard-lowerCardBlock">
            <p className="ProfileItemCard-cardDate">Истекает {correctData}</p>
            <button className="ProfileItemCard-btnDelete"></button>
          </div>
        </div>
      </li>
    </>
  );
};