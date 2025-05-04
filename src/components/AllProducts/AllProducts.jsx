import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "../../api/getProducts";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import SortSelector from "../SortSelector/SortSelector";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("최신순");
  const [visibleCount, setVisibleCount] = useState(10);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    getProducts({ orderBy: "recent", pageSize: 10 })
      .then((data) => setProducts(data.list))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCount(4);
      else if (width < 1024) setVisibleCount(6);
      else if (width < 1200) setVisibleCount(8);
      else setVisibleCount(10);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === "좋아요순") return b.favoriteCount - a.favoriteCount;
    return new Date(b.recent) - new Date(a.recent);
  });

  const filteredData = sortedProducts.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
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
            <SortSelector onChange={setOrderBy} />
          </div>
        </div>
      )}
      <div className={styles.productList}>
        {filteredData.slice(0, visibleCount).map((item) => (
          <ProductCard
            key={item.id}
            imageUrl={item.images?.[0]}
            title={item.name}
            price={item.price}
            likes={item.favoriteCount}
            variant="all"
          />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
