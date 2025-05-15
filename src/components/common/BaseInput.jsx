import styled from "@emotion/styled";

const BaseInput = ({ type = "text", value, onChange, ...props }) => {
  return <Input type={type} value={value} onChange={onChange} {...props} />;
};

export default BaseInput;

const Input = styled.input`
  width: 100%;
  padding: 1.4rem 2.4rem;
  background-color: var(--gray100);
  border-radius: 1.2rem;
  border: 2px solid var(--gray100);
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;
