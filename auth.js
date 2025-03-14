const email = document.getElementById('email-id');
const nickname = document.getElementById('nickname-id')
const pwd = document.getElementById('pwd-id');
const errorMessage = document.getElementsByClassName('error-message');

function emailError (e) {
    if (e.target.value === '') {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('email'))
            errorMessage[elem].textContent = '이메일을 입력해주세요.';
        }
        e.target.classList.add('error');
    } else {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('email'))
            errorMessage[elem].textContent = '';
        }
        e.target.classList.remove('error');
    }
}

email.addEventListener('focusout', emailError);

function pwdError (e) {
    if (e.target.value === '') {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('pwd'))
            errorMessage[elem].textContent = '비밀번호를 입력해주세요.';
        }
        e.target.classList.add('error');
    } else {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('pwd'))
            errorMessage[elem].textContent = '';
        }
        e.target.classList.remove('error');
    }
}

pwd.addEventListener('focusout', pwdError);

function nicknameError (e) {
    if (e.target.value === '') {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('nickname'))
            errorMessage[elem].textContent = '닉네임을 입력해주세요.';
        }
        e.target.classList.add('error');
    } else {
        for (elem in errorMessage) {
            if (errorMessage[elem].classList.contains('nickname'))
            errorMessage[elem].textContent = '';
        }
        e.target.classList.remove('error');
    }
}

if (nickname !== null) {
    nickname.addEventListener('focusout', nicknameError);
}

const visible = document.getElementsByClassName('visible');

function passwordVisibility (e) {
    if (e.target.getAttribute("src") === "/img/visibility_off.png") {
        e.target.setAttribute("src", "/img/visibility_on.png");
        e.target.parentElement.previousElementSibling.setAttribute("type", "text");
    } else {
        e.target.setAttribute("src", "/img/visibility_off.png");
        e.target.parentElement.previousElementSibling.setAttribute("type", "password");
    }
}

console.log(visible);
for (let icon of visible) {
    icon.addEventListener('click', passwordVisibility);
}