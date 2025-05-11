import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useToast } from '@/components/common';
import { CommentInput, CommentList } from '@/components/Comment';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import { PRODUCT_ERROR_MESSAGES } from '@/constants/messages';
import styles from './ProductDetail.module.scss';

const ProductDetail = () => {
  const { showToast } = useToast();
  console.log(useParams());
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await safeFetch({
        url: `${baseUrl}${ENDPOINTS.PRODUCTS}/${productId}`,
        options: { method: 'GET' },
        showToast,
        uiErrorMessage: PRODUCT_ERROR_MESSAGES.FETCH_DETAIL_FAILED,
      });
      setProduct(data);
    };

    fetchProduct();
  }, [productId, showToast]);

  const refreshAfterSubmit = () => setRefreshKey((prev) => prev + 1);

  if (!product) return <div>Loading...</div>; //TODO: 로딩처리

  return (
    <div className={styles.productDetail}>
      <div className={styles.image}>
        <img src={product.images?.[0]} alt={product.name} />
      </div>
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>{product.price.toLocaleString()}원</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.tags}>
          {product.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <CommentInput
        productId={productId}
        refreshAfterSubmit={refreshAfterSubmit}
      />
      <CommentList productId={productId} refreshKey={refreshKey} />

      <Link to={ROUTES.ITEMS} className={styles.backButton}>
        목록으로 돌아가기
      </Link>
    </div>
  );
};

export default ProductDetail;
