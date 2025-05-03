import { useEffect, useState, useCallback } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Pagenation from "../components/Pagenation";
import search from "../assets/icons/search.svg";

function ItemsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("recent");
  const [totalProducts, setTotalProducts] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState();

  const handleRecentClick = () => {
    setSort("recent");
    setCurrentPage(1);
  };
  const handleFavoriteClick = () => {
    setSort("favorite");
    setCurrentPage(1);
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
      const page = currentPage;
      const items = await getProductList({ limit: 10, page, sort });
      setProducts(items.data.list);
      setTotalProducts(items.data.totalCount);
      setTotalPages(Math.ceil(totalProducts / itemsPerPage));
    };
    getProducts();
  }, [totalProducts, itemsPerPage, currentPage, sort]);

  const handleResize = useCallback(() => {
    const size = window.innerWidth;
    size > 768 ? setIsMobile(false) : setIsMobile(true);
    if (size < 768) {
      setItemsPerPage(4);
    } else if (size < 1200) {
      setItemsPerPage(6);
      setIsMobile(false);
    } else {
      setItemsPerPage(10);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8 m-auto p-24 px-16 tablet:px-24 max-w-1200">
        {isMobile ? (
          <>
            <div className="flex justify-between items-center gap-8">
              <div className="text-xl text-gray900 font-bold flex-1">
                전체상품
              </div>
              <Button onClick={handleButtonClick}>상품 등록하기</Button>
            </div>
            <div className="flex justify-between items-center gap-8 relative">
              <div className="flex justify-between items-center gap-4 flex-1">
                <img className="absolute left-12" src={search} />
                <input
                  className="bg-gray100 rounded-xl text-gray400 py-9 pl-36 flex-1"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </div>
              <Dropdown options={options} isMobile={isMobile} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center gap-12">
              <div className="text-xl text-gray900 font-bold flex-1">
                전체상품
              </div>
              <div className="flex justify-between items-center gap-8 w-242 relative">
                <img className="absolute left-12" src={search} />
                <input
                  className="bg-gray100 rounded-xl text-gray400 py-9 pl-36 flex-1"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </div>
              <Button onClick={handleButtonClick}>상품 등록하기</Button>
              <Dropdown options={options} isMobile={isMobile} />
            </div>
          </>
        )}
      </div>
      <div className="max-w-1200 m-auto px-16 tablet:px-24">
        <ProductList products={products} itemsPerPage={itemsPerPage} />
      </div>
      <Pagenation
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ItemsPage;
