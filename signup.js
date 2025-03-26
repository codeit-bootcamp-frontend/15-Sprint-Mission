const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// input
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password_check');
const nickname = document.querySelector('#nickname');
const inputAll = document.querySelectorAll('input');

// alert
const emailAlert = document.querySelector('.email_alert');
const passwordAlert = document.querySelector('.password_alert');
const passwordCheckAlert = document.querySelector('.pw_check_alert');
const nicknameAlert = document.querySelector('.nickname_alert');

// button
const authButton = document.querySelector('.auth_button');
const authBtnLink = document.querySelector('.auth_button a');
const passwordVisible = document.querySelectorAll('.visible_password');

let emailInputStatus = false;
let pwInputStatus = false;
let pwInputCheckStatus = false;
let nicknameStatus = false;
let checkPassword;

function emailChecker(e) {
	if (e.target.value === '' && e.target.type === 'email') {
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

function nicknameChecker(e) {
	if (e.target.value === '') {
		showAlert(e.target, nicknameAlert, '닉네임을 입력해주세요.');
		nicknameStatus = false;
	} else {
		hideAlert(e.target, nicknameAlert);
		nicknameStatus = true;
	}
}

function passwordChecker(e) {
	if (e.target.value === '' && e.target.type === 'password') {
		showAlert(e.target, passwordAlert, '비밀번호를 입력해주세요.');
		pwInputStatus = false;
	} else if (e.target.value.length < 8) {
		showAlert(e.target, passwordAlert, '비밀번호를 8자 이상 입력해주세요.');
		pwInputStatus = false;
	} else {
		hideAlert(e.target, passwordAlert);
		checkPassword = e.target.value;
		pwInputStatus = true;
	}
}

function passwordDoubleCheck(e) {
	if (e.target.value !== checkPassword) {
		showAlert(e.target, passwordCheckAlert, '비밀번호가 일치하지 않습니다.');
		pwInputCheckStatus = false;
	} else {
		hideAlert(e.target, passwordCheckAlert);
		pwInputCheckStatus = true;
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

function visibleBtnHandler(e) {
	const targetInput = e.target.closest('.input_wrap').querySelector('input');
	console.log(targetInput);
	if (targetInput.type === 'password') {
		targetInput.type = 'text';
		e.target.src = './image/btn_visibility_off.png';
	} else {
		targetInput.type = 'password';
		e.target.src = './image/btn_visibility_on.png';
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
passwordCheck.addEventListener('focusout', (e) => passwordDoubleCheck(e));
nickname.addEventListener('focusout', (e) => nicknameChecker(e));
authButton.addEventListener('click', inputInit);
authBtnLink.addEventListener('click', (e) => authButtonActivate(e));
passwordVisible.forEach((element) => {
	element.addEventListener('click', (e) => visibleBtnHandler(e));
});
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
