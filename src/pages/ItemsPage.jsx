import { useEffect, useState } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Button from "../components/Button";

function ItemsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const items = await getProductList({ limit: 10, offset: 0 });
      setProducts(items.data.list);
    };
    getProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <Header />
      <div className="flex max-w-1200 gap-12 m-auto">
        <div className="text-xl font-bold flex-1">전체상품</div>
        <Button>상품 등록하기</Button>
        <input className="" placeholder="검색할 상품을 입력해주세요"></input>
        <div className="">최신순</div>
      </div>
      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ItemsPage;
