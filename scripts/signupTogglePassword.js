const passwordInput = document.querySelector('#pwd'); 
const passwordBtn = document.querySelector('.pwd-icon-btn');
const passwordConfirmInput = document.querySelector('#pwd-confirm');
const passwordConfirmBtn = document.querySelector('.pwd-confirm-icon-btn');
const toggleImg = document.querySelector('.pwd-icons');
const toggleConfirmImg = document.querySelector('.pwd-confirm-icon');
let toggle = true;  // 기본 안보이게

function showPassword(input, img) {
    input.type = 'text';
    img.src = '../assets/icons/show-password.png';
    toggle = false;
}

function hidePassword(input, img) {
    input.type = 'password';
    img.src = '../assets/icons/hide-password.png';
    toggle = true;
}

passwordBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(toggle) {
        showPassword(passwordInput, toggleImg);
    } else {
        hidePassword(passwordInput, toggleImg);
    }
});

passwordConfirmBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(toggle) {
        showPassword(passwordConfirmInput, toggleConfirmImg);
    } else {
        hidePassword(passwordConfirmInput, toggleConfirmImg);
    }
});