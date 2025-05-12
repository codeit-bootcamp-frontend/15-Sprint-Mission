import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getItems } from "@apis/itemsApi";
import ProductCard from "@components/ProductCard";
import { breakpoints } from "@constants/breakpoints";
import useDeviceSize from "@hooks/useDeviceSize";
import Pagination from "@pages/items-page/components/Pagination";
import AllProductionsHeader from "@pages/items-page/components/AllProductionsHeader";
import { useResponsivePageSize } from "@pages/items-page/hooks/useResponsivePageSize";

const AllProductions = () => {
  const { isMobile } = useDeviceSize();
  const [itemsData, setItemsData] = useState();
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();

  const pageSize = useResponsivePageSize({
    desktop: 10,
    tablet: 6,
    mobile: 4,
  });

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const result = await getItems(page, pageSize, sort, "");
        setItemsData(result.list);
        setTotalCount(result.totalCount);
      } catch (error) {
        console.error("Failed to fetch donate data:", error);
      }
    };

    fetchItemsData();
  }, [pageSize, page, sort]);

  return (
    <div>
      <AllProductionsHeader
        isMobile={isMobile}
        sort={sort}
        onSortChange={setSort}
        onPageChange={setPage}
      />

      <ItemsContainer>
        {itemsData?.map((item) => (
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

      <PaginationContainer>
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          page={page}
          onChange={setPage}
        />
      </PaginationContainer>
    </div>
  );
};

export default AllProductions;

const ItemsContainer = styled.div`
  margin-top: 1.6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr); /* 모바일: 2개 */

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr); /* 태블릿: 3개 */
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr); /* PC: 5개 */
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
