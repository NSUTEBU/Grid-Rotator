const rotatingArray = [1, 2, 3, 6, 9, 8, 7, 4];
const staticArray = [...rotatingArray];
const clockWiseRotator = () => {
  const lastNumber = rotatingArray.pop();
  rotatingArray.unshift(lastNumber);
  for (let i = 0; i < rotatingArray.length; i++) {
    const buttonId = document.querySelector(`#btn${staticArray[i]}`);
    buttonId.innerText = rotatingArray[i];
    buttonId.style.background = `#E27D${rotatingArray[i]}0`;
  }
};
document.querySelector("#btn5").addEventListener("click", clockWiseRotator);
const antiClockWiseRotator = () => {
  const firstNumber = rotatingArray.shift();
  rotatingArray.push(firstNumber);
  for (let i = 0; i < rotatingArray.length; i++) {
    const buttonId = document.querySelector(`#btn${staticArray[i]}`);
    buttonId.innerText = rotatingArray[i];
    buttonId.style.background = `#E27D${rotatingArray[i]}0`;
  }
};
for (let i = 0; i < rotatingArray.length; i++) {
  document
    .querySelector(`#btn${staticArray[i]}`)
    .addEventListener("click", antiClockWiseRotator);
}