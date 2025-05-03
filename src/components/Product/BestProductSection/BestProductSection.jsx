import { useEffect, useState } from 'react';
import { baseUrl } from '@/constants/urls';
import { ProductCard } from '@/components/Product';
import styles from './BestProductSection.module.scss';

const BestProductSection = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      const res = await fetch(
        `${baseUrl}/products?page=1&pageSize=1000&orderBy=favorite`, //서버에 좋아요 순으로 정렬한 상위 N개의 데이터를 보내주는 전용 endpoint가 없어서 일단 임시로 이렇게 처리
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestProductSection;
