import heartIcon from '@/assets/icons/heart_empty.svg';
import styles from './FavoriteBtn.module.scss';

const FavoriteBtn = ({
  favoriteCount,
  onClick,
  iconSizeClassName = '',
  fontSizeClassName = '',
  heartBoxClassName = '',
}) => {
  return (
    <button
      type="button"
      className={styles.favoriteCount}
      onClick={onClick} //TODO: 구현 예정
      aria-label="Add to favorite"
    >
      <div className={`${styles.favoriteBox} ${heartBoxClassName}`}>
        <img
          src={heartIcon}
          alt="Favorite"
          className={`${styles.heartIcon} ${iconSizeClassName}`}
        />
        <span className={`${styles.count} ${fontSizeClassName}`}>
          {favoriteCount}
        </span>
      </div>
    </button>
  );
};

export default FavoriteBtn;
