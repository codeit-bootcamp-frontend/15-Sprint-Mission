import { useEffect, useState } from 'react';
import { useToast } from '@/contexts';
import { ProductCard } from '@/components/Product';
import { safeFetch } from '@/utils/api';
import { getProductErrorMessage } from '@/utils/errorMessage';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import styles from './BestProductSection.module.scss';

const BestProductSection = () => {
  const { showToast } = useToast();
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const data = await safeFetch({
          url: `${baseUrl}${ENDPOINTS.PRODUCTS}?page=1&pageSize=4&orderBy=favorite`,
          options: { method: 'GET' },
        });
        setBestProducts(data.list);
      } catch (error) {
        showToast(getProductErrorMessage(error.status), 'error');
      }
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
