import { useState, useEffect } from "react";
import getProducts from "../../api/getProducts";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ orderBy: "recent", pageSize: 10 })
      .then((data) => setProducts(data.list))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={styles.allProducts}>
      <h2 className={styles.sectionTitle}>전체 상품</h2>
      <div className={styles.productList}>
        {products.map((item) => (
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
