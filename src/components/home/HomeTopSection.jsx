import classNames from "classnames";
import styles from "../../styles/components/home/HomeTopSection.module.scss";
import common from "../../styles/components/home/HomeCommonSection.module.scss";
import topImage from "../../assets/images/Img_home_top.png";
import { Link } from "react-router-dom";

function HomeTopSection() {
  return (
    <section className={classNames(common.background, styles.topSection)}>
      <div className={classNames(common.bgDescription, styles.top)}>
        <h2>
          <span className={common.lineBreak}>일상의 모든 물건을</span>
          거래해보세요
        </h2>
        <Link className={styles.itemsBtn} to="/items">
          구경하러 가기
        </Link>
      </div>
      <img
        className={styles.topImg}
        src={topImage}
        alt="메인 페이지 위쪽 이미지"
      />
    </section>
  );
}

export default HomeTopSection;
