const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const setInputError = (event) => {
  console.dir(event.target);
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
    password.value !== passwordCheck.value &&
    passwordCheck.value.length >= 8
  ) {
    passwordCheck.nextElementSibling?.remove();
    passwordCheck.classList.add("input-error");
    setErrorMessage(passwordCheck, "passwordCheck");
  } else if (password.value === passwordCheck.value) {
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

loginForm?.addEventListener("focusout", setInputError);
signupForm?.addEventListener("focusout", setInputError);
