import { memo } from "react";
import styled from "@emotion/styled";
import BaseTextarea from "@components/BaseTextarea";

const TextareaField = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  ...props
}) => {
  return (
    <InputSection>
      <Label htmlFor={id}>{label}</Label>
      <BaseTextarea id={id} value={value} onChange={onChange} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputSection>
  );
};

export default memo(TextareaField);

const InputSection = styled.div`
  margin: 2rem 0;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 3.2rem;
  color: var(--gray900);
  font-size: 1.8rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;
