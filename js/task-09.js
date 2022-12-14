const changeColorBtnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const changeBodyColorRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', changeColorBtnOnBody);

function changeColorBtnOnBody() {
  const currentColor = getRandomHexColor();
  spanRef.textContent = currentColor,
  changeBodyColorRef.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};