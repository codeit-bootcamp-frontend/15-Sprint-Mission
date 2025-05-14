import { useState } from 'react';
import styles from '../styles/ItemDetailTop.module.css';
import { useProductDetail } from '@/hooks/useProductDetail';
import DetailProfile from '@/components/Detail/DetailProfile';
import CommentItemMenu from '@/components/Detail/CommentItemMenu';

export default function ItemDetailTop({ productId }) {
  const [isOpen, setIsOpen] = useState(false);
  const { product, loading, error } = useProductDetail(productId);
  
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;
  
  return (
    <section className={styles.itemDetailTop}>
      <div className={styles.itemDetailImage}>
        <img
          src={product.images || '/images/common/img_default.png'}
          alt='상품 상세 이미지'
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/common/img_default.png';
          }}
        />
      </div>
      <article className={styles.itemDetailInfo}>
        <ul>
          <li>
            <h4>{product.name}</h4>
            <strong>{product.price.toLocaleString()}원</strong>
            <div className={styles.itemDetailMenu}>
              <CommentItemMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </li>
          <li>
            <em>상품 소개</em>
            <p className={styles.itemDetailDesc}>{product.description}</p>
          </li>
          <li>
            <em>상품 태그</em>
            <ul className={styles.itemDetailTags}>
              {product.tags.map((tag, index) => (
                <li key={`${tag}-${index}`}>&#35;{tag}</li>
              ))}
            </ul>
          </li>
        </ul>
        <div className={styles.itemDetailMeta}>
          <DetailProfile
            profileImage={product.image}
            profileNickname={product.ownerNickname}
            profileUpdate={product.updatedAt.split('T')[0].replaceAll('-', '.')}
          />
          <button className={styles.itemDetailFavoriteButton}>
            <img src='/images/common/ic_heart_detail.svg' alt='좋아요' />
            <span>{product.favoriteCount}</span>
          </button>
        </div>
      </article>
    </section>
  );
}
