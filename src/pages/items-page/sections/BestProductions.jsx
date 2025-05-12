import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getItems } from "@apis/itemsApi";
import ProductCard from "@components/ProductCard";
import { breakpoints } from "@constants/breakpoints";
import { useResponsivePageSize } from "@pages/items-page/hooks/useResponsivePageSize";

const BestProductions = () => {
  const [bestItemsData, setBestItemsData] = useState();
  const pageSize = useResponsivePageSize({
    desktop: 4,
    tablet: 2,
    mobile: 1,
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await getItems(1, pageSize, "favorite", "");
        setBestItemsData(result.list);
      } catch (error) {
        console.error("Failed to fetch best items:", error);
      }
    };

    fetchItems();
  }, [pageSize]);

  return (
    <div>
      <Title>베스트 상품</Title>
      <ItemsContainer>
        {bestItemsData?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            src={item.images[0]}
            title={item.name}
            price={item.price}
            like={item.favoriteCount}
          ></ProductCard>
        ))}
      </ItemsContainer>
    </div>
  );
};

export default BestProductions;

const Title = styled.h2`
  margin-bottom: 1.6rem;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.2rem;
  color: var(--gray900);
`;

export const ItemsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr); /* 모바일: 2개 */

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* 태블릿: 3개 */
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr); /* PC: 5개 */
  }
`;
