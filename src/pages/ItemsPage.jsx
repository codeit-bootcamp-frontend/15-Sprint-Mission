import { useEffect, useState } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";

function ItemsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("recent");

  const handleRecentClick = () => {
    setSort("recent");
  };
  const handleFavoriteClick = () => {
    setSort("Favorite");
  };

  const options = [
    { label: "최신순", value: "recent", click: handleRecentClick },
    { label: "좋아요순", value: "favorite", click: handleFavoriteClick },
  ];

  const handleButtonClick = () => {
    navigate("/additem");
  };

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
      <div className="flex max-w-1200 gap-12 m-auto p-24 px-16 tablet:px-24">
        <div className="text-xl font-bold flex-1">전체상품</div>
        <Button onClick={handleButtonClick}>상품 등록하기</Button>
        <input
          className="bg-gray100 rounded-xl"
          placeholder="검색할 상품을 입력해주세요"
        />
        <Dropdown options={options} />
      </div>
      <div className="max-w-1200 m-auto px-16 tablet:px-24">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ItemsPage;
