const email = document.getElementById('emailId');
const nickname = document.getElementById('nicknameId');
const pwd = document.getElementById('pwdId');
const checkPwd = document.getElementById('checkPwdId');
const errorMessage = document.getElementsByClassName('error-message');

function emailError (e) {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (e.target.value === '') {
        for (elem of errorMessage) {
            if (elem.classList.contains('email'))
            elem.textContent = '이메일을 입력해주세요.';
        }
        e.target.classList.add('error');
    } else if (exptext.test(e.target.value) === false) {
        for (elem of errorMessage) {
            if (elem.classList.contains('email'))
                elem.textContent = '잘못된 이메일 형식입니다.';
        }
        e.target.classList.add('error');
    }
    else {
        for (elem of errorMessage) {
            if (elem.classList.contains('email'))
            elem.textContent = '';
        }
        e.target.classList.remove('error');
    }
}

email.addEventListener('focusout', emailError);

function nicknameError (e) {
    if (e.target.value === '') {
        for (elem of errorMessage) {
            if (elem.classList.contains('nickname'))
            elem.textContent = '닉네임을 입력해주세요.';
        }
        e.target.classList.add('error');
    } else {
        for (elem of errorMessage) {
            if (elem.classList.contains('nickname'))
            elem.textContent = '';
        }
        e.target.classList.remove('error');
    }
}

if (nickname !== null) {
    nickname.addEventListener('focusout', nicknameError);
}

function pwdError (e) {
    if (e.target.value === '') {
        for (elem of errorMessage) {
            if (elem.classList.contains('pwd'))
            elem.textContent = '비밀번호를 입력해주세요.';
        }
        e.target.classList.add('error');
    } else if (e.target.value.length < 8) {
        for (elem of errorMessage) {
            if (elem.classList.contains('pwd'))
            elem.textContent = '비밀번호를 8자 이상 입력해주세요.';
        }
        e.target.classList.add('error');
    } else {
        for (elem of errorMessage) {
            if (elem.classList.contains('pwd'))
            elem.textContent = '';
        }
        e.target.classList.remove('error');
    }
}

pwd.addEventListener('focusout', pwdError);

function checkPwdError (e) {
    if (e.target.value !== pwd.value) {
        for (elem of errorMessage) {
            if (elem.classList.contains('check-pwd'))
            elem.textContent = '비밀번호가 일치하지 않습니다.';
        }
        e.target.classList.add('error');
    } else {
        for (elem of errorMessage) {
            if (elem.classList.contains('check-pwd'))
            elem.textContent = '';
        }
        e.target.classList.remove('error');
    }
}

if (checkPwd !== null) {
    checkPwd.addEventListener('focusout', checkPwdError);
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