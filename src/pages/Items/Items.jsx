import { useState, useEffect } from 'react';
import { baseUrl, ROUTES } from '@/constants/urls';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/Product/ProductCard';
import styles from './Items.module.scss';

const Items = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [sortOption, setSortOption] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        const { list } = data;
        setProducts(list);

        const sortedByLikes = [...list].sort(
          (a, b) => b.favoriteCount - a.favoriteCount,
        );
        setBestProducts(sortedByLikes.slice(0, 4));
      } catch (error) {
        console.error('상품 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={styles.itemsPage}>
      <section className={styles.bestProductsSection}>
        <h2>베스트 상품</h2>
        <div className={styles.bestProductsGrid}>
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className={styles.allProductsSection}>
        <h2>전체 상품</h2>
        <div className={styles.searchAndSort}>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link to={ROUTES.ADD_ITEM}>상품 등록하기</Link>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="latest">최신순</option>
            <option value="likes">좋아요순</option>
          </select>
        </div>
        <div className={styles.allProductsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Items;
