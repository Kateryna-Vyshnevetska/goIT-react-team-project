// нужно передать массив привычек и ай ди привычки
function FindHabitById(array, id) {
  const habitById = array.find((el) => el._id === id);
  return habitById;
}




export default FindHabitById;
