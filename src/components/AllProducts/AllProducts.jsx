import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "../../api/getProducts";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts({ orderBy: "recent", pageSize: 10 })
      .then((data) => setProducts(data.list))
      .catch((error) => console.error(error));
  }, []);

  const filteredData = products.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <section className={styles.allProducts}>
      <h2 className={styles.sectionTitle}>전체 상품</h2>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <Link to={"/additem"} className={styles.buttonLink}>
        <button className={styles.addItemButton}>상품 등록하기</button>
      </Link>
      <div className={styles.productList}>
        {filteredData.map((item) => (
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
