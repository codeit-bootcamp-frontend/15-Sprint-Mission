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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recent"); // "recent" 또는 "favorite"
  const sortMenuRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  // sortOption을 훅에 전달하여 서버에서 정렬된 데이터를 가져옵니다
  const { items, loading, error } = useProducts(currentPage, 10, sortOption);
  const navigate = useNavigate();

  const onPageChange = (e, page) => {
    setCurrentPage(page);
  };

  // 화면 크기에 맞게 보여줄 아이템 수 제한
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
    setCurrentPage(1); // 정렬 옵션이 변경되면 첫 페이지로 돌아갑니다
    setSortMenuOpen(false);
  };

  // 정렬 버튼 텍스트
  const getSortButtonText = () => {
    if (isMobile) return "";
    return sortOption === "recent" ? "최신순" : "좋아요 순";
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!Array.isArray(items) || items.length === 0)
    return <div>상품이 없습니다.</div>;

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
      />
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
      </main>
      <Pagination
        count={30}
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
            display: "none", // 생략 부호를 CSS로 숨김
          },
        }}
        renderItem={(item) => {
          if (item.type === "page") {
            const pageNum = item.page;

            // 항상 5개의 페이지 번호가 보이도록 조정된 로직
            let startPage, endPage;

            if (currentPage <= 3) {
              // 현재 페이지가 1, 2, 3일 경우 1~5까지 표시
              startPage = 1;
              endPage = 5;
            } else if (currentPage >= 28) {
              // 현재 페이지가 끝에 가까울 경우 마지막 5개 표시
              startPage = 26;
              endPage = 30;
            } else {
              // 그 외의 경우 현재 페이지 중심으로 앞뒤 2개씩
              startPage = currentPage - 2;
              endPage = currentPage + 2;
            }

            // 범위 밖의 페이지는 표시하지 않음
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
