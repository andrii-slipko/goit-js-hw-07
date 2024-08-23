const nameInput = document.querySelector('#name-input');
nameInput.style.width = `360px`;
nameInput.style.height = `40px`;
nameInput.style.borderRadius = `4px`
nameInput.style.border = `1px solid #808080`
const nameOutput = document.querySelector('#name-output');

function updateName() {
    const trimmedValue = nameInput.value.trim();
    if (trimmedValue === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = trimmedValue;
    }
  }
  nameInput.addEventListener('input', updateName);
