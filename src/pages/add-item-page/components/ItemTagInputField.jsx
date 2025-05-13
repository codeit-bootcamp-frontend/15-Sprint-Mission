import { memo } from "react";
import InputField from "@components/InputField";

const ItemTagInputField = ({ value, onChange, onKeyUp }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputField
      type="text"
      id="tag"
      label="태그"
      name="tag"
      placeholder="태그를 입력해주세요"
      value={value}
      onChange={handleInputChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default memo(ItemTagInputField);
