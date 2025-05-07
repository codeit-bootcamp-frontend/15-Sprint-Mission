import { Link } from "react-router-dom";
import styles from "../styles/HomeFooter.module.scss";
import faceBook from "@/assets/icons/ic_facebook.png";
import twitter from "@/assets/icons/ic_twitter.png";
import youtube from "@/assets/icons/ic_youtube.png";
import instagram from "@/assets/icons/ic_instagram.png";

function HomeFooter() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <h5>@codeit-2024</h5>
        <div className={styles.privacyFAQ}>
          <Link to="/privacy.html" className={styles.policyLinks}>
            Privacy Policy
          </Link>
          <Link to="/faq.html" className={styles.policyLinks}>
            FAQ
          </Link>
        </div>
        <ul className={styles.icons}>
          <li>
            <a href="https://www.facebook.com/">
              <img src={faceBook} alt="페이스북 아이콘" />
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <img src={twitter} alt="트위터 아이콘" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="유튜브 아이콘" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="인스타 아이콘" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default HomeFooter;
