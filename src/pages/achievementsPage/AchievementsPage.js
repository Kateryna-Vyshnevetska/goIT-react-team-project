import React, { useEffect, useState } from "react";
import "./AchievementsPage.css";
import {
  checkAchievement,
  checkAchievementDay,
  checkAchievementWeek,
} from "../../helpers/achievementCheck";

export const AchievementsPage = () => {
  const [start, setStart] = useState("");
  const array = [
    23,
    null,
    27,
    19,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    null,
    17,
    15,
  ];
  const dayCigarette = 20;
  useEffect(() => {
    const oneCigarette = document.getElementById("oneCigarette");
    const threeCigarettes = document.getElementById("threeCigarettes");
    const fiveCigarettes = document.getElementById("fiveCigarettes");
    const oneDay = document.getElementById("oneDay");
    const threeDays = document.getElementById("threeDays");
    const oneWeek = document.getElementById("oneWeek");
    const twoWeeks = document.getElementById("twoWeeks");

    if (oneCigarette) {
      setStart(oneCigarette);
      checkAchievement(
        array,
        dayCigarette,
        oneCigarette,
        threeCigarettes,
        fiveCigarettes
      );
      checkAchievementDay(array, dayCigarette, oneDay, threeDays);
      checkAchievementWeek(array, oneWeek, twoWeeks);
    }
  }, [array, start]);

  return (
    <div className="achievementsPageWrapper">
      <div className="achievementsWrapper">
        <p className="achievementsTitle">Достижения</p>
      </div>
      <div className="achievementsContainer">
        <ul className="achievementsPageList">
          <li id="oneCigarette" className="achievementsPageItem">
            <p className="achievementsPageText">Отказ от 1 сигареты</p>
          </li>
          <li id="threeCigarettes" className="achievementsPageItem">
            <p className="achievementsPageText">Отказ от 3 сигарет</p>
          </li>
          <li id="fiveCigarettes" className="achievementsPageItem">
            <p className="achievementsPageText">Отказ от 5 сигарет</p>
          </li>
          <li id="oneDay" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 1 день</p>
          </li>
          <li id="threeDays" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 3 дня</p>
          </li>
          <li id="oneWeek" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 1 неделю</p>
          </li>
          <li id="twoWeeks" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 2 недели</p>
          </li>
          <li id="oneMonth" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 1 месяц</p>
          </li>
          <li id="threeMonths" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 3 месяца</p>
          </li>
          <li id="sixMonths" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 6 месяцев</p>
          </li>
          <li id="oneYear" className="achievementsPageItem">
            <p className="achievementsPageText">Не курю 1 год</p>
          </li>
          <li id="oneYearPlus" className="achievementsPageItem">
            <p className="achievementsPageText">+1 год без сигарет</p>
          </li>
          <li id="threeYears" className="achievementsPageItem">
            <p className="achievementsPageText">3 года без сигарет</p>
          </li>
          <li id="fiveYears" className="achievementsPageItem">
            <p className="achievementsPageText">Уже 5. Дай пять!</p>
          </li>
          <li id="goToDream" className="achievementsPageItem">
            <p className="achievementsPageText">Вперед к мечте!</p>
          </li>
          <li id="savedOneHour" className="achievementsPageItem">
            <p className="achievementsPageText">Сохранил 1 час</p>
          </li>
          <li id="savedThreeHours" className="achievementsPageItem">
            <p className="achievementsPageText">Сохранил 3 часа</p>
          </li>
          <li id="savedFiveHours" className="achievementsPageItem">
            <p className="achievementsPageText">Сохранил 5 часов</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
