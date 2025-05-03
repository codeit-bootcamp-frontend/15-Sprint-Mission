import defaultProductImg from '@/assets/images/default_product.svg';
import heartIcon from '@/assets/images/heart_empty.svg';
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
        <h5>{product.name}</h5>
        <p>{product.price.toLocaleString()}원</p>
        <div className={styles.favoriteCount}>
          <img src={heartIcon} alt="좋아요" className={styles.heartIcon} />
          <span className={styles.count}>{product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
