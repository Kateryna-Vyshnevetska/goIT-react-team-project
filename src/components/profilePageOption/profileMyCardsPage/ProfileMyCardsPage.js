import React from "react";
import { ProfileItemCard } from "./profileItemCard/ProfileItemCard";
import "./profileMyCardsPage.css";

export const ProfileMyCardsPage = () => {
  return (
    <div className="ProfileMyCardsPage-block">
      <h3 className="ProfileMyCardsPage-mainTitle">Мои карты</h3>
      <ul className="ProfileMyCardsPage-cardBlock">
        <ProfileItemCard />
      </ul>
      <button className="ProfileMyCardsPage-btn">+ Добавить карту</button>
    </div>
  );
};
