import { useState, useEffect } from "react";
import getProducts from "../../api/getProducts";
import styles from "./BestProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    getProducts({ orderBy: "favorite", pageSize: 4 })
      .then((data) => setProducts(data.list))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else if (width < 1200) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <section className={styles.bestProducts}>
      <h2 className={styles.sectionTitle}>베스트 상품</h2>
      <div className={styles.productList}>
        {products.slice(0, visibleCount).map((item) => (
          <ProductCard
            key={item.id}
            imageUrl={item.images?.[0]}
            title={item.name}
            price={item.price}
            likes={item.favoriteCount}
            variant="best"
          />
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
