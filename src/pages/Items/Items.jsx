import { useState, useEffect } from 'react';
import { baseUrl } from '@/constants/urls';
import { Link } from 'react-router-dom';
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
        setBestProducts(list.slice(0, 5)); // 베스트 상품 상위 5개
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
      <header className={styles.itemsHeader}>
        <h1>중고마켓</h1>
        <Link to="/additem" className={styles.addItemButton}>
          상품 등록하기
        </Link>
      </header>
      <section className={styles.bestProductsSection}>
        <h2>베스트 상품</h2>
        <div className={styles.productsGrid}>
          {bestProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.allProductsSection}>
        <h2>전체 상품</h2>
        <div className={styles.searchAndSort}>
          <input
            type="text"
            placeholder="검색할 상품명을 입력하세요"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select value={sortOption} onChange={handleSortChange}>
            <option value="latest">최신순</option>
            <option value="likes">좋아요순</option>
          </select>
        </div>
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.pagination}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        {/* 페이지네이션 버튼 추가 */}
      </footer>
    </div>
  );
};

export default Items;
