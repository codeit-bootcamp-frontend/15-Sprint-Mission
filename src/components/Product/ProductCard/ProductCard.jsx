import heartIcon from '@/assets/icons/heart_empty.svg';
import defaultProductImg from '@/assets/images/default_product.svg';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.images || defaultProductImg}
        alt={product.name}
        onError={(e) => {
          if (e.currentTarget.src !== defaultProductImg) {
            e.currentTarget.src = defaultProductImg;
          }
        }}
      />
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
        <div className={styles.favoriteCount}>
          <img src={heartIcon} alt="Favorite" className={styles.heartIcon} />
          <span className={styles.count}>{product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
