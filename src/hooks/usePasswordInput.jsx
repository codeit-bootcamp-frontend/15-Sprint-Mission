import { useState } from "react";

export function usePasswordInput(initial = "") {
  const [value, setValue] = useState(initial);
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);

  const hasError = touched && value.length < 8;

  return {
    value,
    setValue,
    touched,
    visible,
    hasError,
    toggleVisible: () => setVisible((v) => !v),
    onChange: (e) => setValue(e.target.value),
    onBlur: () => setTouched(true),
  };
}
