import styled from "@emotion/styled";

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

const RegisterButton = styled.div`
  color: #3692ff;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0%;
  vertical-align: middle;
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

const RegisterSection = () => {
  return (
    <Container>
      <BannerWrapper>
        <ItemImg src="/images/Img_home_03.png" />
        <TextBox>
          <RegisterButton>Register</RegisterButton>
          <CardTitle>
            판매를 원하는<br></br>상품을 등록하세요
          </CardTitle>
          <CardDescription>
            어떤 물건이든 판매하고 싶은 상품을<br></br>쉽게 등록하세요
          </CardDescription>
        </TextBox>
      </BannerWrapper>
    </Container>
  );
};
export default RegisterSection;
