import { useRef } from "react";

export const useAutoResizeTextarea = (onChange) => {
  const ref = useRef(null);

  const handleChange = (event) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    onChange(event.target.value);
  };

  return { ref, handleChange };
};
