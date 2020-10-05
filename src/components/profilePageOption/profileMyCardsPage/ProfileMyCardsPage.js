import React, { useState } from "react";
import { ProfileItemCard } from "./profileItemCard/ProfileItemCard";
import "./profileMyCardsPage.css";
import AddNewCard from "../../Modals/AddNewCardModal/AddNewCardModal";
import { useSelector } from "react-redux";

export const ProfileMyCardsPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const cardArr = useSelector((state) => state.paymentCard);
  const close = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <div className="ProfileMyCardsPage-block">
      <h3 className="ProfileMyCardsPage-mainTitle">Мои карты</h3>
      <ul className="ProfileMyCardsPage-cardBlock">
        {cardArr.map((el) => (
          <ProfileItemCard
            number={el.number}
            timeExpiration={el.timeExpiration}
          />
        ))}
      </ul>
      <button
        onClick={() => setModalShow(true)}
        className="ProfileMyCardsPage-btn"
      >
        + Добавить карту
      </button>
      {modalShow && <AddNewCard close={close} />}
    </div>
  );
};

