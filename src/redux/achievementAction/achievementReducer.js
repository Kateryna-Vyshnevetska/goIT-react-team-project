const LOGOUT = "@auth/logout";
const ACHIEVEMENT_SUCCESS = "@achievement/achievementSuccess";

const initialState = [
  {
    name: "oneCigaretteRefusal",
    status: false,
    text: "Отказ от 1 сигареты",
  },

  {
    name: "threeCigarettesRefusal",
    status: false,
    text: "Отказ от 3 сигарет",
  },

  {
    name: "fiveCigarettesRefusal",
    status: false,
    text: "Отказ от 5 сигарет",
  },

  {
    name: "oneDayCigaretteRefusal",
    status: false,
    text: "Не курю 1 день",
  },

  {
    name: "threeDaysCigaretteRefusal",
    status: false,
    text: "Не курю 3 дня",
  },

  {
    name: "oneWeekCigaretteRefusal",
    status: false,
    text: "Не курю 1 неделю",
  },

  {
    name: "twoWeeksCigaretteRefusal",
    status: false,
    text: "Не курю 2 недели",
  },

  {
    name: "oneMonthCigaretteRefusal",
    status: false,
    text: "Не курю 1 месяц",
  },

  {
    name: "threeMonthsCigaretteRefusal",
    status: false,
    text: "Не курю 3 месяца",
  },

  {
    name: "sixMonthsCigaretteRefusal",
    status: false,
    text: "Не курю 6 месяцев",
  },

  {
    name: "oneYearCigaretteRefusal",
    status: false,
    text: "Не курю 1 год",
  },

  {
    name: "twoYearsCigaretteRefusal",
    status: false,
    text: "2 года без сигарет",
  },

  {
    name: "threeYearsCigaretteRefusal",
    status: false,
    text: "3 года без сигарет",
  },

  {
    name: "fiveYearsCigaretteRefusal",
    status: false,
    text: "Уже 5. Дай пять!",
  },

  {
    name: "oneHourSave",
    status: false,
    text: "Сохранил 1 час",
  },

  {
    name: "threeHoursSave",
    status: false,
    text: "Сохранил 3 часа",
  },

  {
    name: "fiveHoursSave",
    status: false,
    text: "Сохранил 5 часов",
  },

  {
    name: "tenHoursSave",
    status: false,
    text: "Сохранил 10 часов",
  },
];

const getAchievements = (state, payload) => {
  let newState = [...state];

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .some((cigarette) => cigarette <= Number(payload.quizInfoPerDay) - 1)
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "oneCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .some((cigarette) => cigarette <= Number(payload.quizInfoPerDay) - 3)
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "threeCigarettesRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .some((cigarette) => cigarette <= Number(payload.quizInfoPerDay) - 5)
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "fiveCigarettesRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }
  if (payload.smokedCigarettes.data.some((cigarette) => cigarette === 0)) {
    newState = newState.map((achievement) =>
      achievement.name === "oneDayCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }
  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 3
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "threeDaysCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 7
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "oneWeekCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 14
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "twoWeeksCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 30
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "oneMonthCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 90
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "threeMonthsCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 182
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "sixMonthsCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 365
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "oneYearCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 730
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "twoYearsCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 1095
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "threeYearsCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .filter((element) => element === 0).length >= 1825
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "fiveYearsCigaretteRefusal"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    1
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "oneHourSave"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    3
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "threeHoursSave"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    5
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "fiveHoursSave"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  if (
    payload.smokedCigarettes.data
      .filter((element) => element !== null)
      .reduce((acc, cigarette) => {
        acc += Number(payload.quizInfoPerDay) - cigarette;
        return acc;
      }, 0) *
      (payload.quizInfoPerTime / 60) >=
    5
  ) {
    newState = newState.map((achievement) =>
      achievement.name === "tenHoursSave"
        ? { ...achievement, status: true }
        : achievement
    );
  }

  return newState;
};

const achievementsReducer = (
  state = [...initialState],
  { type, payload = [] }
) => {
  const values = Object.entries(payload);
  switch (type) {
    case ACHIEVEMENT_SUCCESS:
      return getAchievements(state, payload);
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default achievementsReducer;
