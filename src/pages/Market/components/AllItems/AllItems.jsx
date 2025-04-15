import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../../../src/api.js";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination.jsx";
import "./AllItems.css";

import search from "../../../../assets/images/search.svg";

const AllItems = ({ deviceType }) => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const nav = useNavigate();
  const onClickButton = () => {
    nav("/additem");
  };

  const getItemSize = () => {
    if (deviceType === "mobile") return "all-four";
    if (deviceType === "tablet") return "all-six";
    return "all-ten";
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
    }

    getItems();
  }, [currentPage, orderBy, searchKeyword, pageSize]);

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
          <select
            className="orderby"
            onChange={(e) => {
              setOrderBy(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
          <div
            className="orderby-mobile"
            onClick={() => {
              document
                .querySelector(".orderby-dropdown")
                .classList.toggle("show");
            }}
          >
            <button className="orderby-icon"></button>
            <div className="orderby-dropdown">
              <div
                className="first-option"
                onClick={() => {
                  setOrderBy("recent");
                  setCurrentPage(1);
                  document
                    .querySelector(".orderby-dropdown")
                    .classList.toggle("show");
                }}
              >
                최신순
              </div>
              <div
                className="second-option"
                onClick={() => {
                  setOrderBy("favorite");
                  setCurrentPage(1);
                  document
                    .querySelector(".orderby-dropdown")
                    .classList.toggle("show");
                }}
              >
                좋아요순
              </div>
            </div>
          </div>
        </div>
        <div className="items-container">
          {items.map((item) => {
            return <Item key={item.id} item={item} size={getItemSize()} />;
          })}
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
