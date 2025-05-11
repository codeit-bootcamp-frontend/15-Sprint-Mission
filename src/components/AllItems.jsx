import { useEffect, useState } from "react";
import axios from "axios";
import ItemCreateButton from "./ItemCreatButton";

const Allitems = () => {
  const [items, setItems] = useState([]);

  const [pageSize, setPageSize] = useState("");

  // 화면 크기에 따라 pageSize 설정
  // 모바일: 1, 태블릿: 2, PC: 4
  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width <= 744) {
      setPageSize(4); // 모바일
    } else if (width >= 744 && width < 1200) {
      setPageSize(6); // 태블릿
    } else {
      setPageSize(10); // PC
    }
  };

  // API 호출
  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize); // 리사이즈 이벤트

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

    // 클린업: 리사이즈 이벤트 제거
    return () => window.removeEventListener("resize", updatePageSize);
  }, [pageSize]); // pageSize 변경 시 재호출

  return (
    <div className="px-16 pt-24 w-376 tablet:w-744 pc:w-1200 mx-auto">
      <h1 className="text-xl font-bold text-secondary-900 ">전체 상품</h1>
      <ItemCreateButton />
      <div>검색인풋추가</div>
      <div>드롭다운추가</div>
      <div
        className="
          grid
          grid-cols-2
          grid-rows-2
          tablet:grid-cols-3
          pc:grid-cols-5
          gap-y-32
          tablet:gap-y-40 
          gap-x-8
          tablet:gap-x-16 pc:gap-x-24
          mt-16
          justify-items-center
          "
      >
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-6 ">
            <img
              src={item.images[0]}
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
        <div>페이지네이션추가</div>
      </div>
    </div>
  );
};

export default Allitems;
