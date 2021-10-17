function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

const handleChangeColor = () => {
  const currentColor = getRandomHexColor();
  body.setAttribute('style', `background:${currentColor}`);
  color.textContent = currentColor;

};

changeColor.addEventListener('click', handleChangeColor);

