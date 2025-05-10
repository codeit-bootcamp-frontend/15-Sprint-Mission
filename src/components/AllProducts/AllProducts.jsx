import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import getProducts from "../../api/getProducts";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import SortSelector from "../SortSelector/SortSelector";
import Pagination from "../Pagination/Pagination";
import styles from "./AllProducts.module.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 4;
  else if (width < 1024) return 6;
  else if (width < 1200) return 8;
  else return 10;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize);
  const [totalCount, setTotalCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get("orderBy") || "recent";
  const keyword = searchParams.get("keyword") || "";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getProducts({ page, pageSize, orderBy, keyword })
      .then((data) => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((error) => console.error(error));
  }, [page, pageSize, orderBy, keyword]);

  useEffect(() => {
    const updatePageSize = () => {
      setPageSize(getPageSize());
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const onSearch = useCallback(
    (term) => {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("keyword", term);
          newParams.set("page", "1");
          return newParams;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const handleSortChange = useCallback(
    (sortKey) => {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("orderBy", sortKey);
          newParams.set("page", "1");
          return newParams;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", String(newPage));
        return params;
      });
    },
    [setSearchParams]
  );

  return (
    <>
      <section className={styles.allProducts}>
        {isMobile ? (
          <div className={styles.topBarContainerMobile}>
            <div className={styles.mobileHeaderRow}>
              <h2 className={styles.sectionTitle}>전체 상품</h2>
              <Link to={"/additem"} className={styles.buttonLink}>
                <button className={styles.addItemButton}>상품 등록하기</button>
              </Link>
            </div>
            <div className={styles.mobileControlRow}>
              <SearchBar onSearch={onSearch} keyword={keyword} />
              <SortSelector value={orderBy} onChange={handleSortChange} />
            </div>
          </div>
        ) : (
          <div className={styles.topBarContainer}>
            <h2 className={styles.sectionTitle}>전체 상품</h2>
            <div className={styles.controlsRow}>
              <SearchBar onSearch={onSearch} keyword={keyword} />
              <Link to={"/additem"} className={styles.buttonLink}>
                <button className={styles.addItemButton}>상품 등록하기</button>
              </Link>
              <SortSelector value={orderBy} onChange={handleSortChange} />
            </div>
          </div>
        )}
        <div className={styles.productList}>
          {products.map(({ id, images, name, price, favoriteCount }) => (
            <ProductCard
              key={id}
              imageUrl={images?.[0]}
              title={name}
              price={price}
              likes={favoriteCount}
              variant="all"
            />
          ))}
        </div>
      </section>
      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AllProducts;
