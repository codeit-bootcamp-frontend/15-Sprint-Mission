import { useEffect, useState, useCallback } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Pagenation from "../components/Pagenation";
import ItemControl from "../components/ItemControls";

function ItemsPage() {
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
        <ItemControl isMobile={isMobile} options={options} />
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
