import { useEffect } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";

function ItemsPage() {
  useEffect(() => {
    const getProducts = async () => {
      const products = await getProductList({ limit: 8, offset: 0 });
      console.log(products.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex max-w-1200 gap-12 m-auto">
        <div className="flex-1">전체상품</div>
        <input placeholder="검색할 상품을 입력해주세요"></input>
        <button>상품 등록하기</button>
        <div>최신순</div>
      </div>
      <div></div>
    </div>
  );
}

export default ItemsPage;
