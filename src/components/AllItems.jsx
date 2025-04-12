import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageNum from "./PageNum";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const [totalPages, setTotalPages] = useState(5); // 총 페이지 수 (API 응답에 따라 조정 가능)
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&orderBy=${orderBy}`
      );
      setItems(response.data.list || []);
      // API가 총 페이지 수를 제공한다면 여기서 설정 (예: response.data.totalPages)
      setTotalPages(5); // 임시로 5페이지 가정
    } catch (error) {
      console.error("상품 데이터를 가져오는 데 실패했어요:", error);
      setError("상품을 불러오는 데 실패했어요. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page, orderBy]); // page와 orderBy가 바뀔 때마다 데이터 가져옴

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFocus = () => {
    if (containerRef.current) containerRef.current.classList.add("focused");
  };

  const handleBlur = () => {
    if (containerRef.current) containerRef.current.classList.remove("focused");
  };

  const sortedItems = [...items].sort((a, b) =>
    orderBy === "recent"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : b.favoriteCount - a.favoriteCount
  );

  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOrderSelect = (value) => {
    setOrderBy(value);
    setIsDropdownOpen(false); // 오타 수정: setquillaOpen → setIsDropdownOpen
  };

  const handleAddItem = () => {
    navigate("/additem");
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>
        <h2>전체 상품</h2>
        <div>
          <div ref={containerRef} tabIndex={0}>
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <img src="/img/magnifier.svg" alt="검색" />
          </div>
          <button onClick={handleAddItem}>상품 등록하기</button>
          <div>
            <button onClick={toggleDropdown}>
              {orderBy === "recent" ? "최신순" : "좋아요순"} ▼
            </button>
            {isDropdownOpen && (
              <ul>
                <li
                  onClick={() => handleOrderSelect("recent")}
                  className={orderBy === "recent" ? "selected" : ""}
                >
                  최신순
                </li>
                <li
                  onClick={() => handleOrderSelect("likes")}
                  className={orderBy === "likes" ? "selected" : ""}
                >
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <ul className="list all-items-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>
              <img
                className="image all-items-image"
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "/img/emptyMarket.png"
                }
                alt={item.name}
                onError={(e) => (e.target.src = "/img/emptyMarket.png")}
              />
              <div></div>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{item.price.toLocaleString()}원</p>
                <p className="item-favorite-count">♡ {item.favoriteCount}</p>
              </div>
            </li>
          ))
        ) : (
          <li>검색 결과가 없습니다.</li>
        )}
      </ul>
      <PageNum
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default AllItems;
