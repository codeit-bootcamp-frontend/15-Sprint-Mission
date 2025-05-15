import { useState, useEffect, useCallback } from "react";

import ItemList from "./component/ItemList";
import { getProducts } from "../../api/itemAPI";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width <= 425) {
    // 모바일
    return 1;
  } else if (width <= 768) {
    // 테블릿
    return 2;
  } else {
    // 데스크톱
    return 4;
  }
};

function BestItem() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const handleResize = useCallback(() => {
    const newSize = getPageSize();
    setPageSize((prevSize) => (prevSize !== newSize ? newSize : prevSize));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts({
          orderBy: "favorite",
          pageSize: pageSize,
        });
        setItems(data.list);
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생:", error);
      }
    };

    fetchItems();
  }, [pageSize]);

  return (
    <div className="best-item-container">
      <h1 className="best-item-title">베스트 상품</h1>
      <ItemList items={items} className="best-item-list" />
    </div>
  );
}
export default BestItem;
