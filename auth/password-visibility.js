// 비밀번호 눈
const pwVisibility  = document.querySelector(".pw-visibility");
const eyeImage = document.querySelector(".eye_icon");

const isPwVisibility = () => {
  if (pwVisibility.type === "password") { // password면 text로
    eyeImage.src = "/image/password_show_icon.svg";
    pwVisibility.type = "text";
  } else { // text면 password로
    eyeImage.src = "/image/password_toggle_icon.svg";
    pwVisibility.type = "password";
  }
}


eyeImage.addEventListener("click", isPwVisibility);

// 비밀번호 확인 눈
const pwConfirmVisibility = document.querySelector("#password-confirm");
const pwConfirmEyeImage = document.querySelector("#password-confirm-eye");

const isPwConfirmVisibility = () => {
  if (pwConfirmVisibility.type === "password") { // password면 text로
    pwConfirmEyeImage.src = "/image/password_show_icon.svg";
    pwConfirmVisibility.type = "text";
  } else { // text면 password로
    pwConfirmEyeImage.src = "/image/password_toggle_icon.svg";
    pwConfirmVisibility.type = "password";
  }
}

pwConfirmEyeImage.addEventListener("click", isPwConfirmVisibility);