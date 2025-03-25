import { checkEmail, checkPassword, updateSubmitButtonState, checkNickname, checkPasswordConfirm, visibilityToggle} from "./authEventManager.js";
import { email, password, inputs, nickName, passwordConfirm, visibilities } from "./authConstants.js";

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
nickName.addEventListener('focusout', checkNickname);
passwordConfirm.addEventListener('focusout', checkPasswordConfirm);

inputs.forEach((input) => {
    input.addEventListener('focusout', updateSubmitButtonState);
});

visibilities.forEach((button) => {
    button.addEventListener('click', () => visibilityToggle(button));
});


