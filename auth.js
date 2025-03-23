const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const setInputError = (event) => {
  console.dir(event.target);
  if (event.target.value === "") {
    event.target.classList.add("input-error");
    setErrorMessage(event.target);
  } else {
    event.target.classList.remove("input-error");
    event.target.nextElementSibling.remove();
  }
};

const setErrorMessage = (element) => {
  if (!element.nextElementSibling) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message", "text-lg", "semibold");
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
      case "checkPassword":
        errorMessage.textContent = "비밀번호 확인을 입력해주세요.";
        break;
    }
    element.after(errorMessage);
  }
};

loginForm?.addEventListener("focusout", setInputError);
signupForm?.addEventListener("focusout", setInputError);
