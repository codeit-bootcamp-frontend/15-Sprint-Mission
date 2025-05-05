import { Link } from 'react-router-dom';
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
          <Link to={buttonLink}>
            <button className={styles.viewButton}>{buttonText}</button>
          </Link>
        )}
      </div>
      <img src={imgSrc} alt={alt} className={styles.bannerImg} />
    </section>
  );
};

export default Banner;
