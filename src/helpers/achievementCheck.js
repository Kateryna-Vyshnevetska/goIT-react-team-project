import React from "react";
import "../pages/achievementsPage/AchievementsPage.css";

export const checkAchievement = (
  arrayCigarettes,
  cigaretteDay,
  elem1,
  elem2,
  elem3
) => {
  arrayCigarettes.map((el) => {
    if (cigaretteDay - el === 1) {
      elem1.classList.add("active");
    }
    if (cigaretteDay - el === 3) {
      elem2.classList.add("active");
    }
    if (cigaretteDay - el === 5) {
      elem3.classList.add("active");
    }
  });
};

export const checkAchievementDay = (
  arrayCigarettes,
  cigaretteDay,
  elem1,
  elem2
) => {
  let counter = 0;
  arrayCigarettes.map((el) => {
    if (el === 0) {
      counter++;
    }
  });

  if (counter === 1) {
    elem1.classList.add("active");
  }
  if (counter === 3 || counter > 3) {
    elem1.classList.add("active");
    elem2.classList.add("active");
  }
};

export const checkAchievementWeek = (arrayCigarettes, elem1, elem2) => {
  let counter = 1;
  for (let idx = 0; idx < arrayCigarettes.length; idx++) {
    if (arrayCigarettes[idx] === 0 && arrayCigarettes[idx + 1] === 0) {
      counter++;
    }
  }
  if (counter === 7 || counter > 7) {
    elem1.classList.add("active");
  }
  if (counter === 14 || counter > 14) {
    elem1.classList.add("active");
    elem2.classList.add("active");
  }
};
