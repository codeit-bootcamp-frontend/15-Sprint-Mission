import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #dfdfdf;
  background-color: #ffffff;
  position: fixed;
  z-index: 10;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 200px;

  background-color: #ffffff;

  @media (max-width: 1199px) {
    padding: 0 16px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const LinkHome = styled(Link)``;

const LogoBox = styled.img`
  width: 153px;
  height: 51px;
  display: flex;
  cursor: pointer;
`;

const BoardBox = styled.div`
  display: flex;
  height: 68px;
  font-size: 18px;
  padding: 0 15px;
  align-items: center;
  gap: 20px;
  margin-left: 40px;
  color: #4b5563;
  white-space: nowrap;
  cursor: pointer;
`;

const FreeBoard = styled.div``;

const MarketBoard = styled.div`
  color: #3692ff;
`;

const MyPage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;



const Header = () => {
  return (
    <Title>
      <InnerContainer>
        <LeftSection>
          <LinkHome to="/">
            <LogoBox src="/images/panda_market.png" alt="판다마켓 로고" />
          </LinkHome>
          <BoardBox>
            <FreeBoard>자유게시판</FreeBoard>
            <MarketBoard>중고마켓</MarketBoard>
          </BoardBox>
        </LeftSection>
        <MyPage src="/images/MyPage.png" />
      </InnerContainer>
    </Title>
  );
};

export default Header;
