import { useNavigate } from 'react-router-dom';
import { useUser, useToast } from '@/contexts';
import { deleteProduct } from '@/api/product';
import { FavoriteBtn, VerticalKebabDrop } from '@/components/common/Buttons';
import { isoDate } from '@/utils/format';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import defaultProfileImg from '@/assets/images/default_profile.svg';
import tagStyles from '@/styles/helpers/tagHelpers.module.scss';
import commonStyles from '@/styles/helpers/commonHelpers.module.scss';
import styles from './ProductInfo.module.scss';

const ProductInfo = ({
  productId,
  images,
  name,
  description,
  price,
  tags = [],
  favoriteCount,
  ownerNickname,
  updatedAt,
}) => {
  const currentUser = useUser(); // 지금 로그인한 사용자
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(ROUTES.EDIT_ITEM(productId));
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('정말 삭제하시겠어요?');
    if (!confirmed) return;

    const result = await deleteProduct({ productId, showToast });

    if (result) {
      showToast('상품이 삭제되었어요.', 'success');
      navigate(ROUTES.LIST);
    }
  };

  const handleSelect = (value) => {
    if (value === 'edit') handleEdit();
    if (value === 'delete') handleDelete();
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img src={images?.[0]} alt={name} />
      </div>
      <div className={styles.productOverview}>
        <div className={styles.productInfo}>
          <div className={styles.infoHeader}>
            <div className={styles.titleBar}>
              <h2>{name}</h2>
              <VerticalKebabDrop onSelect={handleSelect} />
            </div>
            <p className={styles.price}>{price?.toLocaleString()}원</p>
            <div className={commonStyles.horizontalLine} />
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
        <div className={styles.productPostInfo}>
          <div className={styles.writerInfo}>
            <img
              src={defaultProfileImg}
              // src={currentUser?.image || defaultProfileImg}
              alt="Writer Profile Image"
            />
            <div className={styles.nicknameAndDate}>
              <div className={styles.nickname}>{ownerNickname}</div>
              <div className={styles.date}>{isoDate(updatedAt)}</div>
            </div>
          </div>
          <div className={styles.favoriteContainer}>
            <FavoriteBtn
              favoriteCount={favoriteCount}
              iconSizeClassName={styles.favoriteIconSize}
              fontSizeClassName={styles.favoriteCountFontSize}
              heartBoxClassName={styles.favoriteBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
