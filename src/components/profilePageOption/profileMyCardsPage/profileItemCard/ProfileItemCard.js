import React from "react";
import "./profileItemCard.css";
import { getRandomColor } from "../../../../helpers/getRandomColor";

export const ProfileItemCard = ({ number, timeExpiration, key }) => {
  return (
    <>
      <li key={key}>
        <div
          className="ProfileItemCard-cardBlock"
          // style={{ backgroundColor: getRandomColor() }}
        >
          <h4 className="ProfileItemCard-cardName">Моя карта</h4>
          <p className="ProfileItemCard-cardNamber">{number}</p>
          <div className="ProfileItemCard-lowerCardBlock">
            <p className="ProfileItemCard-cardDate">
              Истекает {timeExpiration}
            </p>
            <button className="ProfileItemCard-btnDelete"></button>
          </div>
        </div>
      </li>
    </>
  );
};
