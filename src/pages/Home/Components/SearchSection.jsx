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
  text-align: right;
`;

const SearchButton = styled.div`
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

const SearchSection = () => {
  return (
    <Container>
      <BannerWrapper>
        <TextBox>
          <SearchButton>Search</SearchButton>
          <CardTitle>
            구매를 원하<br></br>상품을 검색하세요
          </CardTitle>
          <CardDescription>
            구매하고 싶은 물픔은 검색해서<br></br>쉽게 찾아보세요
          </CardDescription>
        </TextBox>
        <ItemImg src="/images/Img_home_02.png" />
      </BannerWrapper>
    </Container>
  );
};
export default SearchSection;
