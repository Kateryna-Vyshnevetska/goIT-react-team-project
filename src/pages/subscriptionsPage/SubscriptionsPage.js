import React, { useState } from "react";
import { authToken } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import style from "./SubscriptionsPage.module.css";
import { ProfileItemCard } from "../../components/profilePageOption/profileMyCardsPage/profileItemCard/ProfileItemCard";
import { ProfilePageHelpInfo } from "../../components/profilePageOption/profilePageHelpInfo/ProfilePageHelpInfo";
import AddNewCard from "../../components/Modals/AddNewCardModal/AddNewCardModal";
import { updateSubscriptionLevel } from "../../redux/operations";
import { Link, NavLink } from "react-router-dom";

export function SubscriptionsPage() {
  const [modalShow, setModalShow] = useState(false);
  const state = useSelector((state) => state);
  const cardArr = useSelector((state) => state.paymentCard);

  const close = () => {
    setModalShow((prev) => !prev);
  };

  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(
      updateSubscriptionLevel({ plan: event.target.name }, authToken(state))
    );
  };

  return (
    <div className={style.subscriptionsContainer}>
      <div className={style.subscriptionsHeader}>
        <p className={style.subscriptionsTitle}>Подписки</p>
      </div>
      <div className={style.wrapperDiv}>
        <section className={style.subscriptionsSection}>
          <p className={style.subscriptionsSectionTitle}>Тип подписки</p>
          <ul className={style.subscriptionsList}>
            <li className={style.subscriptionsItem}>
              <NavLink
                onClick={handleClick}
                name="Noob"
                className={style.subscriptionsItemTitle}
                to={{
                  pathname: `/make-it-habit/profile`,
                }}
              >
                Noob
              </NavLink>

              <p className={style.subscriptionsItemDescription}>
                30 дней —
                <span className={style.subscriptionsItemDescriptionPrice}>
                  $4.99
                </span>
              </p>
            </li>
            <li className={style.subscriptionsItem}>
              <NavLink
                onClick={handleClick}
                name="Basic"
                className={[
                  style.subscriptionsItemTitle,
                  style.subscriptionsItemTitleBasic,
                ].join(" ")}
                to={{
                  pathname: `/make-it-habit/profile`,
                }}
              >
                Basic
              </NavLink>
              <p className={style.subscriptionsItemDescription}>
                1 месяц —
                <span className={style.subscriptionsItemDescriptionPrice}>
                  $4.80
                </span>{" "}
                <span className={style.subscriptionsItemDescriptionDiscount}>
                  -3%
                </span>
              </p>
            </li>
            <li className={style.subscriptionsItem}>
              <NavLink
                onClick={handleClick}
                name="Standart"
                className={[
                  style.subscriptionsItemTitle,
                  style.subscriptionsItemTitleStandart,
                ].join(" ")}
                to={{
                  pathname: `/make-it-habit/profile`,
                }}
              >
                Standart
              </NavLink>

              <p className={style.subscriptionsItemDescription}>
                3 месяца —
                <span className={style.subscriptionsItemDescriptionPrice}>
                  $14.20
                </span>{" "}
                <span className={style.subscriptionsItemDescriptionDiscount}>
                  -5%
                </span>
              </p>
            </li>
            <li className={style.subscriptionsItem}>
              <NavLink
                onClick={handleClick}
                name="Premium"
                className={[
                  style.subscriptionsItemTitle,
                  style.subscriptionsItemTitlePremium,
                ].join(" ")}
                to={{
                  pathname: `/make-it-habit/profile`,
                }}
              >
                Premium
              </NavLink>

              {/* </button> */}
              <p className={style.subscriptionsItemDescription}>
                6 месяцев —
                <span className={style.subscriptionsItemDescriptionPrice}>
                  $27.84
                </span>{" "}
                <span className={style.subscriptionsItemDescriptionDiscount}>
                  -7%
                </span>
              </p>
            </li>
            <li className={style.subscriptionsItem}>
              <NavLink
                onClick={handleClick}
                name="Ultra"
                className={[
                  style.subscriptionsItemTitle,
                  style.subscriptionsItemTitleUltra,
                ].join(" ")}
                activeClassName={style.subscriptionsItemTitleActive}
                to={{
                  pathname: `/make-it-habit/profile`,
                }}
              >
                Ultra
              </NavLink>
              <p className={style.subscriptionsItemDescription}>
                12 месяцев —
                <span className={style.subscriptionsItemDescriptionPrice}>
                  $53.89
                </span>{" "}
                <span className={style.subscriptionsItemDescriptionDiscount}>
                  -10%
                </span>
              </p>
            </li>
          </ul>
          <button className="profilePage-subscription-btn">
            Изменить подписку
          </button>
        </section>
        <section className={style.subscriptionsSectionCards}>
          <p className={style.subscriptionsSectionTitle}>Мои карты</p>
          {cardArr.map((el) => (
            <ProfileItemCard
              number={el.number}
              timeExpiration={el.timeExpiration}
            />
          ))}

          <div className={style.subscriptionsSectionCardsButtons}>
            <button
              onClick={() => setModalShow(true)}
              className={["profilePage-subscription-btn", style.buttonAdd].join(
                " "
              )}
            >
              + Добавить карту
            </button>
            {modalShow && <AddNewCard close={close} />}
            <button
              className={["profilePage-subscription-btn", style.buttonPay].join(
                " "
              )}
            >
              Оплатить
            </button>
          </div>
        </section>
        <ProfilePageHelpInfo />
      </div>
    </div>
  );
}
