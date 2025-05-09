import bottomImg from "@/assets/images/Img_home_bottom.png";
import {
  backgroundStyle,
  bgDescriptionStyle,
  h2Style,
} from "../styles/HomeCommonSection.styles.js";

import {
  bottomSectionStyle,
  bottomStyle,
  bottomImgStyle,
} from "../styles/HomeBottomSection.styles.js";

function HomeBottomSection() {
  return (
    <section css={[backgroundStyle, bottomSectionStyle]}>
      <div css={[bgDescriptionStyle, bottomStyle]}>
        <h2 css={h2Style}>
          믿을 수 있는
          <br /> 판다마켓 중고거래
        </h2>
      </div>
      <img
        css={bottomImgStyle}
        src={bottomImg}
        alt="메인 페이지 아래쪽 이미지"
      />
    </section>
  );
}

export default HomeBottomSection;
