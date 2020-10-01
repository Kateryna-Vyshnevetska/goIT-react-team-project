export function getRandomColor() {
  let color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)}) `;
  return color;
}
