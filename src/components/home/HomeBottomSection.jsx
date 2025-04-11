import common from "../../styles/components/home/HomeCommonSection.module.scss";
import styles from "../../styles/components/home/HomeBottomSection.module.scss";
import bottomImg from "../../assets/images/Img_home_bottom.png";
import classNames from "classnames";

function HomeBottomSection() {
  return (
    <section className={classNames(common.background, styles.bottomSection)}>
      <div className={classNames(common.bgDescription, styles.bottom)}>
        <h2>
          믿을 수 있는
          <br /> 판다마켓 중고거래
        </h2>
      </div>
      <img
        className={styles.bottomImg}
        src={bottomImg}
        alt="메인 페이지 아래쪽 이미지"
      />
    </section>
  );
}

export default HomeBottomSection;
