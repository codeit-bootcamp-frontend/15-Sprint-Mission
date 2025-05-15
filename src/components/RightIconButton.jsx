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

const BUTTON_ROUNDED = {
  true: "100rem",
  false: "1rem",
};

const RightIconButton = ({
  text,
  onClick,
  icon,
  disabled = false,
  size = "m",
  type = "primary",
  rounded = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      size={BUTTON_SIZE[size]}
      type={BUTTON_TYPE[type]}
      rounded={BUTTON_ROUNDED[rounded]}
    >
      {text} {icon}
    </StyledButton>
  );
};

export default RightIconButton;

const StyledButton = styled(BaseButton)`
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: ${(props) => props.rounded};
  font-size: ${(props) => props.size};
  ${(props) => props.type};

  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }
`;
