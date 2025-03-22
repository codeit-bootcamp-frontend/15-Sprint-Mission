const ERRORMESSAGE = {
  wrongEmail: "잘못된 이메일 형식입니다",
  wrongPassword: "비밀번호를 8자 이상 입력해주세요",
  emailIsEmpty: "이메일을 입력해주세요",
  passwordIsEmpty: "비밀번호를 입력해주세요",
  nicknameIsEmpty: "닉네임을 입력해주세요",
  passwordIsNotSame: "비밀번호가 일치하지 않습니다.",
};

const requireContent = (e) => {
  console.log("requireContent called for:", e.target.id);
  let content = e.target.value;
  let emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  if (content) {
    if (emailRegex.test(content) === false && e.target.id == "email") {
      createNewMessage(ERRORMESSAGE.wrongEmail, e.target);
    } else if (e.target.nextElementSibling?.tagName == "P") {
      e.target.style = "border: none";
      e.target.nextElementSibling.remove();
      document.querySelector(".visible_icon").style = "bottom: 1.4rem;";
    }
    if (e.target.id == "password" && content.length < 8) {
      createNewMessage(ERRORMESSAGE.wrongPassword, e.target);
      document.querySelector(".visible_icon").style = "bottom: 6.9rem;";
    }
  } else {
    let messageContent;
    switch (e.target.id) {
      case "email":
        messageContent = ERRORMESSAGE.emailIsEmpty;
        break;
      case "password":
        messageContent = ERRORMESSAGE.passwordIsEmpty;
      case "nickname":
        messageContent = ERRORMESSAGE.nicknameIsEmpty;
    }
    createNewMessage(messageContent, e.target);
  }
};

const createNewMessage = (messageContent, target) => {
  target.style = "border: 1px solid red";
  if (target.nextElementSibling?.tagName == "P") {
    target.nextElementSibling.innerText = messageContent;
  } else {
    let pTag = document.createElement("p");
    pTag.textContent = messageContent;
    pTag.classList.add("plzInputText");
    target.after(pTag);
  }
};

const buttonDeactivate = (tag) => {
  tag.disabled = true;
  tag.style = "background-color: var(--gray400)";
};

const buttonActivate = (e) => {
  const nodeList = document.getElementsByClassName("plzInputText");
  const inputValue = [...document.getElementsByTagName("input")];
  let inputIsEmpty = inputValue.every((item) => item.value === "");
  console.log("inputIsEmpty:", inputIsEmpty, inputValue);
  if (nodeList.length !== 0 && !inputIsEmpty) {
  } else {
    let submit_btn = document.querySelector(".primary_btn");
    submit_btn.disabled = false;
    submit_btn.style = "background-color: var(--blue)";
  }
};

const checkPassword = (e) => {
  let password = document.getElementById("password");
  let passwordCheck = document.getElementById("password_check");
  if (password && passwordCheck) {
    if (password.value !== passwordCheck.value) {
      console.log("pw is not same");
      console.log(password.value, passwordCheck.value);
      createNewMessage(ERRORMESSAGE.passwordIsNotSame, e.target);
    } else if (e.target.nextElementSibling?.tagName === "P") {
      e.target.style = "border: none";
      e.target.nextElementSibling.remove();
    }
  }
};

export { requireContent, createNewMessage, buttonDeactivate, buttonActivate, checkPassword };
