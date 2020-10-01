export function getRandomColor() {
  let color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)}) `;
  return color;
}

export function handleClickHabitButtonDone() {
  const habitNumberCounter = document.querySelector(".habit-number-counter");
  habitNumberCounter.classList.toggle("isVisible");

  const buttonDoneActive = document.querySelector(".btn.done");
  buttonDoneActive.classList.toggle("active");
}

export function handleClickHabitButtonMissed() {
  const habitNumberCounter = document.querySelector(".habit-number-counter");
  habitNumberCounter.classList.toggle("isVisible");

  const buttonMissedActive = document.querySelector(".btn.missed");
  buttonMissedActive.classList.toggle("active");
}
