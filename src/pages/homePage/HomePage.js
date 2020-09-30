import React from "react";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            «Курение ослабляет силу мысли
            <br /> и делает неясным её выражение».
          </h1>
          <p className={styles.secondtitle}> Л.Н.Толстой</p>
        </div>
        <div className={styles.logoContainer}>
          <img
            src={require("../../components/images/logo.svg")}
            alt="logo"
            className={styles.logo}
          />
          <p className={styles.mainText}>Добро пожаловать!</p>
          <p className={styles.secondText}>
            Войдите или зарегистрируйтесь, чтобы начать использовать наше
            приложение
          </p>
          <button>Войти</button>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};
