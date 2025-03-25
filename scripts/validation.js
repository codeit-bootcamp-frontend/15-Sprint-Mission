import { VALIDATION_RULES, BLANK, FIELD_IDS } from "./constants.js";
import { updateError } from "./accountValidation.js";
import { account } from "./models/account.js";

export const getValidationMessage = (id, value) => {
  if (isBlank(value)) {
    return VALIDATION_RULES[id].emptyMessage;
  }
  if (
    (id === FIELD_IDS.email ||
      id === FIELD_IDS.password ||
      id === FIELD_IDS.passwordConfirm) &&
    isValidRegex(id, value)
  ) {
    return VALIDATION_RULES[id].patternMismatchMessage;
  }
  if (id === FIELD_IDS.passwordConfirm && isValidPasswordConfirm(value)) {
    return VALIDATION_RULES[FIELD_IDS.passwordConfirm].passwordMismatchMessage;
  }

  return null;
};

const isBlank = (value) => {
  return value === BLANK;
};

const isValidRegex = (id, value) => {
  return !value.match(VALIDATION_RULES[id]?.regex);
};

const isValidPasswordConfirm = (value) => {
  return value !== account[FIELD_IDS.password];
};

export const revalidatePasswordConfirm = () => {
  const hasErrorPasswordConfirm = isValidPasswordConfirm(
    account[FIELD_IDS.passwordConfirm]
  );
  const errorMessage =
    hasErrorPasswordConfirm &&
    VALIDATION_RULES[FIELD_IDS.passwordConfirm].passwordMismatchMessage;

  updateError(
    document.querySelector(`#${FIELD_IDS.passwordConfirm}`),
    errorMessage
  );
};
