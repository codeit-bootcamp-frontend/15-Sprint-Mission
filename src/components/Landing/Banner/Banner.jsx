import { Link } from 'react-router-dom';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './Banner.module.scss';

const Banner = ({
  title,
  imgSrc,
  alt,
  buttonText,
  buttonLink,
  isBottom = false,
}) => {
  return (
    <section className={`${styles.banner} ${isBottom ? styles.bottom : ''}`}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>{title}</h2>
        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className={`${buttonStyles.primary} ${styles.viewButton}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
      <img src={imgSrc} alt={alt} className={styles.bannerImg} />
    </section>
  );
};

export default Banner;
