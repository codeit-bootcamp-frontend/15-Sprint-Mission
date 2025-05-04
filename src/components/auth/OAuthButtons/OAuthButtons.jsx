import googleLogo from '@/assets/icons/google_logo.svg';
import kakaoLogo from '@/assets/icons/kakao_logo.svg';
import styles from './OAuthButtons.module.scss';

const OAuthButtons = () => {
  return (
    <div className={styles.oauthContainer}>
      <p>간편 로그인하기</p>
      <ul className={styles.oauthSite}>
        <li>
          <a href="https://www.google.com" className={styles.oauthButton}>
            <img src={googleLogo} alt="google signin button" />
          </a>
        </li>
        <li>
          <a href="https://www.kakaocorp.com" className={styles.oauthButton}>
            <img src={kakaoLogo} alt="kakao signin button" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OAuthButtons;
