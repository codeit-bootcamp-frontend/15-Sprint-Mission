import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useToast } from '@/contexts';
import { CommentInput, CommentList } from '@/components/Comment';
import { ProductInfo } from '@/components/Product';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import { PRODUCT_ERROR_MESSAGES } from '@/constants/messages';
import arrowBackIcon from '@/assets/icons/arrow_back.svg';
import commonStyles from '@/styles/helpers/commonHelpers.module.scss';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './ProductDetail.module.scss';

const ProductDetail = () => {
  const { showToast } = useToast();
  console.log('useParams에 어떻게 출력되나', useParams());
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  console.log('product', product);
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
      <ProductInfo {...product} />
      <div className={commonStyles.horizontalLine} />
      <div className={styles.commentSection}>
        <CommentInput
          productId={productId}
          refreshAfterSubmit={refreshAfterSubmit}
        />
        <CommentList productId={productId} refreshKey={refreshKey} />
      </div>

      <div className={styles.backButtonWrapper}>
        <Link
          to={ROUTES.ITEMS}
          className={`${styles.backButton} ${buttonStyles.primary}`}
        >
          목록으로 돌아가기
          <img src={arrowBackIcon} alt="Go back to previous page" />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
