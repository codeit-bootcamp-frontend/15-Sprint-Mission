import { memo } from "react";
import styled from "@emotion/styled";

const HeaderSection = ({ btnAvailable }) => {
  return (
    <HeaderSectionContainer>
      <Title>상품 등록하기</Title>
      <SubmitBtn disabled={!btnAvailable}>등록</SubmitBtn>
    </HeaderSectionContainer>
  );
};

export default memo(HeaderSection);

const HeaderSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray100);
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.2rem;
  color: var(--gray900);
`;

const SubmitBtn = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 1.2rem;
  border: none;
  background-color: var(--blue);
  font-size: 1.6rem;
  color: var(--white);

  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }
`;
