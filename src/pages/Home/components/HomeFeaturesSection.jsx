import hotItemImage from "/images/Img_home_01.png";
import searchFeatureImage from "/images/Img_home_02.png";
import registerFeatureImage from "/images/Img_home_03.png";
import {
  mainContainer,
  container,
  secondContainer,
  containerImg,
  firstDescription,
  secondDescription,
  thirdDescription,
  featuresLineBreakStyle,
} from "../styles/HomeFeaturesSection.styles";

function HomeFeaturesSection() {
  return (
    <section css={mainContainer}>
      <article css={container}>
        <img
          css={containerImg}
          src={hotItemImage}
          alt="인기 상품 확인 이미지"
        />
        <div css={firstDescription}>
          <h4>Hot item</h4>
          <h2>
            <span css={featuresLineBreakStyle}>인기 상품을</span> 확인 해보세요
          </h2>
          <h3>
            가장 HOT한 중고거래 물품을
            <br /> 판다마켓에서 확인해보세요
          </h3>
        </div>
      </article>
      <article css={secondContainer}>
        <div css={secondDescription}>
          <h4>Search</h4>
          <h2>
            <span css={featuresLineBreakStyle}>구매를 원하는</span> 상품을
            검색하세요
          </h2>
          <h3>
            구매하고 싶은 물품은 검색해서
            <br /> 쉽게 찾아보세요
          </h3>
        </div>
        <img
          css={containerImg}
          src={searchFeatureImage}
          alt="물품 검색 이미지"
        />
      </article>
      <article css={container}>
        <img
          css={containerImg}
          src={registerFeatureImage}
          alt="물품 판매 이미지"
        />
        <div css={thirdDescription}>
          <h4>Register</h4>
          <h2>
            <span css={featuresLineBreakStyle}>판매를 원하는</span> 상품을
            등록하세요
          </h2>
          <h3>
            어떤 물건이든 판매하고 싶은 상품을
            <br /> 쉽게 등록하세요
          </h3>
        </div>
      </article>
    </section>
  );
}

export default HomeFeaturesSection;
