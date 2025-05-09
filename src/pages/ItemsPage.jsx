import { useEffect, useState, useCallback } from "react";
import { getProductList } from "../api/products";
import Header from "../components/Header";
import BestProductList from "../components/BestProductList";
import ProductList from "../components/ProductList";
import Pagenation from "../components/Pagenation";
import ItemControl from "../components/ItemControls";

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("recent");
  const [totalProducts, setTotalProducts] = useState(1);
  const [bestProducts, setBestProducts] = useState([]);
  const [best, setBest] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  useEffect(() => {
    const getBestProducts = async () => {
      const items = await getProductList({
        limit: best,
        page: 1,
        sort: "favorite",
      });
      setBestProducts(items.data.list);
    };
    getBestProducts();
  }, [best]);

  const handleResize = useCallback(() => {
    const size = window.innerWidth;
    size > 768 ? setIsMobile(false) : setIsMobile(true);
    if (size < 768) {
      setItemsPerPage(4);
      setBest(1);
    } else if (size < 1200) {
      setItemsPerPage(6);
      setBest(2);
      setIsMobile(false);
    } else {
      setItemsPerPage(10);
      setBest(4);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      <Header />
      <div className="pt-24 pb-52">
        <div className="flex flex-col gap-16 max-w-344 tablet:max-w-695 pc:max-w-1200 m-auto">
          <div className="text-xl font-bold text-gray900">베스트 상품</div>
          <BestProductList
            products={bestProducts}
            itemsPerPage={itemsPerPage}
          />
        </div>
        <div className="flex flex-col gap-16 tablet:gap-24 m-auto max-w-344 tablet:max-w-695 pc:max-w-1200 m-auto">
          <ItemControl isMobile={isMobile} options={options} />
          <ProductList products={products} itemsPerPage={itemsPerPage} />
        </div>
        <Pagenation
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default ItemsPage;
