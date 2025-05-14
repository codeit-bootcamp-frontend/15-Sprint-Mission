import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../../api/getProducts.js";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination.jsx";
import "./AllItems.css";

import useDetectClose from "../../../../hooks/useDetectClose.jsx";
import search from "../../../../assets/images/search.svg";

const AllItems = ({ deviceType }) => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useDetectClose(dropdownRef);

  const nav = useNavigate();
  const onClickButton = () => {
    nav("/additem");
  };

  useEffect(() => {
    if (deviceType === "mobile") {
      setPageSize(4);
    } else if (deviceType === "tablet") {
      setPageSize(6);
    } else {
      setPageSize(10);
    }
  }, [deviceType]);

  useEffect(() => {
    async function getItems() {
      const data = await getProducts({
        page: currentPage,
        pageSize,
        orderBy: orderBy,
        keyword: searchKeyword,
      });
      setItems(data.list);
      setTotalCount(data.totalCount);
      setLoading(false);
    }

    getItems();
  }, [currentPage, orderBy, searchKeyword, pageSize]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showDropdown]);

  const handleOrderChange = (orderType) => {
    setOrderBy(orderType);
    setCurrentPage(1);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="AllItems">
        <div className="top-section">
          <p className="title">전체 상품</p>
          <button className="register" onClick={onClickButton}>
            상품 등록하기
          </button>
          <div className="search-container">
            <img src={search} alt="돋보기 아이콘" />
            <input
              className="search-input"
              placeholder="검색할 상품을 입력해주세요"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div
            className="orderby"
            ref={dropdownRef}
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <p>{orderBy === "recent" ? "최신순" : "좋아요순"}</p>
            <button className="orderby-icon"></button>
            {showDropdown && (
              <div className="orderby-dropdown">
                <div
                  className="first-option"
                  onClick={() => handleOrderChange("recent")}
                >
                  최신순
                </div>
                <div
                  className="second-option"
                  onClick={() => handleOrderChange("favorite")}
                >
                  좋아요순
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="items-container">
          {loading
            ? Array.from({ length: pageSize }).map((_, idx) => (
                <Item key={idx} isLoading={true} />
              ))
            : items.map((item) => <Item key={item.id} item={item} />)}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default AllItems;
