import { memo } from "react";
import InputField from "@components/InputField";

const ItemNameInputField = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputField
      type="text"
      id="name"
      label="상품명"
      name="name"
      placeholder="상품명을 입력해주세요"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default memo(ItemNameInputField);
