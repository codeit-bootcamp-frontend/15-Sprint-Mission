import { useState, useEffect, useCallback } from "react";

import { getProducts } from "../../api/itemAPI";
import { Link } from "react-router-dom";

import ItemList from "./component/ItemList";
import PageNation from "./component/PageNation";

import "./AllItem.css";
import Dropdown from "./component/Dropdown.jsx";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width <= 425) {
    // 모바일
    return 4;
  } else if (width <= 768) {
    // 테블릿
    return 6;
  } else {
    // 데스크톱
    return 10;
  }
};

function AllItem() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [totalPage, setTotalPage] = useState();
  const [pageSize, setPageSize] = useState(getPageSize());
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const handleResize = useCallback(() => {
    const newSize = getPageSize();
    setPageSize((prevSize) => (prevSize !== newSize ? newSize : prevSize));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const params = {
          orderBy: sort,
          pageSize,
          page,
        };

        if (keyword.trim() !== "") {
          params.keyword = keyword;
        }

        const data = await getProducts(params);
        setItems(data.list);
        setTotalPage(Math.ceil(data.totalCount / pageSize));
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생:", error);
      }
    };

    fetchItems();
  }, [sort, pageSize, page, keyword]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  return (
    <div className="all-item">
      <div className="all-item-header">
        <h1 className="all-item-title">전체 상품</h1>

        <div className="all-item-header-right">
          <input
            className="item-search"
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <Link to="additem" className="item-add-item">
            상품 등록하기
          </Link>
          <Dropdown sort={sort} setSort={setSort} className="dropdown" />
        </div>
      </div>

      <ItemList items={items} className="all-item-list" />
      <PageNation totalPage={totalPage} page={page} setPage={setPage} />
    </div>
  );
}

export default AllItem;
