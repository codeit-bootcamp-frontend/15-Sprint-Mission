import styled from "@emotion/styled";
import DeleteIcon from "@assets/icons/delete";

const BUTTON_SIZE = {
  s: "1.6rem",
  m: "2rem",
  l: "2.4rem",
};

const DeleteButton = ({ onClick, size = "s" }) => {
  return (
    <DeleteButtonWrapper onClick={onClick} size={BUTTON_SIZE[size]}>
      <DeleteIcon />
    </DeleteButtonWrapper>
  );
};

export default DeleteButton;

const DeleteButtonWrapper = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: var(--gray300);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
