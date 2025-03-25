import { checkEmail, checkPassword, updateSubmitButtonState, visibilityToggle } from "./authEventManager.js";
import { email, password, inputs, visibilities } from "./authConstants.js";

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);

inputs.forEach((input) => {
    input.addEventListener('focusout', updateSubmitButtonState);
});

visibilities.forEach((button) => {
    button.addEventListener('click', () => visibilityToggle(button));
});