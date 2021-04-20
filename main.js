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

const divPositionX = 550;
const divPositionY = 350;

loginPanel.style.top = `${divPositionY}px`;
loginPanel.style.left = `${divPositionX}px`;

let holdX = 0;
let holdY = 0;
let moveX = 0;
let moveY = 0;

function movePosition(e) {
  moveX = e.clientX;
  moveY = e.clientY;
  console.log(`Pozycja X: ${holdX}`);
  console.log(`Pozycja Y: ${holdY}`);
  loginPanel.style.left = `${moveX}px`;
  loginPanel.style.top = `${moveY}px`;
}

function startMovePanel(e) {
  console.log(e.offsetX);
  console.log(e.offsetY);
  holdX = e.offsetX;
  holdY = e.offsetY;

  loginPanel.addEventListener('mousemove', movePosition);
}

function setNewPosition() {
  loginPanel.removeEventListener('mousemove', movePosition);

  loginPanel.style.top = `${holdY + moveY}px`;
  loginPanel.style.left = `${holdX + moveX}px`;
}

loginPanel.addEventListener('mousedown', startMovePanel);
loginPanel.addEventListener('mouseup', setNewPosition);
