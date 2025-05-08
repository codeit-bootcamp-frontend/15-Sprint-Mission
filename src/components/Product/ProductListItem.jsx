import styles from './styles/ProductListItem.module.css';
import { Link } from 'react-router-dom';
import defaultImage from '/images/common/img_default.png';

const ProductListItem = ({ id, title, image, price, favorite }) => {
  const handleFavorite = () => {
    console.log('favorite');
  };

  return (
    <li>
      <Link to={`/items/${id}`} className={styles.productListItem}>
        <div className={styles.productListItemImage}>
          <img 
            src={image?.startsWith('http') ? image : defaultImage} 
            alt={title} 
            onError={(e) => (e.target.src = defaultImage)} 
          />
        </div>
        <div className={styles.productListItemContent}>
          <div className={styles.productListItemTitle}>{title}</div>
          <div className={styles.productListItemPrice}>{price.toLocaleString() + '원'}</div>
        </div>
      </Link>
      <button type='button' onClick={handleFavorite} className={styles.productListItemFavorite}>
        <img src='/images/common/ic_heart.svg' alt='favorite' />
        {favorite}
      </button>
    </li>
  );
};

export default ProductListItem;
