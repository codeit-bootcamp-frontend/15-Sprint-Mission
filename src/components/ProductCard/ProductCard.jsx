import styles from "./ProductCard.module.css";
import heartIcon from "../../assets/icon/heart-icon.svg";

const ProductCard = ({ imageUrl, title, price, likes, variant }) => {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={title}
        className={variant === "best" ? styles.bestImg : styles.allImg}
      />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price.toLocaleString()}원</p>
        <p className={styles.likes}>
          <img src={heartIcon} alt="좋아요" className={styles.icon} />
          <span className={styles.count}>{likes}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
