import { useEffect } from "react";

export const useFormValidation = (comment, setBtnAvailable) => {
  useEffect(() => {
    const isValid = comment.trim() !== "";

    setBtnAvailable(isValid);
  }, [comment, setBtnAvailable]);
};
