import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 540px;
  margin-top: 80px;
  background-color: #cfe5ff;
  align-items: end;
  justify-content: center;
`;

const BannerWrapper = styled.div`
  display: flex;
  max-width: 1110px;
  height: auto;
  width: 100%;
  align-items: center;
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

const PandaImg = styled.img`
  display: flex;
  width: 746px;
  height: 340px;
  object-fit: contain;
`;

const BottomSection = () => {
  return (
    <Container>
      <BannerWrapper>
        <TextBox>
          <Text>
            믿을 수 있는<br></br>판다마켓 중고거래
          </Text>
        </TextBox>
        <PandaImg src="/images/Img_home_bottom.png" />
      </BannerWrapper>
    </Container>
  );
};
export default BottomSection;
