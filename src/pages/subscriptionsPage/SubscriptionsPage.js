import React from "react";
import style from "./SubscriptionsPage.module.css";
import { ProfileItemCard } from "../../components/profilePageOption/profileMyCardsPage/profileItemCard/ProfileItemCard";
import { ProfilePageHelpInfo } from "../../components/profilePageOption/profilePageHelpInfo/ProfilePageHelpInfo";

export function SubscriptionsPage() {
  return (
    <div className={style.subscriptionsContainer}>
      <div className={style.subscriptionsHeader}>
        <p className={style.subscriptionsTitle}>Подписки</p>
      </div>
      <section className={style.subscriptionsSection}>
        <p className={style.subscriptionsSectionTitle}>Тип подписки</p>
        <ul className={style.subscriptionsList}>
          <li className={style.subscriptionsItem}>
            <p className={style.subscriptionsItemTitle}>Noob</p>
            <p className={style.subscriptionsItemDescription}>
              30 дней —
              <span className={style.subscriptionsItemDescriptionPrice}>
                $4.99
              </span>
            </p>
          </li>
          <li className={style.subscriptionsItem}>
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleBasic,
              ].join(" ")}
            >
              Basic
            </p>
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
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleStandart,
              ].join(" ")}
            >
              Standart
            </p>
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
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitlePremium,
              ].join(" ")}
            >
              Premium
            </p>
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
            <p
              className={[
                style.subscriptionsItemTitle,
                style.subscriptionsItemTitleUltra,
              ].join(" ")}
            >
              Ultra
            </p>
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
        <ProfileItemCard />

        <div className={style.subscriptionsSectionCardsButtons}>
          <button
            className={["profilePage-subscription-btn", style.buttonAdd].join(
              " "
            )}
          >
            + Добавить карту
          </button>
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
  );
}
