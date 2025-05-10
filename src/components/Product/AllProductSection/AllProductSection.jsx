import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useResponsivePageSize } from '@/hooks';
import { SortSelect, Pagination } from '@/components/common';
import { ProductCard } from '@/components/Product';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './AllProductSection.module.scss';

const AllProductSection = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOption, setSortOption] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = useResponsivePageSize();

  useEffect(() => {
    // * 여기 try... catch
    const fetchProducts = async () => {
      const res = await fetch(
        `${baseUrl}${ENDPOINTS.PRODUCTS}?page=${page}&pageSize=${pageSize}&orderBy=${sortOption}`,
      );
      const data = await res.json();
      setProducts(data.list);
      setTotalCount(data.totalCount);
    };
    fetchProducts();
  }, [page, sortOption, pageSize]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    setPage(1);
  }, [pageSize, sortOption]);

  const handlePageChange = (e) => {
    const selectedPage = Number(e.target.value);
    setPage(selectedPage);
  };

  return (
    <section className={styles.allProductsSection}>
      <div className={styles.allProductsHeader}>
        <h2>전체 상품</h2>
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search products"
        />
        <Link
          to={ROUTES.ADD_ITEM}
          className={`${buttonStyles.primary} ${styles.linkButton}`}
        >
          상품 등록하기
        </Link>
        <div className={styles.sortWrapper}>
          <SortSelect
            value={sortOption}
            onChange={setSortOption}
            options={[
              { value: 'recent', label: '최신순' },
              { value: 'favorite', label: '좋아요순' },
            ]}
          />
        </div>
      </div>

      <div className={styles.allProductsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default AllProductSection;
