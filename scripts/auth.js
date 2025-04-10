const signupInputs = document.querySelectorAll(
  ".email_input, .nickname_input, .password_input, .password_check_input"
);
const signupButton = document.querySelector(".signup_button");

function errorMessage(target, message) {
  const parent = target.parentElement;
  const exists = parent.querySelector(".errorMessage");
  if (!exists) {
    const error = document.createElement("div");
    error.classList.add("errorMessage");
    error.textContent = message;
    target.classList.add("wrongCssBorder");
    target.after(error);
  }
}

function inputcheck(input) {
  const parent = input.parentElement;
  const errorExist = parent.querySelector(".errorMessage");
  const classList = input.classList;

  if (errorExist) {
    errorExist.remove();
    input.classList.remove("wrongCssBorder");
  }

  if (classList.contains("email_input")) {
    if (!input.value) {
      errorMessage(input, "이메일을 입력해주세요");
    } else if (!input.validity.valid) {
      errorMessage(input, "잘못된 이메일 형식입니다");
    }
  }

  if (classList.contains("nickname_input") && !input.value) {
    errorMessage(input, "닉네임을 입력해주세요");
  }

  if (classList.contains("password_input")) {
    if (!input.value) {
      errorMessage(input, "비밀번호를 입력해주세요");
    } else if (input.value.length < 8) {
      errorMessage(input, "비밀번호를 8자 이상 입력해주세요");
    }
  }

  if (classList.contains("password_check_input")) {
    const pw = document.querySelector(".password_input");
    if (!input.value) {
      errorMessage(input, "비밀번호 확인을 입력해주세요");
    } else if (pw.value !== input.value) {
      errorMessage(input, "비밀번호가 일치하지 않습니다");
    }
  }
}

function checkSignupValid() {
  let isAllValid = true;
  signupInputs.forEach((input) => {
    const parent = input.parentElement;
    const errorExist = parent.querySelector(".errorMessage");
    if (!input.value || errorExist) {
      isAllValid = false;
    }
  });

  signupButton.disabled = !isAllValid;
  signupButton.onclick = isAllValid
    ? () => (window.location.href = "/login")
    : null;
}

signupInputs.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    inputcheck(e.target);
    checkSignupValid();
  });
});
