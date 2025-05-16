import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 540px;
  background-color: #ffffff;
  align-items: end;
  justify-content: center;
`;

const BannerWrapper = styled.div`
  display: flex;
  gap: 64px;
  border-radius: 12px;
  max-width: 988px;
  height: 444px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
`;
const ItemImg = styled.img`
  display: flex;
  width: 579px;
  height: 444px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 357px;
  height: 260px;
  padding-bottom: 32px;
`;

const ItemButton = styled.div`
  color: #3692ff;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0%;
  vertical-align: middle;
  cursor: pointer;
`;
const CardTitle = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  letter-spacing: 2%;
  vertical-align: middle;
  color: #374151;
`;
const CardDescription = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #374151;
`;
const HotItemSection = () => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/Items");
  };
  return (
    <Container>
      <BannerWrapper>
        <ItemImg src="/images/Img_home_01.png" />
        <TextBox>
          <ItemButton onClick={handleItemClick}>Hot Item</ItemButton>
          <CardTitle>
            인기 상품을<br></br> 확인해보세요
          </CardTitle>
          <CardDescription>
            가장 Hot한 중고거래 물품을<br></br>
            판다마켓에서 확인해 보세요
          </CardDescription>
        </TextBox>
      </BannerWrapper>
    </Container>
  );
};
export default HotItemSection;
