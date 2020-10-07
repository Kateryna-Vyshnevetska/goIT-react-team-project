export const getMoney = (arr = [], { cigarettePackPrice, cigarettePerDay }) => {
  const oneSigarretPrice = cigarettePackPrice / 20;
  let counterDays = 0;
  let counterSumm = 0;
  arr.forEach((elem) => {
    if (Number(elem)) {
      counterDays += 1;
      counterSumm += Number(elem);
    }
  });
  let spentForSigarret = oneSigarretPrice * counterSumm;
  let willBeSpentForSigarret = cigarettePerDay * oneSigarretPrice * counterDays;
  let result = willBeSpentForSigarret - spentForSigarret;
  return result < 0 ? "0" : result;
};
export const getTime = (arr = [], { cigarettePerTime, cigarettePerDay }) => {
  const timeForOneSiggarett = cigarettePerTime;
  let counterTime = 0;
  let counterSumm = 0;
  arr.forEach((elem) => {
    if (Number(elem)) {
      counterTime += 1;
      counterSumm += Number(elem);
    }
  });
  let totalTimeForSiggaretts =
    timeForOneSiggarett * cigarettePerDay * counterTime;
  let newTimeForOneSiggarett = counterSumm * timeForOneSiggarett;
  let acconomyTime = totalTimeForSiggaretts - newTimeForOneSiggarett;
  let hours = acconomyTime >= 60 ? Math.floor(acconomyTime / 60) : "0";
  let minutes = Math.floor(acconomyTime % 60);
  let formated = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
  ].join(" : ");
  return acconomyTime < 0 ? "00 : 00" : formated;
};
