import { useEffect, useState } from 'react';
import { useToast } from '@/contexts';
import { ProductCard } from '@/components/Product';
import { safeFetch } from '@/utils/api';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import { PRODUCT_ERROR_MESSAGES } from '@/constants/messages';
import styles from './BestProductSection.module.scss';

const BestProductSection = () => {
  const { showToast } = useToast();
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      const data = await safeFetch({
        url: `${baseUrl}${ENDPOINTS.PRODUCTS}?page=1&pageSize=4&orderBy=favorite`,
        options: { method: 'GET' },
        showToast,
        uiErrorMessage: PRODUCT_ERROR_MESSAGES.FETCH_BEST_FAILED,
      });
      const top4 = data.list;
      setBestProducts(top4);
    };
    fetchBestProducts();
  }, []);

  return (
    <section className={styles.bestProductsSection}>
      <h2>베스트 상품</h2>
      <div className={styles.bestProductsGrid}>
        {bestProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestProductSection;
