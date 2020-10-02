import React from "react";
import "./profileItemCard.css"

export const ProfileItemCard = () => {
    return (
        <>
            <li>
                <div className="ProfileItemCard-cardBlock">
                    <h4 className="ProfileItemCard-cardName">Моя карта</h4>
                    <p className="ProfileItemCard-cardNamber">xxxx xxxx xxxx xxxx</p>
                    <div className="ProfileItemCard-lowerCardBlock">
                        <p className="ProfileItemCard-cardDate">Истекает xx.xx.xxxx</p>
                        <button className="ProfileItemCard-btnDelete"></button>
                    </div>
                </div>
            </li>
        </>
    )
}