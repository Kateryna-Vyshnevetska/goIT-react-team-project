import React from "react";
import "./profileItemCard.css";
import { getRandomColor } from "../../../../helpers/getRandomColor";

export const ProfileItemCard = ({ number, timeExpiration }) => {
  const correctNumber = number.split("");
  correctNumber.splice(4, 0, " ");
  correctNumber.splice(9, 0, " ");
  correctNumber.splice(14, 0, " ");
  const correctData = timeExpiration.split("");
  correctData.splice(2, 0, "/");
  return (
    <>
      <li>
        <div
          className="ProfileItemCard-cardBlock"
          style={{ backgroundColor: getRandomColor() }}
        >
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
