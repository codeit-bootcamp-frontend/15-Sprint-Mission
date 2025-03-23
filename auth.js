const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const setInputError = (event) => {
  if (event.target.value === "") {
    event.target.classList.add("input-error");
  } else {
    event.target.classList.remove("input-error");
  }
};

loginForm?.addEventListener("focusout", setInputError);
signupForm?.addEventListener("focusout", setInputError);
