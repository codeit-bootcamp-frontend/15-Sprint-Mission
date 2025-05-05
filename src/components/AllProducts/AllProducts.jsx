import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "../../api/getProducts";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import SortSelector from "../SortSelector/SortSelector";
import Pagination from "../Pagination/Pagination";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getProducts({ page, pageSize, orderBy, keyword: searchTerm })
      .then((data) => {
        console.log("전체 개수", data.totalCount);
        setProducts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((error) => console.error(error));
  }, [page, pageSize, orderBy, searchTerm]);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width < 768) setPageSize(4);
      else if (width < 1024) setPageSize(6);
      else if (width < 1200) setPageSize(8);
      else setPageSize(10);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === "likes") return b.favoriteCount - a.favoriteCount;
    return new Date(b.recent) - new Date(a.recent);
  });

  const filteredData = sortedProducts.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const onSearch = (term) => {
    setSearchTerm(term);
  };

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
              <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
              <SortSelector onChange={setOrderBy} />
            </div>
          </div>
        ) : (
          <div className={styles.topBarContainer}>
            <h2 className={styles.sectionTitle}>전체 상품</h2>
            <div className={styles.controlsRow}>
              <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
              <Link to={"/additem"} className={styles.buttonLink}>
                <button className={styles.addItemButton}>상품 등록하기</button>
              </Link>
              <SortSelector onChange={(sortKey) => setOrderBy(sortKey)} />
            </div>
          </div>
        )}
        <div className={styles.productList}>
          {filteredData.map((item) => (
            <ProductCard
              key={item.id}
              imageUrl={item.images?.[0]}
              title={item.name}
              price={item.price}
              favorite={item.favoriteCount}
              variant="all"
            />
          ))}
        </div>
      </section>
      <Pagination
        currentPage={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </>
  );
};

export default AllProducts;
