import { useState } from "react";
import styled from "@emotion/styled";
import BaseButton from "@/components/common/BaseButton";
import MoreIcon from "@assets/icons/more";

const DROPDOWN_LIST_POSITION = {
  left: "right: 0; left: auto;",
  right: "left: 0; right: auto;",
};

const DropdownMenu = ({
  dropdownItem1,
  onDropdownItem1Click,
  dropdownItem2,
  onDropdownItem2Click,
  position = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleDropdownItem1Click = () => {
    onDropdownItem1Click();
    setIsOpen(false);
  };

  const handleDropdownItem2Click = () => {
    onDropdownItem2Click();
    setIsOpen(false);
  };

  return (
    <DropdownMenuContainer>
      <StyledButton onClick={handleToggle}>
        <MoreIcon />
      </StyledButton>

      {isOpen && (
        <DropdownList listPosition={DROPDOWN_LIST_POSITION[position]}>
          <DropdownItem onClick={handleDropdownItem1Click}>
            {dropdownItem1}
          </DropdownItem>
          <DropdownItem onClick={handleDropdownItem2Click}>
            {dropdownItem2}
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;

const DropdownMenuContainer = styled.div`
  position: relative;
`;

const StyledButton = styled(BaseButton)`
  width: 2.4rem;
  height: 2.4rem;
`;

const DropdownList = styled.ul`
  width: fit-content;
  position: absolute;
  top: 3rem;
  ${(props) => props.listPosition};
  border-radius: 0.7rem;
  border: 1px solid var(--gray200);
  background-color: var(--white);
`;

const DropdownItem = styled.li`
  width: 10rem;
  padding: 0.8rem 1rem;
  text-align: center;
  list-style: none;
  font-size: 1.4rem;
  color: var(--gray500);
  cursor: pointer;

  &:hover {
    background-color: var(--gray100);
  }

  &:first-of-type {
    border-bottom: 1px solid var(--gray200);
  }
`;
