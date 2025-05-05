// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { SortSelect, Pagination } from '@/components/common';
// import { ProductCard } from '@/components/Product';
// import { baseUrl, ROUTES } from '@/constants/urls';
// import arrowDownIcon from '@/assets/icons/arrow_down.svg';
// import styles from './AllProductSection.module.scss';

// const AllProductSection = () => {
//   const [products, setProducts] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [sortOption, setSortOption] = useState('latest');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch(`${baseUrl}/products`);
//       const data = await res.json();
//       setProducts(data.list);
//       setTotalCount(data.totalCount);
//     };
//     fetchProducts();
//   }, [page, sortOption]);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   return (
//     <section className={styles.allProductsSection}>
//       <div className={styles.allProductsHeader}>
//         <h2>전체 상품</h2>
//         <div className={styles.searchAndSort}>
//           <input
//             type="text"
//             placeholder="검색할 상품을 입력해주세요"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Link to={ROUTES.ADD_ITEM} className={`button ${styles.linkButton}`}>
//             상품 등록하기
//           </Link>
//           <div className={styles.sortWrapper}>
//             <SortSelect
//               value={sortOption}
//               onChange={setSortOption}
//               options={[
//                 { value: 'latest', label: '최신순' },
//                 { value: 'favorites', label: '좋아요순' },
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//       <div className={styles.allProductsGrid}>
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <Pagination
//         currentPage={page}
//         totalCount={totalCount}
//         pageSize={10}
//         onPageChange={setPage}
//       />
//       ;
//     </section>
//   );
// };

// export default AllProductSection;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SortSelect, Pagination } from '@/components/common';
import { ProductCard } from '@/components/Product';
import { baseUrl, ROUTES } from '@/constants/urls';
import styles from './AllProductSection.module.scss';

const AllProductSection = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [sortOption, setSortOption] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

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
      <div className={styles.allProductsHeader}>
        <h2>전체 상품</h2>
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to={ROUTES.ADD_ITEM} className={`button ${styles.linkButton}`}>
          상품 등록하기
        </Link>
        <div className={styles.sortWrapper}>
          <SortSelect
            value={sortOption}
            onChange={setSortOption}
            options={[
              { value: 'latest', label: '최신순' },
              { value: 'favorites', label: '좋아요순' },
            ]}
          />
        </div>
      </div>

      <div className={styles.allProductsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={10}
        onPageChange={setPage}
      />
    </section>
  );
};

export default AllProductSection;
