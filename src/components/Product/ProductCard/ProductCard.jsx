import heartIcon from '@/assets/icons/heart_empty.svg';
import defaultProductImg from '@/assets/images/default_product.svg';
import styles from './ProductCard.module.scss';

const ProductCard = ({ images, name, price, favoriteCount }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={images || defaultProductImg}
        alt={name}
        onError={(e) => {
          if (e.currentTarget.src !== defaultProductImg) {
            e.currentTarget.src = defaultProductImg;
          }
        }}
      />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>
          {price === 0
            ? '나눔'
            : typeof price === 'number'
              ? `${price.toLocaleString()}원`
              : '가격 미정'}
        </p>
        <div className={styles.favoriteCount}>
          <img src={heartIcon} alt="Favorite" className={styles.heartIcon} />
          <span className={styles.count}>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
