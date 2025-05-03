import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/Product';
import { baseUrl, ROUTES } from '@/constants/urls';
import styles from './AllProductSection.module.scss';

const AllProductSection = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${baseUrl}/products`);
      const data = await res.json();
      setProducts(data.list);
      setTotalCount(data.totalCount);
    };
    fetchProducts();
  }, [page, sortOption]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className={styles.allProductsSection}>
      <h2>전체 상품</h2>
      <div className={styles.searchAndSort}>
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to={ROUTES.ADD_ITEM}>상품 등록하기</Link>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
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
  );
};

export default AllProductSection;
