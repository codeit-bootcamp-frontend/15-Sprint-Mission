import pandaMarket from "../../image/pandaMarket.svg";
import pandaFace from "../../image/pandaFace.svg";
import blankProfile from "../../image/blankProfile.svg";
import styles from "./Nav.module.scss";
import { useLocation, useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate();
  const locate = useLocation();
  const location = locate.pathname;
  return (
    <nav>
      <div className={styles["nav--left"]}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img
            src={pandaFace}
            className={styles.pandaface}
            alt="panda face"
          ></img>
          <img
            src={pandaMarket}
            className={styles.pandamarket}
            alt="panda market"
          ></img>
        </div>
        <div className={styles.menu}>
          <span>자유게시판</span>
          <span
            onClick={() => navigate("/items")}
            style={location === "/items" ? { color: "#3692FF" } : {}}
          >
            중고마켓
          </span>
        </div>
      </div>

      <img
        className={styles.profile}
        src={blankProfile}
        alt="blank profile"
      ></img>
    </nav>
  );
}
