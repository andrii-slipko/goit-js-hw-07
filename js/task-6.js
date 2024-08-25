function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; 

  const boxesFragment = document.createDocumentFragment(); 

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor(); 
    newBox.style.margin = '5px'; 
    boxesFragment.append(newBox); 
  }

  boxesContainer.append(boxesFragment);
}


function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; 
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) { 
    createBoxes(amount); 
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.'); 
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes(); 
});
const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  boxesContainer.innerHTML = '';
  boxesContainer.style.display = 'flex';
  boxesContainer.style.flexDirection = 'row';
  boxesContainer.style.flexWrap = 'wrap';
  boxesContainer.style.gap = '44px'; 
  input.style.width = '150px';
input.style.height = '40px';
input.style.gap = '10px';
input.style.borderRadius = '8px';
input.style.border = '1px solid #808080';
input.style.textAlign = 'center'
createButton.style.width = '120px';
createButton.style.height = '40px';
createButton.style.padding = '8px 16px 8px 16px';
createButton.style.gap = '10px';
createButton.style.borderRadius = '8px';
createButton.style.backgroundColor = '#4E75FF';
createButton.style.color = '#FFFFFF';
destroyButton.style.width = '120px';
destroyButton.style.height = '40px';
destroyButton.style.padding = '8px 16px 8px 16px';
destroyButton.style.gap = '10px';
destroyButton.style.borderRadius = '8px';
destroyButton.style.backgroundColor = '#FF4E4E';
destroyButton.style.color = '#FFFFFF';

