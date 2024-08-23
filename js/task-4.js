const form = document.querySelector('.login-form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'start';
form.style.gap = '8px'
const labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.fontFamily = 'Montserrat';
    label.style.fontSize = '16px';
    label.style.fontWeight = '400';
    label.style.lineHeight = '24px';
    label.style.letterSpacing = '0.04em';
    label.style.textAlign = 'left';
  });
  const inputs = document.querySelectorAll('input');
  inputs.forEach (input => {
input.style.width = '360px';
input.style.height = '40px';
input.style.borderRadius = '4px';
input.style.border = '1px solid #808080';
  });
  const btn = document.querySelector('button');
  btn.style.width = '86px';
  btn.style.height = '40px';
  btn.style.padding = '8px 16px 8px 16px';
  btn.style.gap = '10px';
  btn.style.borderRadius = '8px';
  btn.style.backgroundColor = '#4E75FF';
  btn.style.color = '#FFFFFF';

  
  
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const { email, password } = form.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: email.value.trim(),
    password: password.value.trim()
  };

  console.log(formData);
  form.reset();
});