import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AllItems.css";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent` // API는 recent만 사용
      );
      setItems(response.data.list || []);
    } catch (error) {
      console.error("상품 데이터를 가져오는 데 실패했어요:", error);
      setError("상품을 불러오는 데 실패했어요. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // orderBy 제거, API는 recent만 호출

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 클라이언트 측 정렬
  const sortedItems = [...items].sort(
    (a, b) =>
      orderBy === "recent"
        ? new Date(b.createdAt) - new Date(a.createdAt) // 최신순
        : b.favoriteCount - a.favoriteCount // 좋아요순
  );

  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOrderSelect = (value) => {
    setOrderBy(value);
    setIsDropdownOpen(false); // 선택 후 드롭다운 닫기
  };

  const handleAddItem = () => {
    navigate("/additem");
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>전체 상품</h2>
      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img src="/img/magnifier.svg" alt="검색" className="search-icon" />
        </div>
        <button onClick={handleAddItem}>상품 등록하기</button>
        <div className="dropdown-container">
          <button onClick={toggleDropdown} className="toggle-button">
            {orderBy === "recent" ? "최신순" : "좋아요순"} ▼
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
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
      <ul className="items-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "/img/emptyMarket.png"
                }
                alt={item.name}
                onError={(e) => (e.target.src = "/img/emptyMarket.png")}
              />
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()}원</p>
              <p>♡ {item.favoriteCount}</p>
            </li>
          ))
        ) : (
          <li>검색 결과가 없습니다.</li>
        )}
      </ul>
    </>
  );
};

export default AllItems;
