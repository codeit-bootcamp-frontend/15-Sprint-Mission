import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useResponsivePageSize from "../../Hook/UseResponsivePageSize.";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  gap: 12px;
  padding: 0 16px;
`;

const AllItemTitle = styled.div`
  font-size: 20px;
  color: #111827;
  font-weight: bold;
`;

const ProductToolbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
  min-width: 0;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  height: 42px;
  border-radius: 12px;
  flex: 1;
  max-width: 100%;
  max-width: 325px;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const AddLink = styled(Link)``;

const AddProductButton = styled.button`
  height: 42px;
  border-radius: 8px;
  padding: 0 16px;
  background-color: #3692ff;
  border: none;
  color: #f3f4f6;
  font-size: 16px;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
`;

const SortSelect = styled.select`
  height: 42px;
  background-color: #ffffff;
  color: #1f2937;
  text-indent: 16px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  background-image: url("/images/Arrow_down.png");
  appearance: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: right 12px center;
  font-size: 18px;
  padding-right: 32px;
  flex-shrink: 0;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
  padding: 24px 0;
`;

const ItemsContainer = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 12px;
  }
`;

const ItemCardLink = styled(Link)``;

const ItemCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 16px;
`;

const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`;

const PageButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#3692ff" : "white")};
  color: ${({ active }) => (active ? "white" : "#1f2937")};
  border: 1px solid #d1d5db;
  cursor: pointer;
`;

const AllItem = () => {
  const pageSize = useResponsivePageSize({ desktop: 10, tablet: 6, mobile: 4 });

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("latest");

  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.list);
      })
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, []);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setCurrentPage(1);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "likes") return b.favoriteCount - a.favoriteCount;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = sortedItems.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(sortedItems.length / pageSize);

  return (
    <>
      <Header>
        <AllItemTitle>전체 상품</AllItemTitle>
        <ProductToolbar>
          <SearchWrapper>
            <SearchIcon src="images/Search.png" />
            <SearchInput
              type="Search"
              name="Search"
              placeholder="검색할 상품을 입력해주세요"
            />
          </SearchWrapper>
          <AddLink to="/AddItem">
            <AddProductButton>상품 등록하기</AddProductButton>
          </AddLink>
          <SortSelect value={sortType} onChange={handleSortChange}>
            <option value="latest">최신순</option>
            <option value="likes">좋아요순</option>
          </SortSelect>
        </ProductToolbar>
      </Header>

      <ItemWrapper>
        <ItemsContainer>
          {currentItems.map((item) => (
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

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
        </Pagination>
      </ItemWrapper>
    </>
  );
};

export default AllItem;
