import { VerticalKebabDrop } from '@/components/common/Buttons';
import tagStyles from '@/styles/helpers/tagHelpers.module.scss';
import styles from './ProductInfo.module.scss';

const ProductInfo = ({
  images,
  name,
  description,
  price,
  tags,
  favoriteCount,
  onMenuSelect, //TODO: 구현 예정
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
            <h2>{name}</h2>
            <VerticalKebabDrop />
          </div>
          <p className={styles.price}>{price.toLocaleString()}원</p>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.infoLabel}>
          <h3>상품 소개</h3>
          <p>{description}</p>
        </div>
        <div className={styles.infoLabel}>
          <h3>상품 태그</h3>
          <div className={tagStyles.tagList}>
            {tags.map((tag, index) => (
              <span key={index} className={tagStyles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
