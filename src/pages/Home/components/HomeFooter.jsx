import { Link } from "react-router-dom";
import faceBook from "/icons/ic_facebook.png";
import twitter from "/icons/ic_twitter.png";
import youtube from "/icons/ic_youtube.png";
import instagram from "/icons/ic_instagram.png";
import {
  footer,
  footerContainer,
  heading,
  privacyFAQ,
  policyLinks,
  icons,
  iconImg,
} from "../styles/HomeFooter.styles";

function HomeFooter() {
  return (
    <footer css={footer}>
      <div css={footerContainer}>
        <h5 css={heading}>@codeit-2024</h5>
        <div css={privacyFAQ}>
          <Link to="/privacy.html" css={policyLinks}>
            Privacy Policy
          </Link>
          <Link to="/faq.html" css={policyLinks}>
            FAQ
          </Link>
        </div>
        <ul css={icons}>
          <li>
            <a href="https://www.facebook.com/">
              <img src={faceBook} alt="페이스북 아이콘" css={iconImg} />
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <img src={twitter} alt="트위터 아이콘" css={iconImg} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="유튜브 아이콘" css={iconImg} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="인스타 아이콘" css={iconImg} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default HomeFooter;
