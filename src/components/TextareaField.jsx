import { memo } from "react";
import styled from "@emotion/styled";
import BaseTextarea from "@/components/common/BaseTextarea";

// styleType : default | addItem
const TextareaField = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  styleType = "default",
  ...props
}) => {
  const { InputSection, Label } =
    textareaStyleMap[styleType] || textareaStyleMap.default;

  return (
    <InputSection>
      <Label htmlFor={id}>{label}</Label>
      <BaseTextarea id={id} value={value} onChange={onChange} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputSection>
  );
};

export default memo(TextareaField);

const LargeInputSection = styled.div`
  margin: 2rem 0;
`;

const InputSection = styled.div`
  margin: 1rem 0;
`;

const BoldLabel = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 3.2rem;
  color: var(--gray900);
  font-size: 1.8rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  line-height: 2.6rem;
  color: var(--gray900);
  font-size: 1.6rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

// styleType에 따른 스타일 매핑
const textareaStyleMap = {
  default: {
    InputSection: InputSection,
    Label: Label,
  },
  addItem: {
    InputSection: LargeInputSection,
    Label: BoldLabel,
  },
};
