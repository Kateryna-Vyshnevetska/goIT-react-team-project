const ACHIEVEMENT_SUCCESS = "@achievement/achievementSuccess";

const quantityOfSmokedCigarettes = ({
  smokedCigarettes,
  quizInfoPerDay,
  quizInfoPerTime,
}) => {
  return {
    type: ACHIEVEMENT_SUCCESS,
    payload: {
      smokedCigarettes,
      quizInfoPerDay,
      quizInfoPerTime,
    },
  };
};
export default quantityOfSmokedCigarettes;
