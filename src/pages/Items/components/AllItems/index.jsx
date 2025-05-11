import { useState, useRef, useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import useProducts from "@/hooks/useProducts";
import useScreenSize from "@/hooks/useScreenSize";
import heart from "/icons/ic_heart.svg";
import defaultImage from "/images/Img_default.png";
import {
  BestItemsContainer,
  BestItemsHeartContainer,
  BestItemsHeart,
  BestItemsName,
  BestItemsPrice,
} from "../BestItems/BestItems.styles";
import {
  AllItemsGridContainer,
  AllItemsContainer,
  AllItemsImage,
} from "./AllItems.styles";
import { useNavigate } from "react-router-dom";
import AllItemsHeader from "./AllItemsHeader";

function AllItems() {
  const { isMobile, isTablet } = useScreenSize();
  const [searchTerm, setSearchTerm] = useState(""); // 입력용
  const [keyword, setKeyword] = useState(""); // 실제 검색 요청용
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recent");
  const sortMenuRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { items, totalCount, loading, error } = useProducts(
    currentPage,
    10,
    sortOption,
    keyword
  );
  const navigate = useNavigate();

  const onPageChange = (e, page) => {
    setCurrentPage(page);
  };

  const displayItems = isMobile
    ? items?.slice(0, 4)
    : isTablet
    ? items?.slice(0, 6)
    : items;

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
    setCurrentPage(1);
    setSortMenuOpen(false);
  };

  // 검색 실행 핸들러
  const handleSearch = () => {
    setKeyword(searchTerm);
    setCurrentPage(1);
  };

  const getSortButtonText = () => {
    if (isMobile) return "";
    return sortOption === "recent" ? "최신순" : "좋아요 순";
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <section css={BestItemsContainer}>
      <AllItemsHeader
        isMobile={isMobile}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortMenuOpen={sortMenuOpen}
        setSortMenuOpen={setSortMenuOpen}
        handleSortOptionSelect={handleSortOptionSelect}
        getSortButtonText={getSortButtonText}
        sortMenuRef={sortMenuRef}
        onSearch={handleSearch} // 검색 실행
      />
      <main>
        {/* 상품이 없을 때에도 헤더는 렌더링하고 상품 목록은 표시하지 않음 */}
        {Array.isArray(items) && items.length > 0 ? (
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
                        onClick={() => {
                          navigate(`/items/${item.id}`);
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
        ) : (
          <div>상품이 없습니다.</div>
        )}
      </main>
      <Pagination
        count={Math.ceil(totalCount / 10)} // 전체 페이지 계산
        page={currentPage}
        onChange={onPageChange}
        defaultPage={1}
        siblingCount={2}
        size="medium"
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
          margin: "0 auto 58px",
          "& .MuiPaginationItem-ellipsis": {
            display: "none",
          },
        }}
        renderItem={(item) => {
          if (item.type === "page") {
            const pageNum = item.page;

            let startPage, endPage;

            if (currentPage <= 3) {
              startPage = 1;
              endPage = 5;
            } else if (currentPage >= Math.ceil(totalCount / 10) - 2) {
              startPage = Math.max(1, Math.ceil(totalCount / 10) - 4);
              endPage = Math.ceil(totalCount / 10);
            } else {
              startPage = currentPage - 2;
              endPage = currentPage + 2;
            }

            if (pageNum < startPage || pageNum > endPage) {
              return null;
            }
          }
          return <PaginationItem {...item} sx={{ fontSize: 12 }} />;
        }}
      />
    </section>
  );
}

export default AllItems;
