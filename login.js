import {
  buttonDeactivate,
  requireContent,
  buttonActivate,
  checkPassword,
  visibleIconToggle,
} from "./loginFunctions.js";
const primary_btn = document.querySelector(".primary_btn");
buttonDeactivate(primary_btn);

document.getElementById("email").addEventListener("focusout", requireContent);
document.getElementById("password").addEventListener("focusout", requireContent);
document.getElementById("nickname")?.addEventListener("focusout", requireContent);
document.getElementById("password_check")?.addEventListener("focusout", (e) => {
  checkPassword(e);
  buttonActivate(e);
});
primary_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button clicked! Moving to ./login.html");
  window.location.href = "./login.html";
});
document.querySelectorAll(".visible_icon").forEach((item) => {
  item.addEventListener("click", visibleIconToggle);
});
