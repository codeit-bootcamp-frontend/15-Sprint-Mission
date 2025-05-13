import { memo } from "react";
import InputField from "@components/InputField";

const ItemPriceInputField = ({ value, onChange }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^\d]/g, "");
    onChange(numericValue);
  };

  return (
    <InputField
      type="text"
      min={0}
      id="price"
      label="판매 가격"
      name="price"
      placeholder="판매 가격을 입력해주세요"
      value={formatNumber(value)}
      onChange={handleInputChange}
    />
  );
};

export default memo(ItemPriceInputField);
