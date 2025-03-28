function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPasswordLength(password, minLength = 8) {
  return password.length >= minLength;
}

function isNotEmpty(value) {
  return value.trim() !== "";
}

function isMatching(value1, value2) {
  return value1 === value2;
}

function showError(inputElement, message) {
  const container = inputElement.closest(".input-item");

  const existingError = container.querySelector('[class*="text-error"]');
  if (existingError) {
    existingError.remove();
  }

  inputElement.classList.add("input-invalid");

  const errorSpan = document.createElement("span");
  errorSpan.className = "text-error text-sm block mt-2 font-semibold";
  errorSpan.textContent = message;

  if (inputElement.parentElement.classList.contains("input-wrapper")) {
    inputElement.parentElement.parentElement.appendChild(errorSpan);
  } else {
    container.appendChild(errorSpan);
  }
}

function removeError(inputElement) {
  const container = inputElement.closest(".input-item");
  const errorElement = container.querySelector('[class*="text-error"]');

  if (errorElement) {
    errorElement.remove();
  }

  inputElement.classList.remove("input-invalid");
}

function setButtonState(buttonElement, isEnabled) {
  if (isEnabled) {
    buttonElement.disabled = false;
    buttonElement.classList.remove("btn-disabled");
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add("btn-disabled");
  }
}
