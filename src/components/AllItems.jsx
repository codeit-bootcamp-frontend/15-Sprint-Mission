import { useEffect, useState } from "react";
import axios from "axios";
import ItemCreateButton from "./ItemCreateButton";
import SearchInput from "./SearchInput";
import EmptyItems from "../img/emptyItems.svg";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width <= 744) return 4; // 모바일
  if (width < 1200) return 6; // 태블릿
  return 10; // PC
};

const Allitems = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  // 화면 크기 변화에 따라 pageSize 갱신
  const updatePageSize = () => {
    setPageSize(getPageSize());
  };

  useEffect(() => {
    window.addEventListener("resize", updatePageSize);

    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products",
          {
            params: {
              page: 1,
              pageSize: pageSize,
              orderBy: "recent",
            },
            headers: {
              Accept: "application/json",
            },
          }
        );
        setItems(response.data.list || []);
      } catch (error) {
        console.error("상품을 불러오는 데 실패했습니다.", error);
      }
    };

    fetchItems();

    return () => window.removeEventListener("resize", updatePageSize);
  }, [pageSize]);

  return (
    <div className="px-16 pt-24 w-376 tablet:w-744 pc:w-1200 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-secondary-900">전체 상품</h1>
        <ItemCreateButton />
      </div>
      <div className="flex items-center justify-between mt-8">
        <SearchInput />
        <div>드롭다운추가</div>
      </div>
      <div
        className="
          grid
          grid-cols-2
          grid-rows-2
          tablet:grid-cols-3
          pc:grid-cols-5
          gap-y-32 tablet:gap-y-40 
          gap-x-8 tablet:gap-x-16 pc:gap-x-24
          justify-items-center
          mt-16
        "
      >
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-6">
            <img
              src={item.images?.[0] || EmptyItems}
              alt={item.name}
              className="size-168 tablet:size-221 object-cover rounded-xl mb-10"
            />
            <h2 className="text-md font-medium text-secondary-800">
              {item.name}
            </h2>
            <p className="text-lg font-bold text-secondary-800">
              {item.price.toLocaleString()}원
            </p>
            <p className="text-xs font-medium text-secondary-600">
              ♡ {item.favoriteCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allitems;
