import styled from "@emotion/styled";
import { media } from "@/Styles/media";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* 화면 전체 너비 */
  height: 60px;
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;

  z-index: 1000;
  ${media.tablet} {
    max-width: 696px;
    height: 51px;
  }
  ${media.mobile} {
    max-width: 343px;
  }
`;
const LogoBox = styled.div`
  width: 153px;
  height: 51px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  ${media.mobile} {
    width: 103px;
    height: 51px;
  }
`;

const LoginButton = styled.button`
  width: 128px;
  height: 48px;
  padding: 12px 23px;
  background-color: #3692ff;
  border-radius: 8px;
  color: #f3f4f6;

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  ${media.mobile} {
    width: 128px;
    height: 48px;
  }
`;
const Header = () => {
  const navigate = useNavigate();

  const handClick = () => {
    navigate("/LogIn");
  };
  return (
    <Title>
      <LogoBox>
        <img src="/images/panda_market.png" />
      </LogoBox>
      <LoginButton onClick={handClick}>로그인</LoginButton>
    </Title>
  );
};
export default Header;
