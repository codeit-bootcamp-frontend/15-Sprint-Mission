console.log('validation.js loaded check');
document.addEventListener('DOMContentLoaded', function () {
    const emailLogin = document.getElementById('email-login');
    const passwordLogin = document.getElementById('password-login');
    const loginButton = document.getElementById('login-btn');

    const emailSignup = document.getElementById('email-signup');
    const nicknameSignup = document.getElementById('nickname');
    const passwordSignup = document.getElementById('password-signup');
    const passwordConfirmationSignup = document.getElementById('password-confirmation');
    const signupButton = document.getElementById('signup-btn');

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

        return regex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function toggleButtonState() {
        const isValidLogin =
            emailLogin?.value &&
            passwordLogin?.value &&
            validateEmail(emailLogin.value) &&
            validatePassword(passwordLogin.value);
        if (loginButton) loginButton.disabled = !isValidLogin;

        const isValidSignup =
            emailSignup?.value &&
            nicknameSignup?.value &&
            passwordSignup?.value &&
            passwordConfirmationSignup?.value &&
            validateEmail(emailSignup.value) &&
            validatePassword(passwordSignup.value) &&
            passwordSignup.value === passwordConfirmationSignup.value;
        if (signupButton) signupButton.disabled = !isValidSignup;
    }

    function showError(input, message) {
        input.classList.add('error');
        const errorMessage = input.closest('.form-group').querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.color = 'red';
        }
    }

    function clearError(input) {
        input.classList.remove('error');
        const errorMessage = input.closest('.form-group').querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = '';
        }
    }

    if (emailLogin) {
        emailLogin.addEventListener('focusout', function () {
            if (!emailLogin.value) {
                showError(emailLogin, '이메일을 입력해주세요.');
            } else if (!validateEmail(emailLogin.value)) {
                showError(emailLogin, '잘못된 이메일 형식입니다');
            } else {
                clearError(emailLogin);
            }
            toggleButtonState();
        });
    }

    if (passwordLogin) {
        passwordLogin.addEventListener('focusout', function () {
            if (!passwordLogin.value) {
                showError(passwordLogin, '비밀번호를 입력해주세요.');
            } else if (!validatePassword(passwordLogin.value)) {
                showError(passwordLogin, '비밀번호를 8자 이상 입력해주세요.');
            } else {
                clearError(passwordLogin);
            }
            toggleButtonState();
        });
    }

    if (emailSignup) {
        emailSignup.addEventListener('focusout', function () {
            if (!emailSignup.value) {
                showError(emailSignup, '이메일을 입력해주세요.');
            } else if (!validateEmail(emailSignup.value)) {
                showError(emailSignup, '잘못된 이메일 형식입니다');
            } else {
                clearError(emailSignup);
            }
            toggleButtonState();
        });
    }

    if (nicknameSignup) {
        nicknameSignup.addEventListener('focusout', function () {
            if (!nicknameSignup.value) {
                showError(nicknameSignup, '닉네임을 입력해주세요.');
            } else {
                clearError(nicknameSignup);
            }
            toggleButtonState();
        });
    }

    if (passwordSignup) {
        passwordSignup.addEventListener('focusout', function () {
            if (!passwordSignup.value) {
                showError(passwordSignup, '비밀번호를 입력해주세요.');
            } else if (!validatePassword(passwordSignup.value)) {
                showError(passwordSignup, '비밀번호를 8자 이상 입력해주세요.');
            } else {
                clearError(passwordSignup);
            }
            toggleButtonState();
        });
    }

    if (passwordConfirmationSignup) {
        passwordConfirmationSignup.addEventListener('focusout', function () {
            if (passwordConfirmationSignup.value !== passwordSignup.value) {
                showError(passwordConfirmationSignup, '비밀번호가 일치하지 않습니다.');
            } else {
                clearError(passwordConfirmationSignup);
            }
            toggleButtonState();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            if (!loginButton.disabled) {
                window.location.href = '/items';
            }
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', function () {
            if (!signupButton.disabled) {
                window.location.href = '/login';
            }
        });
    }
});
