import useScreenSize from "@/hooks/useScreenSize";
import useProducts from "@/hooks/useProducts";
import {
  BestItemsContainer,
  BestItemsTitle,
  BestItemsGridContainer,
  BestItemsImage,
  BestItemsHeart,
  ItemsContainer,
  BestItemsName,
  BestItemsHeartContainer,
  BestItemsPrice,
} from "./BestItems.styles";
import heart from "/icons/ic_heart.svg";

function BestItems() {
  const { isMobile, isTablet } = useScreenSize();
  const { items, loading, error } = useProducts(1, 4, "favorite");

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
      <header>
        <h2 css={BestItemsTitle}>베스트 상품</h2>
      </header>
      <main>
        <ul css={BestItemsGridContainer}>
          {displayItems.map((item) => (
            <li key={item.id}>
              <article css={ItemsContainer}>
                {item.images && (
                  <img src={item.images} alt={item.name} css={BestItemsImage} />
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

export default BestItems;
