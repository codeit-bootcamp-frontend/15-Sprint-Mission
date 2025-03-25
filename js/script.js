import { authInit } from './pages/auth.js';

function init() {
  const container = document.querySelector('#container');

  if (container.classList.contains('auth-page')) {
    authInit();
  }
}

init();
