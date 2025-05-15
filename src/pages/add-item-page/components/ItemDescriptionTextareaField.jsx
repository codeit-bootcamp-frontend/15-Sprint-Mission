import { memo, useRef } from "react";
import TextareaField from "@components/TextareaField";

const ItemDescriptionInputField = ({ value, onChange }) => {
  const ref = useRef(null);

  const handleInputChange = (event) => {
    const textarea = ref.current; // 사용자 입력에 따라 textarea 높이 조절
    textarea.style.height = "auto"; // 지워졌을때 다시 크기가 줄어들기
    textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight만큼 다시 설정

    onChange(event.target.value);
  };

  return (
    <TextareaField
      ref={ref}
      id="description"
      label="상품 소개"
      name="description"
      placeholder="상품 소개를 입력해주세요"
      value={value}
      onChange={handleInputChange}
      styleType="addItem"
    />
  );
};

export default memo(ItemDescriptionInputField);
