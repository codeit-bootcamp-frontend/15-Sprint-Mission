const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// input
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const inputAll = document.querySelectorAll('input');

// alert
const emailAlert = document.querySelector('.email_alert');
const passwordAlert = document.querySelector('.password_alert');

// button
const authButton = document.querySelector('.auth_button');
const authBtnLink = document.querySelector('.auth_button a');
const passwordVisible = document.querySelector('.visible_password');

let emailInputStatus = false;
let pwInputStatus = false;

function emailChecker(e) {
	if (e.target.value === '') {
		showAlert(e.target, emailAlert, '이메일을 입력해주세요.');
		emailInputStatus = false;
	} else if (!EMAIL_PATTERN.test(e.target.value)) {
		showAlert(e.target, emailAlert, '잘못된 이메일 형식입니다.');
		emailInputStatus = false;
	} else {
		hideAlert(e.target, emailAlert);
		emailInputStatus = true;
	}
}

function passwordChecker(e) {
	if (e.target.value === '') {
		showAlert(e.target, passwordAlert, '비밀번호를 입력해주세요.');
		pwInputStatus = false;
	} else if (e.target.value.length < 8) {
		showAlert(e.target, passwordAlert, '비밀번호를 8자 이상 입력해주세요.');
		pwInputStatus = false;
	} else {
		hideAlert(e.target, passwordAlert);
		pwInputStatus = true;
	}
}

function showAlert(inputField, element, message) {
	inputField.classList.add('inputAlert');
	element.classList.add('visible_alert');
	element.textContent = message;
}

function hideAlert(inputField, element) {
	inputField.classList.remove('inputAlert');
	element.classList.remove('visible_alert');
}

function visibleBtnHandler() {
	if (password.type === 'password') {
		password.type = 'text';
		passwordVisible.src = './image/btn_visibility_off.png';
	} else {
		password.type = 'password';
		passwordVisible.src = './image/btn_visibility_on.png';
	}
}

function authButtonActivate(e) {
	if (!authButton.classList.contains('btn_active')) {
		e.preventDefault();
	}
}

function inputInit() {
	inputAll.forEach((input) => {
		input.value = '';
	});
}
email.addEventListener('focusout', (e) => emailChecker(e));
password.addEventListener('focusout', (e) => passwordChecker(e));
authBtnLink.addEventListener('click', (e) => authButtonActivate(e));
authButton.addEventListener('click', inputInit);
passwordVisible.addEventListener('click', visibleBtnHandler);
inputAll.forEach((tag) => {
	tag.addEventListener('input', () => {
		if (
			Array.from(inputAll).every((input) => {
				if (input.type === 'password') {
					return input.value.length >= 8 && !input.classList.contains('inputAlert');
				}
				return input.value !== '' && !input.classList.contains('inputAlert');
			})
		) {
			authButton.classList.add('btn_active');
			authButton.classList.remove('btn_disable');
		} else {
			authButton.classList.remove('btn_active');
			authButton.classList.add('btn_disable');
		}
	});
});
