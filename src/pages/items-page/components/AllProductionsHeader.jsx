import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "@assets/icons/search";
import DropDownIcon from "@assets/icons/dropdown";
import SortIcon from "@assets/icons/sort";
import { breakpoints } from "@constants/breakpoints";

const AllProductionsHeader = ({
  isMobile,
  sort,
  onSortChange,
  onPageChange,
}) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  return (
    <>
      {!isMobile && (
        <HeaderSection>
          <Title>전체 상품</Title>
          <ProductControlBar>
            <InputWrapper>
              <SearchIcon />
              <Input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
              ></Input>
            </InputWrapper>
            <Link to="/additem">
              <AddItemButton>상품 등록하기</AddItemButton>
            </Link>
            <SortDropDown>
              <DropDownButton onClick={() => setSelectIsOpen(!selectIsOpen)}>
                <p>{sort === "recent" ? "최신순" : "좋아요순"}</p>
                <DropDownIcon />
              </DropDownButton>
              {selectIsOpen && (
                <SortList>
                  <SortItem
                    onClick={() => {
                      onSortChange("recent");
                      onPageChange(1);
                      setSelectIsOpen(false);
                    }}
                  >
                    최신순
                  </SortItem>
                  <SortItem
                    onClick={() => {
                      onSortChange("favorite");
                      onPageChange(1);
                      setSelectIsOpen(false);
                    }}
                  >
                    좋아요순
                  </SortItem>
                </SortList>
              )}
            </SortDropDown>
          </ProductControlBar>
        </HeaderSection>
      )}

      {isMobile && (
        <>
          <HeaderSection>
            <Title>전체 상품</Title>
            <AddItemButton>상품 등록하기</AddItemButton>
          </HeaderSection>
          <HeaderSection>
            <ProductControlBar>
              <MobileInputWrapper>
                <SearchIcon />
                <Input
                  type="text"
                  placeholder="검색할 상품을 입력해주세요"
                ></Input>
              </MobileInputWrapper>
              <SortDropDown>
                <DropDownButton onClick={() => setSelectIsOpen(!selectIsOpen)}>
                  <SortIcon />
                </DropDownButton>
                {selectIsOpen && (
                  <SortList>
                    <SortItem
                      onClick={() => {
                        onSortChange("recent");
                        setSelectIsOpen(false);
                      }}
                    >
                      최신순
                    </SortItem>
                    <SortItem
                      onClick={() => {
                        onSortChange("favorite");
                        setSelectIsOpen(false);
                      }}
                    >
                      좋아요순
                    </SortItem>
                  </SortList>
                )}
              </SortDropDown>
            </ProductControlBar>
          </HeaderSection>
        </>
      )}
    </>
  );
};

export default AllProductionsHeader;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  // 모바일
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1rem;
  }
`;

const ProductControlBar = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;

  // 모바일
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  flex-shrink: 0;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.2rem;
  color: var(--gray900);
`;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;

  width: 25rem;
  padding: 0.4rem;
  background-color: var(--gray100);
  color: var(--gray400);
  border: none;
  border-radius: 0.7rem;
`;

const MobileInputWrapper = styled(InputWrapper)`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin: 0 0.3rem;
  background-color: inherit;
  border: none;
  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
`;

const AddItemButton = styled.button`
  flex-shrink: 0;
  padding: 0.8rem 1.5rem;
  border-radius: 0.7rem;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.7;
  }
`;

const SortDropDown = styled.div`
  position: relative;

  p {
    font-size: 1.4rem;
    margin-right: 1rem;
  }
`;

const DropDownButton = styled.button`
  width: 9rem;
  padding: 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  border: 1px solid var(--gray200);
  background-color: var(--white);
  cursor: pointer;

  // 모바일
  @media (max-width: ${breakpoints.tablet}) {
    width: fit-content;
  }
`;

const SortList = styled.ul`
  position: absolute;
  top: 4rem;
  right: 0;
  border-radius: 0.7rem;
  border: 1px solid var(--gray200);
  background-color: var(--white);
`;

const SortItem = styled.li`
  width: 10rem;
  padding: 0.8rem 1rem;
  text-align: center;
  list-style: none;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--gray100);
  }

  &:first-child {
    border-bottom: 1px solid var(--gray200);
  }
`;
