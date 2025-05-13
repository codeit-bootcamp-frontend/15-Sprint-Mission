import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./ProductList.css";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/productApi";
import Dropdown from "./Dropdown";

/**
 *  전체 상품 목록을 카드 형태로 표시하는 컴포넌트 입니다.
 *  검색어 기능, 정렬, 페이징 기능이 포함되어있습니다.
 */
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const nav = useNavigate(); // 페이지 이동을 위한 hook 사용

  const [responsivePageSize, setResponsivePageSize] = useState(10); // 기본값 10

  useEffect(() => {
    const params = {
      page: 1,
      pageSize: 300,
      orderBy,
    };
    if (searchKeyword) {
      params.keyword = searchKeyword;
    }

    getProducts(params).then((data) => {
      setProducts(data.list);
    });
  }, [orderBy, searchKeyword]);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);

      if (width <= 767) {
        setResponsivePageSize(4);
      } else if (width <= 1199) {
        setResponsivePageSize(6);
      } else {
        setResponsivePageSize(10);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

  // 페이징 처리
  const paginatedProducts = products.slice((page - 1) * responsivePageSize, page * responsivePageSize);
  const totalPage = Math.ceil(products.length / responsivePageSize);

  // 검색
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setPage(1);
  };

  return (
    <section>
      <div className="product-list__header">
        <div className="product-list__top">
          <h3>전체 상품</h3>
          {isMobile && (
            <button onClick={() => nav("/additem")} className="product-list__add-button">
              <span>상품 등록하기</span>
            </button>
          )}
        </div>

        <div className="product-list__actions">
          <div className="product-list__search-wrapper">
            <SearchInput onSearch={handleSearch} className="product-list__search-input" />
          </div>
          {!isMobile && (
            <button onClick={() => nav("/additem")} className="product-list__add-button">
              <span>상품 등록하기</span>
            </button>
          )}
          <Dropdown
            value={orderBy}
            onSelect={(value) => {
              setOrderBy(value);
              setPage(1);
            }}
            options={[
              { value: "recent", label: "최신순" },
              { value: "favorite", label: "좋아요순" },
            ]}
            className="product-list__dropdown"
          />
        </div>
      </div>

      <div className="product-list__grid">
        {paginatedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <div>
        <Pagination currentPage={page} totalPage={totalPage} onPageChange={(newPage) => setPage(newPage)} />
      </div>
    </section>
  );
};

export default ProductList;
