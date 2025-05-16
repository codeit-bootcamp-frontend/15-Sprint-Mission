import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 540px;
  background-color: #cfe5ff;
  align-items: end;
  justify-content: center;
`;

const BannerWrapper = styled.div`
  display: flex;
  max-width: 1110px;
  height: 340px;
  margin: 0 auto;
  width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 357px;
  height: 260px;
  padding-bottom: 32px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 40px;
`;
const CTAButton = styled.div`
  padding: 16px 124px;
  background-color: #3692ff;
  color: #f9fafb;
  cursor: pointer;

  display: flex;
  gap: 10px;
  border-radius: 40px;
`;
const PandaImg = styled.img`
  display: flex;
  width: 746px;
  height: 340px;
  object-fit: contain;
`;
const BannerSection = () => {
  return (
    <Container>
      <BannerWrapper>
        <TextBox>
          <Text>
            일상의 모든 물건을<br></br> 거래해보세요
          </Text>
          <CTAButton>구경하러 가기</CTAButton>
        </TextBox>
        <PandaImg src="/images/Img_home_top.png" />
      </BannerWrapper>
    </Container>
  );
};
export default BannerSection;
