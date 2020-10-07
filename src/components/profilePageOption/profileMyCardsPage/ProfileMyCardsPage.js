import React, { useState } from "react";
import { ProfileItemCard } from "./profileItemCard/ProfileItemCard";
import "./profileMyCardsPage.css";
import AddNewCard from "../../Modals/AddNewCardModal/AddNewCardModal";
import { useSelector } from "react-redux";
import { StyleRoot } from "radium";
import "./profileItemCard/profileItemCard.css";
import { getRandomColor } from "../../../helpers/getRandomColor";
// var React = require("react");
// var ReactDOM = require("react-dom");
import Coverflow from "react-coverflow";

export const ProfileMyCardsPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const cardArr = useSelector((state) => state.paymentCard);
  const close = () => {
    setModalShow((prev) => !prev);
  };

  var fn = function () {
    /* do you want */
  };

  return (
    <div className="ProfileMyCardsPage-block">
      <h3 className="ProfileMyCardsPage-mainTitle">Мои карты</h3>
      {cardArr.length ? (
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={1}
            navigation={true}
            enableScroll={false}
            enableHeading={false}
            // style={{ width: "100%", height: "500px", }}
            media={{
              "@media (max-width: 900px)": {
                width: "600px",
                height: "300px",
              },
              "@media (min-width: 900px)": {
                width: "800px",
                height: "400px",
              },
            }}
          >
            {cardArr.map((el, idx) => (
              <ProfileItemCard
                key={idx}
                number={el.number}
                timeExpiration={el.timeExpiration}
                dataAction={idx}
              />
            ))}
          </Coverflow>
        </StyleRoot>
      ) : (
        <p className="ProfileMyCardsPage-title"> У вас нет добавленных карт. </p>
      )}
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
