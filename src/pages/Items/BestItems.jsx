import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useResponsivePageSize from "../../Hook/UseResponsivePageSize.";
import { Link } from "react-router-dom";

const AllItemContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 94px;
`;

const AllItemTitle = styled.div`
  font-size: 20px;
  margin: 0 auto;
  width: 100%;
  font-size: 20px;
  color: #111827;
  font-weight: bold;

  @media (max-width: 1199px) {
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
  padding: 24px;
`;

const ItemsContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
  justify-content: center;
`;

const ItemCardLink = styled(Link)``;

const ItemCard = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 16px;

  @media (max-width: 1199px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 282px;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: #333;
`;

const ItemLikes = styled.div`
  font-size: 13px;
  color: #888;
`;

const AllItem = () => {
  const bestSize = useResponsivePageSize({ desktop: 4, tablet: 2, mobile: 1 });
  const pageSize = useResponsivePageSize({ desktop: 10, tablet: 6, mobile: 4 });

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.list);
      })
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, []);

  const bestItems = items.slice(0, bestSize);
  const currentItems = items.slice(0, pageSize);

  return (
    <>
      <AllItemContainer>
        <ItemWrapper>
          <AllItemTitle>베스트 상품</AllItemTitle>
          <ItemsContainer>
            {bestItems.map((item) => (
              <ItemCardLink to="/Product">
                <ItemCard key={item.id}>
                  <Link to={`/Product/${item.id}`}>
                    <ItemImage src={item.images[0]} alt={item.name} />
                  </Link>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                  <ItemLikes>❤️ {item.favoriteCount}</ItemLikes>
                </ItemCard>
              </ItemCardLink>
            ))}
          </ItemsContainer>
        </ItemWrapper>
      </AllItemContainer>
    </>
  );
};

export default AllItem;
