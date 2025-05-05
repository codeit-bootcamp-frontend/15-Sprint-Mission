import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/urls';
import styles from './Footer.module.scss';

const Footer = () => {
  const SOCIAL_LINKS = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com',
      icon: 'src/assets/icons/facebook.svg',
    },
    {
      name: 'twitter',
      href: 'https://www.twitter.com',
      icon: 'src/assets/icons/twitter.svg',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com',
      icon: 'src/assets/icons/youtube.svg',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com',
      icon: 'src/assets/icons/instagram.svg',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>&copy;codeit - 2024</div>
        <Link to={ROUTES.PRIVACY} className={styles.privacy}>
          Privacy Policy
        </Link>
        <Link to={ROUTES.FAQ} className={styles.faq}>
          FAQ
        </Link>
        <ul className={styles.socialMedia}>
          {SOCIAL_LINKS.map(({ name, href, icon }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
