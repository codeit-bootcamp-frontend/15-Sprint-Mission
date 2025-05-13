import { useEffect } from "react";

export const useFormValidation = (
  itemName,
  itemDescription,
  itemPrice,
  itemTags,
  setBtnAvailable
) => {
  useEffect(() => {
    const isValid =
      itemName.trim() !== "" &&
      itemDescription.trim() !== "" &&
      itemPrice.trim() !== "" &&
      itemTags.size > 0;

    setBtnAvailable(isValid);
  }, [itemName, itemDescription, itemPrice, itemTags, setBtnAvailable]);
};
