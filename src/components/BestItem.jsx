import { useEffect, useState } from "react";
import axios from "axios";
import EmptyItems from "../img/emptyItems.svg";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width <= 744) return 1; // 모바일
  if (width < 1200) return 2; // 태블릿
  return 4; // PC
};

const BestItem = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  // 리사이즈 시 pageSize 업데이트
  const updatePageSize = () => {
    setPageSize(getPageSize());
  };

  useEffect(() => {
    window.addEventListener("resize", updatePageSize); // 리사이즈 이벤트 등록

    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/products",
          {
            params: {
              page: 1,
              pageSize: pageSize,
              orderBy: "favorite",
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

    fetchItems(); // 최초 또는 pageSize 변경 시 실행

    return () => window.removeEventListener("resize", updatePageSize); // 이벤트 클린업
  }, [pageSize]);

  return (
    <div className="px-16 pt-87 w-376 tablet:w-744 pc:w-1200 mx-auto">
      <h1 className="text-xl font-bold text-secondary-900">베스트 상품</h1>
      <div
        className="
          grid
          grid-cols-1
          tablet:grid-cols-2
          pc:grid-cols-4
          gap-10
          mt-16
          justify-items-center
        "
      >
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-6">
            <img
              src={item.images?.[0] || EmptyItems}
              alt={item.name}
              className="size-344 pc:size-282 object-cover rounded-xl mb-10"
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

export default BestItem;
