import { useState, useEffect } from "react";
import getProducts from "../../api/getProducts";
import styles from "./BestProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

const BestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ orderBy: "favorite", pageSize: 4 })
      .then((data) => setProducts(data.list))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={styles.bestProducts}>
      <h2 className={styles.sectionTitle}>베스트 상품</h2>
      <div className={styles.productList}>
        {products.map((item) => (
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
