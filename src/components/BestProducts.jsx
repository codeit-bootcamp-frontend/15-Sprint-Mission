import { getProducts } from "../api/productApi";
import { useState, useEffect, useCallback } from "react";
import "./BestProducts.css";
import ProductCard from "./ProductCard";

/**
 *
 * 베스트 상품을 보여주는 컴포넌트
 * 인기순(favorite)으로 정렬된 상품을 보여줍니다. (반응형 크기에 따라 PC: 4 / tablet: 2 / mobile: 1)
 * resize 함수를 사용하여 화면 크기에 따라 visibleCount를 조절하여  상품을 보여줍니다.
 */
const BestProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // default pc

  const updateVisibleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 767) {
      setVisibleCount(1);
    } else if (width <= 1199) {
      setVisibleCount(2);
    } else {
      setVisibleCount(4);
    }
  }, []);

  useEffect(() => {
    getProducts({ page: 1, pageSize: 4, orderBy: "favorite" }).then((data) => {
      setBestProducts(data.list);
    });
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [updateVisibleCount]);

  return (
    <section className="best-products">
      <h3 className="best-products__title">베스트 상품</h3>
      <div className="best-products__grid">
        {bestProducts.slice(0, visibleCount).map((item) => (
          <ProductCard key={item.id} item={item} variant="best" />
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
