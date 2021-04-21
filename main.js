const inputPassword = document.querySelector('input[type=password]');
const eyeIcon = document.querySelector('.icon');

function showPassword(e) {
  inputPassword.removeAttribute('type');
  inputPassword.setAttribute('type', 'text');
  e.target.classList.remove('fa-eye');
  e.target.classList.add('fa-eye-slash');
}

function hiddenPassword(e) {
  inputPassword.removeAttribute('type');
  inputPassword.setAttribute('type', 'password');
  e.target.classList.remove('fa-eye-slash');
  e.target.classList.add('fa-eye');
}

eyeIcon.addEventListener('mousedown', showPassword);
eyeIcon.addEventListener('mouseup', hiddenPassword);

// --------------------------

const loginPanel = document.querySelector('.login-panel');
const title = document.querySelector('.title');
const body = document.querySelector('body');
const myForm = document.querySelector('#my-form');

let holdPointX;
let holdPointY;

let positionX;
let positionY;

function selectElement(e) {
  holdPointX = e.offsetX;
  holdPointY = e.offsetY;
  positionX = e.pageX;
  positionY = e.pageY;
  console.log(`X: ${holdPointX}, Y: ${holdPointY}`);
  console.log(`Page X: ${e.pageX}, Y: ${e.pageY}`);
  console.log(`Page X: ${positionX}, Y: ${positionY}`);
  body.addEventListener('mousemove', moveElement);
}

function moveElement(e) {
  positionX = e.pageX;
  positionY = e.pageY;
  loginPanel.style.top = `${positionY - holdPointY}px`;
  loginPanel.style.left = `${positionX - holdPointX}px`;
}

function setNewPlace() {
  loginPanel.style.top = `${positionY - holdPointY}px`;
  loginPanel.style.left = `${positionX - holdPointX}px`;
  console.log(`top: ${positionY + holdPointY}px`);
  console.log(`left: ${positionX + holdPointX}px`);
  body.removeEventListener('mousemove', moveElement);
}

title.addEventListener('mousedown', selectElement);
loginPanel.addEventListener('mouseup', setNewPlace);
