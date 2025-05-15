import styled from "@emotion/styled";
import BaseButton from "@/components/common/BaseButton";

const BUTTON_SIZE = {
  s: "1.2rem",
  m: "1.4rem",
  l: "1.6rem",
};

const BUTTON_TYPE = {
  primary: "background-color: var(--blue); color: var(--white);",
  cancel: "background-color: var(--white); var(--gray500);",
  danger: "background-color: red; color: var(--white);",
};

const TextButton = ({
  text,
  onClick,
  disabled = false,
  size = "m",
  type = "primary",
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={BUTTON_SIZE[size]}
      type={BUTTON_TYPE[type]}
    >
      {text}
    </StyledButton>
  );
};

export default TextButton;

const StyledButton = styled(BaseButton)`
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  font-size: ${(props) => props.size};
  ${(props) => props.type};

  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }
`;
