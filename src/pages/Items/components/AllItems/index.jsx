import useProducts from "@/hooks/useProducts";
import heart from "@/assets/icons/ic_heart.svg";
import useScreenSize from "@/hooks/useScreenSize";
import defaultImage from "@/assets/images/Img_default.png";
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
} from "./AllItems.styles";
import filterMobile from "@/assets/icons/ic_filter_mobile.svg";
import filter from "@/assets/icons/ic_filter.svg";
import { Link } from "react-router-dom";

function AllItems() {
  const { items, loading, error } = useProducts(1, 10);
  const { isMobile, isTablet } = useScreenSize();

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!Array.isArray(items) || items.length === 0)
    return <div>상품이 없습니다.</div>;

  const displayItems = isMobile
    ? items.slice(0, 1)
    : isTablet
    ? items.slice(0, 2)
    : items;

  return (
    <section css={BestItemsContainer}>
      <header css={AllItemsHeader}>
        <h2 css={BestItemsTitle}>전체 상품</h2>
        <div>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <Link to="/additem">상품 등록하기</Link>
          <button>
            최신순
            <img src={isMobile ? filterMobile : filter} alt="필터" />
          </button>
        </div>
      </header>
      <main>
        <ul css={AllItemsGridContainer}>
          {displayItems.map((item) => (
            <li key={item.id}>
              <article css={AllItemsContainer}>
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
    </section>
  );
}

export default AllItems;
