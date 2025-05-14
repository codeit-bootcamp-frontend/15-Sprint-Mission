import { useState } from "react";

export function useEmailValidator(initial = "") {
  const [email, setEmail] = useState(initial);
  const [touched, setTouched] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasError = touched && !isValid;

  return {
    email,
    setEmail,
    hasError,
    isValid,
    onChange: (e) => setEmail(e.target.value),
    onBlur: () => setTouched(true),
  };
}
