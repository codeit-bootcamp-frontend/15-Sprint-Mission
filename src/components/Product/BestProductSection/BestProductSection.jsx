import { useEffect, useState } from 'react';
import { useToast } from '@/contexts';
import { fetchBestProducts } from '@/api/product';
import { ProductCard } from '@/components/Product';
import { getProductErrorMessage } from '@/utils/errorMessage';
import styles from './BestProductSection.module.scss';

const BestProductSection = () => {
  const { showToast } = useToast();
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBestProducts();
        setBestProducts(data.list);
      } catch (error) {
        showToast(getProductErrorMessage(error.status), 'error');
      }
    };

    fetchData();
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
