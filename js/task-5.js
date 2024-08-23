function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector('.change-color');
changeColorButton.style.width = '148px';
changeColorButton.style.height = '40px';
changeColorButton.style.padding = '8px 16px 8px 16px';
changeColorButton.style.borderRadius = '8px';
changeColorButton.style.backgroundColor ='#4E75FF';
changeColorButton.style.color = '#FFFFFF';
const colorSpan = document.querySelector('.color');
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
const div = document.querySelector('.widget');
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center'
const text = document.querySelector('p');
text.style.fontFamily = 'Montserrat';
text.style.fontSize = '16px';
text.style.fontWeight = '400';
text.style.lineHeight = '24px';
text.style.letterSpacing = '0.04em';
text.style.textAlign = 'left';
