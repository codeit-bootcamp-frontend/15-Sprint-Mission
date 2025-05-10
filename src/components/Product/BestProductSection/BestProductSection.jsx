import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/Product';
import { baseUrl, ENDPOINTS } from '@/constants/urls';
import styles from './BestProductSection.module.scss';

const BestProductSection = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      const res = await fetch(
        `${baseUrl}${ENDPOINTS.PRODUCTS}?page=1&pageSize=4&orderBy=favorite`,
      );
      const data = await res.json();
      const top4 = data.list.slice(0, 4);
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
