export function handleClickHabitButton() {
  const isVisible = document.querySelector(".habit-number-counter");
  isVisible.classList.add("isVisible");

  const buttonDoneActive = document.querySelector(".btn.done");
  buttonDoneActive.classList.add("active");

  const buttonMissedActive = document.querySelector(".btn.missed");
  buttonMissedActive.classList.add("active");
}
