export function handleClickHabitButtonNotification() {
    const buttonDoneActive = document.querySelector(".leftSideBar-checkList.note");
    buttonDoneActive.classList.toggle("active");
}
export function handleClickHabitButtonGrades() {
    const buttonMissedActive = document.querySelector(".leftSideBar-checkList.grades");
    buttonMissedActive.classList.toggle("active");
}
export function handleClickHabitButtonCheckList() {
    const buttonDoneActive = document.querySelector(".leftSideBar-checkList.cup");
    buttonDoneActive.classList.toggle("active");
}