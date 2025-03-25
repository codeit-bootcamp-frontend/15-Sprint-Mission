import { BLANK, CSS_CLASSES, DISPLAY_STATES, FIELD_IDS } from "./constants.js";
import {
  getValidationMessage,
  revalidatePasswordConfirm,
} from "./validation.js";
import { account } from "./models/account.js";

const inputs = document.querySelectorAll(`.${CSS_CLASSES.inputAccount}`);
const submitBtn = document.querySelector(`.${CSS_CLASSES.btnSubmit}`);
const inputErrorStates = {};

const updateSubmitButtonState = (inputErrorStates) => {
  const allPass =
    Object.values(inputErrorStates).filter((value) => value).length ===
    inputs.length;
  submitBtn.disabled = !allPass;
};

export const updateError = (input, message) => {
  const errorElement = input.parentNode.querySelector(
    `.${CSS_CLASSES.msgError}`
  );
  const hasError = Boolean(message);
  inputErrorStates[input.id] = !hasError;

  input.classList.toggle(CSS_CLASSES.error, hasError);
  errorElement.textContent = hasError ? message : BLANK;
  errorElement.style.display = hasError
    ? DISPLAY_STATES.block
    : DISPLAY_STATES.none;
};

const handleBlur = (event) => {
  account[event.target.id] = event.target.value;
  const input = event.target;

  // 비밀번호 확인에 값이 있을때 비밀번호가 변경되면, 비밀번호 확인을 재검사
  if (
    input.id === FIELD_IDS.password &&
    account[FIELD_IDS.passwordConfirm] !== BLANK
  ) {
    revalidatePasswordConfirm();
  }

  const errorMessage = getValidationMessage(input.id, input.value);
  updateError(input, errorMessage);
  updateSubmitButtonState(inputErrorStates);
};

inputs.forEach((input) => {
  input.addEventListener("blur", handleBlur);
});
