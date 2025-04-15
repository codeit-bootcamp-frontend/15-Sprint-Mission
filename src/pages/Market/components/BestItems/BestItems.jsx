import { useState, useEffect } from "react";
import { getProducts } from "../../../../../src/api";
import "./BestItems.css";
import Item from "../Item/Item";

const BestItems = ({ deviceType }) => {
  const [items, setItems] = useState([]);

  const getItemSize = () => {
    if (deviceType === "mobile") return "best-one";
    if (deviceType === "tablet") return "best-two";
    return "best-four";
  };

  useEffect(() => {
    async function getBestItems() {
      let pageSize = 4;
      if (deviceType === "tablet") pageSize = 2;
      if (deviceType === "mobile") pageSize = 1;

      const data = await getProducts({
        pageSize,
        orderBy: "favorite",
      });
      setItems(data.list);
    }

    getBestItems();
  }, [deviceType]);

  return (
    <>
      <div className="BestItems">
        <p className="title">베스트 상품</p>
        <div className="item-list">
          {items.map((item) => {
            return <Item key={item.id} item={item} size={getItemSize()} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BestItems;
