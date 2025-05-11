import { VerticalKebabDrop } from '@/components/common/Buttons';
import styles from './ProductInfo.module.scss';

const ProductInfo = ({
  images,
  name,
  description,
  price,
  tags,
  favoriteCount,
  onMenuSelect,
}) => {
  const handleMenuSelect = (value) => {
    if (onMenuSelect) onMenuSelect(value);
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.image}>
        <img src={images?.[0]} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <div className={styles.titleBar}>
            <h1>{name}</h1>
            <VerticalKebabDrop onSelect={handleMenuSelect} />
          </div>
          <p className={styles.price}>{price.toLocaleString()}원</p>
        </div>
        <div className={styles.horizontalLine} />

        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
