import { useParams } from 'react-router-dom';
import { useProductDetail } from '@/hooks/useProductDetail';
import styles from './styles/index.module.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const ItemDetail = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductDetail(productId);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;
  console.log(product)

  return (
    <>
      <p>{product.tags}</p>
      <Header />
      <div id='container' className={`${styles.itemDetail} itemsPage`}>
        <div className='inner04'>
          <section className={styles.itemDetailTop}>
            <div className={styles.itemDetailImage}>
              <img src={product.images} alt='상품 상세 이미지' />
            </div>
            <article className={styles.itemDetailInfo}>
              <ul>
                <li>
                  <h4>{product.name}</h4>
                  <strong>{product.price.toLocaleString()}원</strong>
                </li>
                <li>
                  <p className='tit'>상품 소개</p>
                  <p className='desc'>{product.description}</p>
                </li>
                <li>
                  <p className='tit'>상품 태그</p>
                  <ul className='desc'>
                    {product.tags.map((tag, index) => (
                      <li key={`${tag}-${index}`}>{tag}</li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className={styles.itemDetailMeta}>
                <div className='profile'>
                  <div className='profileImage'>
                    <img src={product.image || '/images/common/ic_log.svg'} alt='프로필 이미지' />
                  </div>
                  <div>
                    <p className='profileNickName'>{product.ownerNickname}</p>
                    <p className='profileUpdate'>{product.updatedAt.split('T')[0].replaceAll('-', '.')}</p>
                  </div>
                </div>
                <button>
                  <img src='/images/common/ic_heart.svg' alt='' />
                  {product.favoriteCount}
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetail;
