import { useState, useRef, useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import useProducts from "@/hooks/useProducts";
import heart from "@/assets/icons/ic_heart.svg";
import useScreenSize from "@/hooks/useScreenSize";
import defaultImage from "@/assets/images/Img_default.png";
import search from "@/assets/icons/ic_search.svg";
import {
  BestItemsTitle,
  BestItemsContainer,
  BestItemsHeartContainer,
  BestItemsHeart,
  BestItemsName,
  BestItemsPrice,
} from "../BestItems/BestItems.styles";
import {
  AllItemsHeader,
  AllItemsGridContainer,
  AllItemsContainer,
  AllItemsImage,
  AllItemsFilterButton,
  AllItemsFilterContainer,
  AllItemsSearchContainer,
  AllItemsSearchInput,
  AllItemsSearchIcon,
  AllItemsAddItemButton,
  AllItemsFilterIcon,
  AllItemsTopRow,
  AllItemsBottomRow,
  AllItemsSortMenu,
  AllItemsSortOption,
} from "./AllItems.styles";
import filterMobile from "@/assets/icons/ic_filter_mobile.svg";
import filter from "@/assets/icons/ic_filter.svg";
import { Link } from "react-router-dom";

function AllItems() {
  const { isMobile, isTablet } = useScreenSize();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState("latest"); // "latest" 또는 "favorite"
  const sortMenuRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(16);
  const { items, loading, error } = useProducts(currentPage, 10);
  const onPageChange = (e, page) => {
    setCurrentPage(page);
  };

  // 정렬된 아이템 계산
  const getSortedItems = () => {
    if (!Array.isArray(items)) return [];

    const itemsCopy = [...items];

    if (sortOption === "latest") {
      // 최신순 정렬 (ID 기준으로 내림차순)
      return itemsCopy.sort((a, b) => b.id - a.id);
    } else if (sortOption === "favorite") {
      // 좋아요순 정렬
      return itemsCopy.sort((a, b) => b.favoriteCount - a.favoriteCount);
    }

    return itemsCopy;
  };

  const sortedItems = getSortedItems();

  // 화면 크기에 맞게 보여줄 아이템 수 제한
  const displayItems = isMobile
    ? sortedItems.slice(0, 4)
    : isTablet
    ? sortedItems.slice(0, 6)
    : sortedItems;

  // 정렬 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setSortMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 정렬 옵션 선택 핸들러
  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setSortMenuOpen(false);
  };

  // 정렬 버튼 텍스트
  const getSortButtonText = () => {
    if (isMobile) return "";
    return sortOption === "latest" ? "최신순" : "좋아요 순";
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!Array.isArray(items) || items.length === 0)
    return <div>상품이 없습니다.</div>;

  return (
    <section css={BestItemsContainer}>
      <header css={AllItemsHeader}>
        {isMobile ? (
          <>
            <div css={AllItemsTopRow}>
              <h2 css={BestItemsTitle}>전체 상품</h2>
              <Link css={AllItemsAddItemButton} to="/additem">
                상품 등록하기
              </Link>
            </div>
            <div css={AllItemsBottomRow}>
              <div css={AllItemsSearchContainer}>
                <img src={search} alt="검색" css={AllItemsSearchIcon} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="검색할 상품을 입력해주세요"
                  css={AllItemsSearchInput}
                />
              </div>
              <div style={{ position: "relative" }} ref={sortMenuRef}>
                <button
                  css={AllItemsFilterButton}
                  onClick={() => setSortMenuOpen(!sortMenuOpen)}
                >
                  <img src={filterMobile} alt="필터" css={AllItemsFilterIcon} />
                </button>
                {sortMenuOpen && (
                  <div css={AllItemsSortMenu}>
                    <button
                      css={AllItemsSortOption}
                      onClick={() => handleSortOptionSelect("latest")}
                    >
                      최신순
                    </button>
                    <button
                      css={AllItemsSortOption}
                      onClick={() => handleSortOptionSelect("favorite")}
                    >
                      좋아요 순
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 css={BestItemsTitle}>전체 상품</h2>
            <div css={AllItemsFilterContainer}>
              <div css={AllItemsSearchContainer}>
                <img src={search} alt="검색" css={AllItemsSearchIcon} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="검색할 상품을 입력해주세요"
                  css={AllItemsSearchInput}
                />
              </div>
              <Link css={AllItemsAddItemButton} to="/additem">
                상품 등록하기
              </Link>
              <div style={{ position: "relative" }} ref={sortMenuRef}>
                <button
                  css={AllItemsFilterButton}
                  onClick={() => setSortMenuOpen(!sortMenuOpen)}
                >
                  {getSortButtonText()}
                  <img src={filter} alt="필터" css={AllItemsFilterIcon} />
                </button>
                {sortMenuOpen && (
                  <div css={AllItemsSortMenu}>
                    <button
                      css={AllItemsSortOption}
                      onClick={() => handleSortOptionSelect("latest")}
                    >
                      최신순
                    </button>
                    <button
                      css={AllItemsSortOption}
                      onClick={() => handleSortOptionSelect("favorite")}
                    >
                      좋아요 순
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </header>
      <main>
        <ul css={AllItemsGridContainer}>
          {displayItems.map((item) => (
            <li key={item.id}>
              <article css={AllItemsContainer}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {item.images && (
                    <img
                      src={item.images}
                      alt={item.name}
                      css={AllItemsImage}
                      onError={(e) => {
                        e.target.src = defaultImage;
                      }}
                    />
                  )}
                </div>
                <div>
                  <h3 css={BestItemsName}>{item.name}</h3>
                  <p css={BestItemsPrice}>{item.price?.toLocaleString()}원</p>
                  <p css={BestItemsHeartContainer}>
                    <img src={heart} alt="좋아요" css={BestItemsHeart} />
                    {item.favoriteCount}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <Pagination
        count={Math.ceil(items.total / 10)}
        page={currentPage}
        onChange={onPageChange}
        size="medium"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
        }}
        renderItem={(item) => (
          <PaginationItem {...item} sx={{ fontSize: 12 }} />
        )}
      />
    </section>
  );
}

export default AllItems;
