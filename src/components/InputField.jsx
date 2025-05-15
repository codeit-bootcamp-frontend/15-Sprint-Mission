import { memo } from "react";
import styled from "@emotion/styled";
import BaseInput from "@/components/common/BaseInput";

const InputField = ({ id, label, value, onChange, errorMessage, ...props }) => {
  return (
    <InputSection>
      <Label htmlFor={id}>{label}</Label>
      <BaseInput id={id} value={value} onChange={onChange} {...props} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputSection>
  );
};

export default memo(InputField);

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
