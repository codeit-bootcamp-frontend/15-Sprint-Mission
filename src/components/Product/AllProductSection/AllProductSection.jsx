import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useResponsivePageSize } from '@/hooks';
import { useToast } from '@/contexts';
import { fetchAllProducts } from '@/api/product';
import { Pagination } from '@/components/common';
import { SortDrop } from '@/components/common/Buttons';
import { ProductCard } from '@/components/Product';
import { safeFetch } from '@/utils/api';
import { getProductErrorMessage } from '@/utils/errorMessage';
import { baseUrl, ENDPOINTS, ROUTES } from '@/constants/urls';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './AllProductSection.module.scss';

const AllProductSection = () => {
  const { showToast } = useToast();
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOption, setSortOption] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = useResponsivePageSize();
  const options = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts({
          page,
          pageSize,
          orderBy: sortOption,
          keyword: searchQuery,
        });
        setProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        showToast(getProductErrorMessage(error.status), 'error');
      }
    };

    fetchProducts();
  }, [page, sortOption, pageSize, searchQuery]);

  useEffect(() => {
    setPage(1);
  }, [pageSize, sortOption, searchQuery]);

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
          <SortDrop
            value={sortOption}
            onChange={setSortOption}
            options={options}
          />
        </div>
      </div>

      <div className={styles.allProductsGrid}>
        {products.map((product) => (
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
