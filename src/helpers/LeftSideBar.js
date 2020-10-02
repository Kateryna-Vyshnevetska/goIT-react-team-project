export function handleClickHabitButtonNotification() {
  const buttonDoneActive = document.querySelector(
    ".leftSideBar-checkList.note"
  );
  buttonDoneActive.classList.add("active");
  const buttonMissedActive = document.querySelector(
    ".leftSideBar-checkList.grades"
  );
  buttonMissedActive.classList.remove("active");
  const buttonDoneActiveList = document.querySelector(
    ".leftSideBar-checkList.cup"
  );
  buttonDoneActiveList.classList.remove("active");
}

export function handleClickHabitButtonGrades() {
  const buttonMissedActive = document.querySelector(
    ".leftSideBar-checkList.grades"
  );
  buttonMissedActive.classList.add("active");
  const buttonDoneActive = document.querySelector(
    ".leftSideBar-checkList.note"
  );
  buttonDoneActive.classList.remove("active");
  const buttonDoneActiveList = document.querySelector(
    ".leftSideBar-checkList.cup"
  );
  buttonDoneActiveList.classList.remove("active");
}

export function handleClickHabitButtonCheckList() {
  const buttonDoneActiveList = document.querySelector(
    ".leftSideBar-checkList.cup"
  );
  buttonDoneActiveList.classList.add("active");
  const buttonMissedActive = document.querySelector(
    ".leftSideBar-checkList.grades"
  );
  buttonMissedActive.classList.remove("active");
  const buttonDoneActive = document.querySelector(
    ".leftSideBar-checkList.note"
  );
  buttonDoneActive.classList.remove("active");
}
