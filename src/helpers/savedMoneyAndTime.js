import {
  getConstAmountOfCigarettesPerDay,
  getCigarettePackPrice,
  getCurrentAmountOfCigarettes,
  allCigarettes,
  getTimeForOneCigarette,
} from "../redux/selectors";

export const mapStateToProps = (state) => {
  const packPrice = getCigarettePackPrice(state);
  const cigarettesPerDay = getConstAmountOfCigarettesPerDay(state)
    ? getConstAmountOfCigarettesPerDay(state)
    : 0
    ? getCigarettePackPrice(state)
    : 0;
  const currentAmountOfCigarettes = getCurrentAmountOfCigarettes(state)
    ? getCurrentAmountOfCigarettes(state)
    : 0;
  const timeForOneCigarette = getTimeForOneCigarette(state)
    ? getTimeForOneCigarette(state)
    : 0;

  const numberOfCigarettsInPack = 20;
  const priceForOneCigarettes = packPrice / numberOfCigarettsInPack;

  let savedMoney, savedTime;
  if (getCurrentAmountOfCigarettes(state) === undefined) {
    savedMoney = 0;
    savedTime = 0;
  } else {
    savedMoney =
      (cigarettesPerDay - currentAmountOfCigarettes) * priceForOneCigarettes;

    savedTime =
      (cigarettesPerDay - currentAmountOfCigarettes) * timeForOneCigarette;
  }

  const arrayOfCig = allCigarettes(state);

  let result = arrayOfCig.reduce(function (sum, elem) {
    const need = sum + (cigarettesPerDay - elem);

    return need;
  }, 0);
  const savedTotalTime = result * timeForOneCigarette;

  const savedMoneyTotal = result * priceForOneCigarettes;

  return {
    money: savedMoneyTotal.toFixed(2),
    time: savedTotalTime,
  };
};
