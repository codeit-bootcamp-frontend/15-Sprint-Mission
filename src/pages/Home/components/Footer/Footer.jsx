import { NavLink } from "react-router-dom";
import "./Footer.css";

import facebook from "../../../../assets/images/ic_facebook.svg";
import twitter from "../../../../assets/images/ic_twitter.svg";
import youtube from "../../../../assets/images/ic_youtube.svg";
import instagram from "../../../../assets/images/ic_instagram.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-side">©Codeit - 2024</div>
      <div className="center">
        <NavLink to="/privacy">Privacy Policy</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
      <div className="right-side">
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
