const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const setInputError = (event) => {
  console.dir(event.currentTarget);
  if (event.target.closest("button")) {
    return;
  }
  if (event.target.value === "") {
    event.target.nextElementSibling?.remove();
    event.target.classList.add("input-error");
    setErrorMessage(event.target, "empty");
  } else if (event.target.id === "useremail") {
    event.target.nextElementSibling?.remove();
    if (event.target.validationMessage) {
      event.target.classList.add("input-error");
      setErrorMessage(event.target, "email");
    } else {
      event.target.classList.remove("input-error");
    }
  } else if (
    event.target.id === "password" ||
    event.target.id === "passwordCheck"
  ) {
    event.target.nextElementSibling?.remove();
    if (event.target.value.length < 8) {
      event.target.classList.add("input-error");
      setErrorMessage(event.target, "password");
    } else {
      event.target.classList.remove("input-error");
      checkPassword();
    }
  } else {
    event.target.classList.remove("input-error");
    event.target.nextElementSibling?.remove();
  }
};

const checkPassword = () => {
  const password = document.querySelector("#password");
  const passwordCheck = document.querySelector("#passwordCheck");
  if (
    password.value !== passwordCheck?.value &&
    passwordCheck?.value.length >= 8
  ) {
    passwordCheck.nextElementSibling?.remove();
    passwordCheck.classList.add("input-error");
    setErrorMessage(passwordCheck, "passwordCheck");
  } else if (password.value === passwordCheck?.value) {
    passwordCheck.nextElementSibling?.remove();
    passwordCheck.classList.remove("input-error");
  }
};

const setErrorMessage = (element, type) => {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message", "text-lg", "semibold");
  if (type === "empty") {
    if (!element.nextElementSibling) {
      switch (element.id) {
        case "useremail":
          errorMessage.textContent = "이메일을 입력해주세요.";
          break;
        case "password":
          errorMessage.textContent = "비밀번호를 입력해주세요.";
          break;
        case "nickname":
          errorMessage.textContent = "닉네임을 입력해주세요.";
          break;
        case "passwordCheck":
          errorMessage.textContent = "비밀번호 확인을 입력해주세요.";
          break;
      }
      element.after(errorMessage);
    }
  } else if (type === "email") {
    errorMessage.textContent = "잘못된 이메일 형식입니다.";
    element.after(errorMessage);
  } else if (type === "password") {
    errorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    element.after(errorMessage);
  } else if (type === "passwordCheck") {
    errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
    element.after(errorMessage);
  }
};

const setInputValid = (event) => {
  if (event.target.closest("button")) {
    return;
  }
  if (!event.target.classList.contains("input-error")) {
    event.target.classList.add("input-valid");
  } else {
    event.target.classList.remove("input-valid");
  }
};

const isValidForm = (event) => {
  for (let e of event.currentTarget) {
    if (e.tagName === "INPUT" && !e.classList.contains("input-valid")) {
      return false;
    }
  }
  return true;
};

const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");

const setLoginButton = (event) => {
  if (isValidForm(event)) {
    loginButton.disabled = false;
    loginButton.classList.remove("button-disabled");
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("button-disabled");
  }
};

const setSignupButton = (event) => {
  if (isValidForm(event)) {
    signupButton.disabled = false;
    signupButton.classList.remove("button-disabled");
  } else {
    signupButton.disabled = true;
    signupButton.classList.add("button-disabled");
  }
};

loginForm?.addEventListener("focusout", setInputError);
loginForm?.addEventListener("focusout", setInputValid);
loginForm?.addEventListener("focusout", setLoginButton);

signupForm?.addEventListener("focusout", setInputError);
signupForm?.addEventListener("focusout", setInputValid);
signupForm?.addEventListener("focusout", setSignupButton);
