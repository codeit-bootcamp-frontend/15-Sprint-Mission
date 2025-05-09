import topImage from "@/assets/images/Img_home_top.png";
import { Link } from "react-router-dom";
import {
  backgroundStyle,
  bgDescriptionStyle,
  lineBreakStyle,
  h2Style,
} from "../styles/HomeCommonSection.styles.js";
import {
  topStyle,
  topSectionStyle,
  topImg,
  itemsBtn,
} from "../styles/HomeTopSection.styles.js";

function HomeTopSection() {
  return (
    <section css={[backgroundStyle, topSectionStyle]}>
      <div css={[bgDescriptionStyle, topStyle]}>
        <h2 css={h2Style}>
          <span css={lineBreakStyle}>일상의 모든 물건을 </span>
          거래해보세요
        </h2>
        <Link css={itemsBtn} to="/items">
          구경하러 가기
        </Link>
      </div>
      <img css={topImg} src={topImage} alt="메인 페이지 위쪽 이미지" />
    </section>
  );
}

export default HomeTopSection;
