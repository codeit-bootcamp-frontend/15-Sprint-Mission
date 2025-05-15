import styled from "@emotion/styled";

const BaseButton = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;

const Button = styled.button`
  border: none;
  background: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;
