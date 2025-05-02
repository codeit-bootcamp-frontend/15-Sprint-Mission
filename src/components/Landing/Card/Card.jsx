import styles from './Card.module.scss';

const Card = ({ imgSrc, alt, badge, title, description, reverse = false }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.cardReverse : ''}`}>
      <img src={imgSrc} alt={alt} className={styles.cardImg} />
      <div className={styles.cardInfo}>
        <div className={styles.badge}>{badge}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
