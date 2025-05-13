import BestProduct from "../components/BestProducts";
import ProductList from "../components/ProductList";
import "./Items.css";

/**
 *
 * 상품 목록 페이지 컴포넌트
 * 베스트 상품 컴포넌트(BestProduct)와 전체 상품 목록 컴포넌트 (ProductList)로 구성되어있습니다.
 */
const Items = () => {
  return (
    <div className="items">
      <BestProduct />
      <ProductList />
    </div>
  );
};

export default Items;
